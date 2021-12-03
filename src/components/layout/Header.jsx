import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import prismic from "@prismicio/client";
import { FaBars } from "react-icons/fa";
import { client } from "../../utils/prismic";

export default function Header() {
  const [open, setOpen] = useState(false);
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
      <nav className="hidden md:flex justify-center items-center gap-8 h-8 text-3xl p-12">
        <Link className="border-b-2 border-purple-600" to="/">
          Hem
        </Link>
        {data?.map((slug) => (
          <div key={slug}>
            <Link className="border-b-2 border-purple-600" to={slug}>
              {slug}
            </Link>
          </div>
        ))}
      </nav>
      <dialog open={open} onClick={() => setOpen(false)}>
        <nav className="md:hidden fixed inset-0 flex flex-col justify-center items-center bg-white gap-8 text-2xl">
          <div>
            <Link className="border-b-2 border-purple-600" to="/">
              Hem
            </Link>
          </div>
          {data?.map((slug) => (
            <div key={slug}>
              <Link className="border-b-2 border-purple-600" to={slug}>
                {slug}
              </Link>
            </div>
          ))}
        </nav>
      </dialog>
      <button
        className="md:hidden fixed p-3 m-2 rounded-full bg-purple-200"
        onClick={() => setOpen((prev) => !prev)}
      >
        <FaBars size="25" />
      </button>
    </header>
  );
}
