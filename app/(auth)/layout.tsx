import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-brand p-10">
        <div>
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            width={224}
            height={82}
            className="h-auto"
          />
          <div className="space-y-5 text-white">
            <h1 className="h1">Mange Your Files The Best Way</h1>
            <p className="body-1">
              This is a place for your files to be organized and managed the
            </p>
            <Image
              src="/assets/images/files.png"
              alt="files"
              width={342}
              height={342}
              className="hober:rotate-2 transition-all hover:scale-105"
            />
          </div>
        </div>
      </section>
      {children}
    </div>
  );
};
export default Layout;
