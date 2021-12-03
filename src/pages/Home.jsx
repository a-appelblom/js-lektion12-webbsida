import React, { useEffect, useState } from "react";
import SliceSection from "../components/common/SliceSection";
import { client } from "../utils/prismic";

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      const res = await client.getByUID("homepage", "homepage", {});
      console.log(res);
      setData(res);
    }
    getData();
  }, []);

  if (!data) return <p>...loading</p>;
  const { page_title, hero_image, body } = data.data;
  return (
    <>
      <div>
        <h1>{page_title[0].text}</h1>
        <img src={hero_image.url} alt={hero_image.alt} />
      </div>
      <SliceSection body={body} />
    </>
  );
}
