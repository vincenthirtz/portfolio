import Menu from "../components/menu.tsx";
import Me from "../components/me.tsx";
import Education from "../components/education.tsx";
import Experience from "../components/experience.tsx";
import Skills from "../components/skills.tsx";
import Projects from "../components/projects.tsx";
import Footer from "../components/footer.tsx";

import { State } from "../utils/types.ts";

import { RouteContext } from "$fresh/server.ts";

const Cv = (ctx: RouteContext) => {
  const lang = ctx.state.lang as State["lang"];
  const translation = ctx.state.translation as State["translation"];
  return (
    <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1  gap-y-10 lg:gap-y-0">
      <Menu lang={lang} />
      <Me translation={translation.me} />
      <Education translation={translation.education} />
      <Experience translation={translation.experience} />
      <Skills translation={translation.skills} />
      <Projects translation={translation.projects} />
      <Footer translation={translation.footer} />
    </div>
  );
};

export default Cv;
