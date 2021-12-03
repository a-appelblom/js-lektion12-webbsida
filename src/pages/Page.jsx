import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Hero from "../components/common/Hero";
import SliceSection from "../components/common/SliceSection";
import { client } from "../utils/prismic";

export default function Page() {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await client.getByUID("page", slug, {});
      setData(res);
      console.log(res);
    }
    getData();
  }, [slug]);

  if (!data) return <p>...loading</p>;
  const { body, hero_image, page_title, page_info } = data.data;
  return (
    <div>
      <Hero title={page_title[0].text} info={page_info} image={hero_image} />
      <SliceSection body={body} />
    </div>
  );
}
