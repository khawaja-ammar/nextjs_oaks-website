// import Image from "next/image";

import Link from "next/link";

export default function Header() {
  return (
    <section className="flex items-center bg-primary py-10 text-white md:h-[700px]">
      <div className="sectionPadding">
        {/* className="grid grid-rows-2 content-center items-center justify-center justify-items-center gap-4 px-10 md:grid-cols-2 md:grid-rows-1 md:gap-12" */}
        <div className="flex flex-col items-center justify-center gap-4 px-10 md:flex-row">
          <div className="flex flex-col gap-4 md:gap-16">
            <h1 className="text-3xl md:text-5xl xl:text-6xl">
              Fulfilling the packaging needs of a growing Pakistan!
            </h1>
            <div className="flex">
              <Link href="/contactus">
                <div className="rounded-full bg-white px-4 py-1 text-black">
                  <p className="">Contact Us</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="max-w-[200px] md:max-w-[300px] lg:max-w-[400px]">
            <div className="flex items-center justify-center md:p-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="h-img"
                src="/assets/headersm.png"
                // width={200}
                // height={311}
                // width={300}
                // height={467}
                // sizes="200vw, (min-width: 768px) 300vw"
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* <Image
                alt="header-img"
                src="/assets/headersm.png"
                width={400}
                height={623}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
