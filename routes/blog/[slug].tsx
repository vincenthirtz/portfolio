import { Handlers, PageProps } from "$fresh/server.ts";
import { RouteContext } from "$fresh/server.ts";
import Footer from "../../components/footer.tsx";
import * as gfm from "$gfm";
import { loadPost, Post } from "../../utils/posts.ts";

interface Data {
  post: Post | null;
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const post = await loadPost(ctx.params.slug);
    return ctx.render({ ...ctx.state, post });
  },
};

const slug = (ctx: RouteContext) => {
  const { post } = ctx.data;
  const lang = ctx.state.lang as State["lang"];
  const translation = ctx.state.translation as State["translation"];
  return (
    <div class="">
      <h1 class="font-bold text-5xl">{post.title}</h1>
      <time class="inline-block mt-4">
        {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <style dangerouslySetInnerHTML={{ __html: gfm.CSS }} />
      <article
        class="mt-12 markdown-body"
        dangerouslySetInnerHTML={{ __html: gfm.render(post.content) }}
      />
      <Footer translation={translation.footer} />
    </div>
  );
};

export default slug;
