import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const sponsors = [
  {
    name: "NakakouTV",
    logo: "/logo/nakakoutv.jpeg",
    url: "https://nakakoutv.github.io/",
    desc: "nakakoutvさんは、プログラマーであり、ゲーム制作を行っている方です。ScratchやUnityなどのプログラミング言語に関する投稿が多く見られます。",
  },
  {
    name: "haru-ymth",
    logo: "/logo/haruymth.png",
    url: "https://haruymth.github.io/",
    desc: "haru-ymthさんはプログラマーであり、ScratchやUnityなどのプログラミング言語に関する投稿が多く見られます。また、スマートフォンを持っていない中学生についての投稿もされています。",
  },
  {
    name: "ツナ",
    logo: "/logo/tuna.jpeg",
    url: "https://sites.google.com/view/tuna521",
    desc: "自称：超絶天才Internet美少女。音ゲーやRPGなどのゲーム制作を行っている方であり、イラストも描かれています",
  },
  {
    name: "卑弥呼系ラーメン",
    logo: "/logo/ramen.jpeg",
    url: "https://twitter.com/ontamagodayo",
    desc: "自作PCとかジャンク漁りとかUnityとかウェブデザインとか競プロとかをやっている人(?)です。",
  },
  {
    name: "荻窪遼",
    logo: "/logo/wowane.jpeg",
    url: "https://wowane.f5.si",
    desc: "日本の学生で、TwitterとGitHubのアカウントを持っているようです. また、Scratcherというアカウント移行系のプログラマーでもあります. ",
  },
];

export default function Sponsors() {
  return (
    <>
      <Head>
        <title>Our Sponsors</title>
      </Head>
      <div className="bg-white sm:py-16">
        <div className="mx-auto max-w-7xl px-2 lg:px-4">
          <div className="mx-auto max-w-2xl sm:text-center">
            <Image
              className="mx-auto"
              src="/party-popper.png"
              alt="happy! partners!"
              width={200}
              height={200}
            ></Image>
            <h1 className="mb-8 text-center text-3xl font-bold sm:mt-8">
              Our Sponsors
            </h1>
          </div>
        </div>
      </div>

      <div className="flex min-h-screen flex-col items-center ">
        <div className="grid w-full grid-cols-1 gap-8 sm:mx-auto sm:w-9/12 md:grid-cols-2 lg:mx-auto lg:w-9/12 lg:grid-cols-3">
          {sponsors.map((sponsor) => (
            <Link
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-5 shadow-md backdrop-blur-lg"
            >
              <Image
                className="mx-auto h-64 w-64 rounded-full object-contain shadow-sm"
                src={sponsor.logo}
                alt={sponsor.name}
                width={100}
                height={100}
              />
              <div className="w-full">
                <h3 className="w-full text-center text-2xl font-bold">
                  {sponsor.name}
                </h3>
                <p className="mx-auto mt-6 w-9/12 text-xs">{sponsor.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div class="bg-blue-500 py-4 text-white">
        <div class="container mx-auto flex items-center justify-between px-4">
          <p class="text-lg font-bold">協賛メンバーを募集中！</p>
          <Link
            href="/contact"
            class="rounded-full bg-white py-2 px-4 font-bold text-blue-500"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </>
  );
}
