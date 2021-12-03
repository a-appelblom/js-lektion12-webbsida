import React from "react";
import PrismicDom from "prismic-dom";

export default function Hero({ title, info, image }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 text-2xl mx-auto p-4 my-8">
      <div className="col-span-2">
        <img src={image.url} alt={image.alt} />
      </div>
      <div className="grid col-span-1 place-content-center gap-4 w-full">
        <h3 className="text-center font-bold md:text-4xl">{title}</h3>
        <div
          className="text-center text-xl"
          dangerouslySetInnerHTML={{
            __html: PrismicDom.RichText.asHtml(info),
          }}
        />
      </div>
    </div>
  );
}
