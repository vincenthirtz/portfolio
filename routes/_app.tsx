import { PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html lang="fr">
      <head>
        <title>Vincent Hirtz - Web Developer</title>
        <meta name="description" content="Web Developer" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <nav class="flex justify-between text-white w-screen">
          <div class="px-5 xl:px-12 py-6 flex w-full items-center">
            <a class="text-3xl font-bold font-heading" href="#">
              {/* <!-- <img class="h-9" src="logo.png" alt="logo"> --> */}
              Logo Here.
            </a>
            <ul class="flex list-none px-4 mx-auto font-semibold font-heading space-x-12">
              <li>
                <a class="hover:text-gray-200" href="/">
                  Accueil
                </a>
              </li>
              <li>
                <a class="hover:text-gray-200" href="/blog">
                  Blog
                </a>
              </li>
              <li>
                <a class="hover:text-gray-200" href="/shop">
                  Shop
                </a>
              </li>
              <li>
                <a class="hover:text-gray-200" href="/cv">
                  CV
                </a>
              </li>
              <li>
                <a class="hover:text-gray-200" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <div class="hidden xl:flex items-center space-x-5 items-center">
              <a class="hover:text-gray-200" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </a>
              <a class="flex items-center hover:text-gray-200" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span class="flex absolute -mt-5 ml-4">
                  <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                </span>
              </a>
              <a class="flex items-center hover:text-gray-200" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </nav>
        <div class="max-w-xl my-5 mx-auto lg:mx-2 sm:mx-1 text-sm text-white font-plex leading-none tracking-wide md:my-3">
          <Component />
        </div>
      </body>
    </html>
  );
}
