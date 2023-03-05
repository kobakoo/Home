import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import {
  FlagIcon,
  WindowIcon,
  ShieldCheckIcon,
  FolderIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

export default function Activities() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-sky-400">
                Category
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Activities
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                私の活動したものや作品などがあります。
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/activities.png"
            alt="window"
            height="1442"
            width="2442"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <FlagIcon
                    className="mt-1 h-5 w-5 flex-none text-sky-400"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Scratch.
                    </strong>
                    私がScratchで活動していたときの作品を置いています。主に活動していた時期は2022/08ぐらいまでですが、閏年に一回ぐらいは更新するかもしれないです。
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <WindowIcon
                    className="mt-1 h-5 w-5 flex-none text-sky-400"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Web sites
                    </strong>
                    私の作ったウェブサイト集です。最近からは動的なウェブサイトにも挑戦しています。まだまだにわかですがどうぞ。随時更新していく予定です。
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FolderIcon
                    className="mt-1 h-5 w-5 flex-none text-sky-400"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Others
                    </strong>
                    その他の作品集などです。
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon
                    className="mt-1 h-5 w-5 flex-none text-sky-400"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Security
                    </strong>
                    このサイトのセキュリティについてです。訪問者の情報は適切に管理し、第三者への公開は一切ありません。
                  </span>
                </li>
              </ul>
              <Link
                href="/activities"
                className="mt-8 inline-block rounded-md border border-transparent bg-sky-400 py-3 px-8 text-center font-medium text-white hover:bg-sky-400"
              >
                Read more
              </Link>
              {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                No server? No problem.
              </h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
                vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
                enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
