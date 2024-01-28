import { Translation } from "../utils/types.ts";

const Me = (data: { translation: Translation["me"] }) => (
  <div class="flex md:flex-col justify-between gap-10 md:gap-y-3 items-center md:items-start">
    <div class="md:order-2">
      <h1>Vincent Hirtz</h1>
      <h2 class="my-1">Developer Front End</h2>
      <p class="whitespace-pre-wrap">{data.translation.text}</p>
    </div>
    <img
      class="rounded-full flex-shrink-0 md:order-1 md:w-8"
      src="pixels/me.jpeg"
      height="150"
      width="150"
      alt="Portrait de Vincent Hirtz"
    />
  </div>
);

export default Me;
