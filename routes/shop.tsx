import Footer from "../components/footer.tsx";
import { State } from "../utils/types.ts";
import { RouteContext } from "$fresh/server.ts";
import { formatCurrency } from "@/utils/data.ts";
import { graphqlClient } from "@/utils/graphql.ts";
import IconCart from "@/components/IconCart.tsx";
import { List, Product } from "../utils/types.ts";

const q = `{
    products(first: 25, channel: "default-channel", filter:{categories:["Q2F0ZWdvcnk6Mjc="]}) {
      edges {
        node {
          id
          name
          slug
          description
          media{
            url
            alt
          }
          thumbnail{
            url
            alt
          }
          pricing{
            priceRange{
              start{
                gross{
                  currency
                  amount
                }
              }
            }
          }
        }
      }
    }
  }`;
interface Data {
  products: List<{ node: Product }>;
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const data = await graphqlClient<Data>(q);
    return ctx.render(data.products);
  },
};

const ContactPage = (ctx: RouteContext) => {
  const lang = ctx.state.lang as State["lang"];
  const translation = ctx.state.translation as State["translation"];
  const edges = ctx.data.edges;
  return (
    <div>
      <div
        class="w-11/12 max-w-5xl mx-auto mt-28"
        aria-labelledby="information-heading"
      >
        <h2 id="information-heading" class="sr-only">
          Product List
        </h2>
        <div>
          {edges.map((edge) => (
            <ProductCard product={edge.node} />
          ))}
        </div>
      </div>
      <Footer translation={translation.footer} />
    </div>
  );
};

function ProductCard(props: { product: Product }) {
  const { product } = props;

  const thumbnail = product.media[0] || product.thumbnail;

  return (
    <a key={product.id} href={`/products/${product.slug}`} class="group">
      <div class="w-full bg-white rounded-xl overflow-hidden border-2 border-gray-200 transition-all duration-500 relative">
        {thumbnail && (
          <img
            src={thumbnail.url}
            alt={thumbnail.alt}
            width={500}
            height={500}
            class="w-full h-full object-center object-contain absolute block"
          />
        )}
        <div class="w-full h-full flex items-center justify-center bg-[rgba(255,255,255,0.6)] opacity-0 group-hover:opacity-100 transition-all duration-500">
          <IconCart size={30} />
        </div>
      </div>
      <div class="flex items-center justify-between mt-3">
        <h3 class="text-lg text-gray-800 font-medium relative">
          {product.name}
          <span class="bg-gray-800 h-[3px] w-0 group-hover:!w-full absolute bottom-[-2px] left-0 transition-all duration-400" />
        </h3>
        <strong class="text-lg font-bold text-gray-800">
          {formatCurrency(product.pricing.priceRange.start.gross)}
        </strong>
      </div>
    </a>
  );
}

export default ContactPage;
