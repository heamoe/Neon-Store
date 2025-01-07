import Sort from "@/components/Sort";
import React from "react";

const page = async ({ params }: SearchParamProps) => {
  const type = ((await params)?.type as string) || "";
  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize text-center">{type}</h1>
        <div className="total-size-section">
          <p className="body-1">
            Total Size: <span className="h5">0 MB</span>
          </p>
          <div className="sort-container">
            <p className="body-1 hidden sm:block text-light-200">Sort By:</p>
            <Sort />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
