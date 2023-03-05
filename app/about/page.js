import React from "react";
import Image from "next/image";

function page() {
  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h1
              className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl"
              id="home"
            >
              About
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              私がどんな人か知りたいですか？（小並感）そんな人にこのページはおすすめ!
              <br />
              まぁ、そんな人はいないんですけどね。。。
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto grid h-full w-auto max-w-full grid-cols-1 gap-4 lg:grid-cols-2">
        <Image
          src="/Designer.svg"
          width="300"
          height="300"
          alt="Me"
          className="align-center m-5 mx-auto flex w-10/12 max-w-full items-center justify-center"
        />
        <div className="mx-auto flex w-3/4">
          <div className="align-center m-auto justify-center">
            <h2 className="m-auto mb-3 w-full max-w-full text-3xl font-bold">
              About me
            </h2>
            <p className="mr-5 font-sans text-sm md:text-base">
              こんにちは。コバコ(kobako)です。どっかの化粧ブランドのパクリではありません。はじめましての方は初めましてですね。私についての説明を箇条書きにします。年齢は13歳で中学１年生です(2023)私はまだまだ勉強中ではありますがプログラミングを勉強しています。JSやDBにも最近(2023/03)は手を付けてみてます。最近FirestoreとNext.jsの接続に成功しました。Vue.jsにも練習中です。また、こんな感じのウェブデザインを行うことができます。ですが、FigmaとかAdobeXDがあまり使えないです。今度挑戦しようと思います。
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto grid h-full w-auto max-w-full grid-cols-1 gap-4 lg:grid-cols-2">
        <Image
          src="/webDev.svg"
          width="300"
          height="300"
          alt="Me"
          className="align-center m-5 mx-auto flex w-10/12 max-w-full items-center justify-center"
        />
        <div className="mx-auto flex w-3/4">
          <div className="align-center m-auto justify-center">
            <h2 className="m-auto mb-3 w-full max-w-full text-3xl font-bold">
              About this site
            </h2>
            <p className="mr-5 font-sans text-sm leading-tight md:text-base">
              このサイトの制作経緯などについて書きます。前回作ったホームページ(
              <a className="text-sky-600" href="https://www1.kobakoo.com">
                こちら
              </a>
              ＊現在サイト移行の影響でリンクがぶっ壊れてます)が、飽きてきた(!?)ので作り直しました。今回は色合いを少し変えてみましたがどうでしょう？
              前は一番めんどかったのがレスポンシブにするところでしたが、今回はTailwindCSSを使用して楽したのでそこに関しては楽々設定することができました。。
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto grid h-full w-auto max-w-full grid-cols-1 gap-4 lg:grid-cols-2">
        <Image
          src="/Reading.svg"
          width="300"
          height="300"
          alt="Me"
          className="align-center m-5 mx-auto flex w-10/12 max-w-full items-center justify-center"
        />
        <div className="mx-auto flex w-3/4">
          <div className="align-center m-auto justify-center">
            <h2 className="m-auto mb-3 w-full max-w-full text-3xl font-bold">
              Hobbies
            </h2>
            <p className="mr-5 font-sans text-sm leading-tight md:text-base">
              趣味についてですね。私には実はいろんな趣味があったりします。最近は本を読んだり、それこそプログラミングをしています。最近読んだ本は「人を動かす」ですね。死ぬ前に一回は読め(命令)。他に習い事としては水泳をやっていました。小６までやってましたね。クロールで50mは27秒,25mは14秒ぐらいで泳げるぐらいでした。結構速いですね()
              あとは空手をやっていたり、一応黒帯です。塾も行っています。塾は上から一番目か二番目のクラスに大体います。なんか自慢みたいになってしまいましたね。以上です
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
