import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import prismic from "@prismicio/client";
import { client } from "../../utils/prismic";

export default function Header() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      const res = await client.query(
        prismic.Predicates.at("document.type", "page")
      );
      const slugs = res.results.map((item) => item.uid);
      setData(slugs);
    }
    getData();
  }, []);
  return (
    <header>
      <nav className="flex justify-center items-center gap-8 h-8">
        <Link to="/">Home</Link>
        {data?.map((slug) => (
          <div key={slug}>
            <Link to={slug}>{slug}</Link>
          </div>
        ))}
      </nav>
    </header>
  );
}
