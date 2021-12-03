import React from "react";
import PrismicDom from "prismic-dom";

export default function Lessons({ lessons }) {
  console.log(lessons);
  return (
    <div className="flex flex-col gap-4">
      {lessons.items.map((lesson) => (
        <details className="style-none border-2 p-4">
          <summary>
            <h3>{lesson.lesson_title[0].text}</h3>
          </summary>
          <div
            dangerouslySetInnerHTML={{
              __html: PrismicDom.RichText.asHtml(lesson.lesson_content),
            }}
          />
          <a href={lesson.lesson_github_link.url}>Github Länk till lektionen</a>
        </details>
      ))}
    </div>
  );
}
