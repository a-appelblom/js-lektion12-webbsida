import React from "react";

export default function Hero({ title, info, image }) {
  return (
    <div>
      <h3>{title}</h3>
      <p></p>
      <img src={image.url} alt={image.alt} />
    </div>
  );
}
