import React from "react";
import { Link } from "react-router-dom";
import PrismicDom from "prismic-dom";

export default function InfoRows({ rows }) {
  console.log(rows);
  return (
    <div>
      {rows.items.map((item, i) => {
        if (item.link)
          return (
            <Link to={item.link} key={i}>
              <Row item={item} />
            </Link>
          );
        else return <Row item={item} />;
      })}
    </div>
  );
}

function Row({ item }) {
  return (
    <div className="grid grid-cols-3">
      {!item.image_position && (
        <div className="col-span-2">
          <img src={item.row_image.url} alt={item.row_image.alt} />
        </div>
      )}
      <div>
        <h3>{item.row_title[0].text}</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: PrismicDom.RichText.asHtml(item.row_content),
          }}
        />
      </div>
      {item.image_position && (
        <div className="col-span-2">
          <img src={item.row_image.url} alt={item.row_image.alt} />
        </div>
      )}
    </div>
  );
}
