import React from "react";
import Image from "next/image";
import { ArrowTopRightOnSquare } from "@heroicons/react/24/outline";

const stats = [
  { id: 1, name: "Visitors per month", value: "1,000" },
  { id: 2, name: "Requests Through Cloudflare", value: "6.19k" },
  { id: 3, name: "Stopping the bad guys with Cloudflare", value: "300" },
];

function activities() {
  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h1
              className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl"
              id="home"
            >
              Activities
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              私の作品などが集められています。そのほかにも知りたかったり、リクエストしたければ個人的に連絡をください。
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            id="scratch"
          >
            Scratch
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            スクラッチの作品です。積極的に活動していたのは少し前の事ですが、活動していた頃の作品の一部をおいておきます。
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            ＊音が出るので注意です。
          </p>
        </div>
      </div>
      <div className="mx-auto flex">
        <div className="mx-auto flex">
          <iframe
            src="https://scratch.mit.edu/projects/703595946/embed"
            allowtransparency="true"
            width="485"
            height="402"
            frameborder="0"
            allowfullscreen
            className="max-w-full"
          ></iframe>
        </div>
      </div>
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            id="pages"
          >
            Web sites
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            作ったウェブサイト集です。最近は動的なウェブサイトに挑戦中です。
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:mx-3 md:grid-cols-2 2xl:grid-cols-4">
        <div className="mx-auto mt-5 items-center justify-center sm:flex sm:flex-1">
          <div>
            <Image
              src="/kbk-homepage.png"
              alt="homepage"
              height="462"
              width="400"
              className="mx-auto rounded-lg shadow-md"
            />
            <h3 className="mt-5 text-center text-2xl font-bold md:mt-8 md:text-3xl lg:mt-12 lg:text-4xl">
              More Older Homepage
            </h3>
            <div class="mt-3 justify-center">
              <p className="w-96 max-w-full text-center">
                2個前のホームページです。プログラムは頑張ったのですが、デザインや色合い(UI)が結構クソだしこのなんかやるせない感
              </p>
              <a href="https://kobakoo.github.io/kbk-home/" target="_blank">
                <button class="mx-auto mt-3 flex justify-center rounded bg-sky-400 py-2 px-4 font-bold text-white hover:bg-sky-600">
                  Visit
                  {/* <ArrowTopRightOnSquare
                  className="mx-1 text-white"
                  aria-hidden="true"
                /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="m-auto ml-1 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-5 items-center justify-center sm:flex sm:flex-1">
          <div>
            <Image
              src="/Kobako.png"
              alt="homepage"
              width="400"
              height="300"
              className="mx-auto rounded-lg shadow-md"
            />
            <h3 className="mt-5 text-center text-2xl font-bold md:mt-8 md:text-3xl lg:mt-12 lg:text-4xl">
              Old Homepage
            </h3>
            <div class="mt-3 justify-center">
              <p className="w-96 max-w-full text-center">
                1個前のホームページです。個人的にはいいデザインになったと思ってます。悪いところがあったらContactより指摘お願いします。
              </p>
              <a href="https://www1.kobakoo.com" target="_blank">
                <button class="mx-auto mt-3 flex justify-center rounded bg-sky-400 py-2 px-4 font-bold text-white hover:bg-sky-600">
                  Visit
                  {/* <ArrowTopRightOnSquare
                  className="mx-1 text-white"
                  aria-hidden="true"
                /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="m-auto ml-1 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-5 items-center justify-center sm:flex sm:flex-1">
          <div>
            <Image
              src="/blog.png"
              alt="homepage"
              width="400"
              height="300"
              className="mx-auto overflow-hidden rounded-lg shadow-md"
            />
            <h3 className="mt-5 text-center text-2xl font-bold md:mt-8 md:text-3xl lg:mt-12 lg:text-4xl">
              Blog
            </h3>
            <div class="mt-3 justify-center">
              <p className="w-96 max-w-full text-center">
                Next.jsとmicrocmsを活用して作った初の動的ページです。記事は暇だったら投稿します。記事内容も募集中!
              </p>
              <a href="https://blog.kobakoo.com" target="_blank">
                <button class="mx-auto mt-3 flex justify-center rounded bg-sky-400 py-2 px-4 font-bold text-white hover:bg-sky-600">
                  Visit
                  {/* <ArrowTopRightOnSquare
                  className="mx-1 text-white"
                  aria-hidden="true"
                /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="m-auto ml-1 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-5 items-center justify-center sm:flex sm:flex-1">
          <div>
            <Image
              src="/scratchfd.png"
              alt="homepage"
              width="400"
              height="300"
              className="mx-auto rounded-lg shadow-md"
            />
            <h3 className="mt-5 text-center text-2xl font-bold md:mt-8 md:text-3xl lg:mt-12 lg:text-4xl">
              ScratchFD Wiki
            </h3>
            <div class="mt-3 justify-center">
              <p className="w-96 max-w-full text-center">
                ScrstchFDというサーバーのWikiです。Meta(旧Facebook)社が開発したフレームワーク(?)のDocusaurus
                2.3.1を使用して作っています。
              </p>
              <a href="https://scratchfd.netlify.app/" target="_blank">
                <button class="mx-auto mt-3 flex justify-center rounded bg-sky-400 py-2 px-4 font-bold text-white hover:bg-sky-600">
                  Visit
                  {/* <ArrowTopRightOnSquare
                  className="mx-1 text-white"
                  aria-hidden="true"
                /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="m-auto ml-1 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            id="others"
          >
            Others
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            私の作品集（アカウント）です。その他としておいておきます。
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="bg-white sm:mx-3">
          <div className="mx-auto max-w-7xl py-16 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <svg
                viewBox="0 0 1024 1024"
                className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
                aria-hidden="true"
              >
                <circle
                  cx={512}
                  cy={512}
                  r={512}
                  fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                  fillOpacity="0.7"
                />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#01001f" />
                    <stop offset={1} stopColor="#47b8e4" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  My Github repositories
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300"></p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <a
                    href="https://github.com/kobakoo"
                    target="_blank"
                    className="flex items-center justify-center rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Visit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="m-auto ml-1 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <Image
                  className="absolute top-0 left-0 w-[57rem] max-w-none overflow-hidden rounded-md bg-white/5 ring-1 ring-white/10"
                  src="/github.png"
                  alt="App screenshot"
                  width={1824}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white sm:mx-3">
          <div className="mx-auto max-w-7xl py-16 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <svg
                viewBox="0 0 1024 1024"
                className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
                aria-hidden="true"
              >
                <circle
                  cx={512}
                  cy={512}
                  r={512}
                  fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                  fillOpacity="0.7"
                />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#01001f" />
                    <stop offset={1} stopColor="#47b8e4" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  My Scratch projects
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300"></p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <a
                    href="https://scratch.mit.edu/users/12_468/"
                    target="_blank"
                    className="flex items-center justify-center rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Visit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="m-auto ml-1 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <Image
                  className="absolute top-0 left-0 w-[57rem] max-w-none overflow-hidden rounded-md bg-white/5 ring-1 ring-white/10"
                  src="/scratch.png"
                  alt="App screenshot"
                  width={1824}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            id="security"
          >
            Security
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            サイト訪問者のデータは安全に保護されます
          </p>
        </div>
      </div>
      <div className="mx-auto mt-11 max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default activities;
