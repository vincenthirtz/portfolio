import Menu from "../components/menu.tsx";
import Me from "../components/me.tsx";
import Footer from "../components/footer.tsx";
import { listPosts, Post } from "../utils/posts.ts";
import { State } from "../utils/types.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { RouteContext } from "$fresh/server.ts";
import { PostPreview } from "../components/postpreview.tsx";

interface Data extends State {
  posts: Post[];
}

export const handler: Handlers<Data, State> = {
  async GET(_req, ctx) {
    const posts = await listPosts();
    return ctx.render({ ...ctx.state, posts });
  },
};

const Index = (ctx: RouteContext, props: PageProps<Data>) => {
  const lang = ctx.state.lang as State["lang"];
  const translation = ctx.state.translation as State["translation"];
  const { posts } = ctx.data;
  const lastPosts = posts.slice(0, 3);
  return (
    <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1  gap-y-10 lg:gap-y-0">
      <Menu lang={lang} />
      <Me translation={translation.me} />
      <h3>Derniers articles</h3>
      <ul class="last_posts">
        {lastPosts.map((post) => <PostPreview post={post} />)}
      </ul>
      <Footer translation={translation.footer} />
    </div>
  );
};

export default Index;
