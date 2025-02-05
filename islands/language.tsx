import { State } from "../utils/types.ts";

const Language = (data: { lang: State["lang"] }) => {
  return (
    <button
      class="h-4 w-4 text-gray-light font-bold bg-gray-dark rounded-xl p-0.5 cursor-pointer group border-2 transition-colors border-transparent hover:border-gray-light"
      onClick={() => {
        data.lang === "fr"
          ? (document.cookie = "lang=fr")
          : (document.cookie = "lang=en");
        location.reload();
      }}
    >
      {data.lang === "en" ? "EN" : "FR"}
    </button>
  );
};
export default Language;
