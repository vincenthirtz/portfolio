import { Translation } from "../utils/types.ts";
import Card from "./card.tsx";

const Projects = (data: { translation: Translation["projects"] }) => (
  <>
    <h3>{data.translation.title}</h3>
    <div class="grid grid-cols-2 sm:grid-cols-1 gap-3">
      <Card
        link="https://denisgodefroy.fr"
        domain="denisgodefroy.fr"
        type="Dynamic Website"
        technologies="Wordpress"
        from="#ef709b"
        to="#fa9372"
      />
      <Card
        link="https://margotchalmeton.fr"
        domain="margotchalmeton.fr"
        type="Static Website"
        technologies="NextJs, Typescript"
        from="#334d50"
        to="#b5c6e0"
      />
      <Card
        link="https://eclose-coach.fr"
        domain="eclose-coach.fr"
        type="Dynamic Website"
        technologies="Wordpress"
        from="#1dbde6"
        to="#f1515e"
      />
      {
        /*
      <Project
        link="https://www.laufach.de"
        domain="laufach.de"
        type="Dynamic Website"
        technologies="Next.js, Tailwind CSS, Directus, MeiliSearch"
        from="#1dbde6"
        to="#f1515e"
      />
      <Project
        link="https://www.main-ausdauershop.de/"
        domain="main-ausdauershop.de"
        type="Static Website"
        technologies="Astro, Framer Motion"
        from="#00ff87"
        to="#60efff"
      />
      <Project
        link="https://www.zimmerfrei-bonn.de"
        domain="zimmerfrei-bonn.de"
        type="Webapp"
        technologies="Next.js, Tailwind CSS, Node.js, Fastify, Knex, PostgreSQL"
        from="#bf0fff"
        to="#cbff49"
      />
      <Project
        link="https://www.breemo.de"
        domain="breemo.de"
        type="Webshop"
        technologies="Nuxt.js, Strapi, Snipcart"
        from="#f6d5f7"
        to="#fbe9d7"
      />
      <Project
        link="https://old.mediaatrium.de"
        domain="mediaatrium.de"
        type="Static Website"
        technologies="Next.js"
        from="#696eff"
        to="#f8acff"
      />
      <Project
        link="https://markt-goldbach.de"
        domain="markt-goldbach.de"
        type="Static Website"
        technologies="Astroad, Svelte"
        from="#fbd07c"
        to="#b5c6e0"
      />
      <Project
        link="https://www.zahnarzt-herti.ch"
        domain="zahnarzt-herti.ch"
        type="Static Website"
        technologies="Next.js, Tailwind CSS, Localization, AWS SES"
        from="#a9ff68"
        to="#ff8989"
      />
      <Project
        link="https://www.ansmann.tech"
        domain="ansmann.tech"
        type="Static Website"
        technologies="Next.js, Tailwind CSS, AWS SES"
        from="#e9b7ce"
        to="#d3f3f1"
      />
      <Project
        link="https://www.sfn-neumann.de"
        domain="sfn-neumann.de"
        type="Static Website"
        technologies="Next.js, SCSS, Framer Motion"
        from="#ef709b"
        to="#fa9372"
      />
      <Project
        link="https://www.genusswerkstatt-rothenbuch.de"
        domain="genusswerkstatt-rothenbuch.de"
        type="Static Website"
        technologies="Next.js, Tailwind CSS"
        from="#84ffc9"
        to="#eca0ff"
      />
      <Project
        link="https://www.cube-manufacture.de"
        domain="cube-manufacture.de"
        type="Static Website"
        technologies="Nuxt.js, SCSS"
        from="#9bafd9"
        to="#103783"
      />
      <Project
        link="https://www.mr-werk-iserlohn.de"
        domain="mr-werk-iserlohn.de"
        type="Static Website"
        technologies="Nuxt.js, SCSS"
        from="#42047e"
        to="#07f49e"
      />
      <Project
        link="https://elektrotechnik-studieren.info/"
        domain="elektrotechnik-studieren.info"
        type="Dynamic Website"
        technologies="Astroad"
        from="#1dbde6"
        to="#f1515e"
      />
      <Project
        link="https://www.silas-schmitt.de"
        domain="silas-schmitt.de"
        type="Static Website"
        technologies="Next.js, Tailwind CSS, AWS SES"
        from="#fbd07c"
        to="#b5c6e0"
      />
      <Project
        link="https://www.sixthreeway.de"
        domain="sixthreeway.de"
        type="Static Website"
        technologies="Next.js, Strapi"
        from="#f5e6ad"
        to="#f13c77"
      /> */
      }
    </div>
  </>
);

export default Projects;
