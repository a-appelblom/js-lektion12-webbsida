import React from "react";
import { Link } from "react-router-dom";
import PrismicDom from "prismic-dom";

export default function InfoRows({ rows }) {
  console.log(rows);
  return (
    <div className="flex flex-col gap-8">
      {rows.items.map((item, i) => {
        if (item.link)
          return (
            <Link
              className="grid grid-cols-1 md:grid-cols-3 border-2 rounded-md shadow-md p-6 hover:text-purple-600"
              to={`/${item.link}`}
              key={i}
            >
              <Row item={item} />
            </Link>
          );
        else
          return (
            <div className="grid grid-cols-1 md:grid-cols-3 border-2 rounded-md shadow-md p-6">
              <Row item={item} />
            </div>
          );
      })}
    </div>
  );
}

function Row({ item }) {
  return (
    <>
      {!item.image_position && (
        <div className="col-span-1 order-first md:order-none  grid content-center">
          <img src={item.row_image.url} alt={item.row_image.alt} />
        </div>
      )}
      <div className="col-span-2 flex flex-col gap-4 text-center justify-center p-4">
        <h3 className="font-bold text-2xl">{item.row_title[0].text}</h3>
        <div
          className="md:text-left"
          dangerouslySetInnerHTML={{
            __html: PrismicDom.RichText.asHtml(item.row_content),
          }}
        />
      </div>
      {item.image_position && (
        <div className="col-span-1 order-first md:order-none grid content-center">
          <img src={item.row_image.url} alt={item.row_image.alt} />
        </div>
      )}
    </>
  );
}
