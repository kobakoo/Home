import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { createClient } from "microcms-js-sdk";

export default function HomeView() {
  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to kbk's homepage!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              コバコのホームページにようこそ！ぜひ隅々まで見てみてください。前回のものより大幅に更新しました。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/about"
                className="rounded-md bg-sky-400 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
              >
                About me
              </Link>
              {/* <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg
            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#cfcbff" />
                <stop offset={1} stopColor="#ace9ff" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </main>
  );
}

// const client = createClient({
//   serviceDomain: "kobako",
//   apiKey: "x8l6hLmhvea0rNJGj1ACz3kRJlY5UlTmsenG",
// });

// export const getStaticProps = async () => {
//   const data = await client.get({ endpoint: "blogs" });

//   return {
//     props: {
//       blog: data.contents,
//     },
//   };
// };
