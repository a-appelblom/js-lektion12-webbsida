import React from "react";
import PrismicDom from "prismic-dom";

export default function Lessons({ lessons }) {
  console.log(lessons);
  return (
    <div className="flex flex-col gap-4">
      {lessons.items.map((lesson, i) => (
        <details id={i} className="style-none border-2 p-6 mx-4 rounded-md">
          <summary className="my-4 hover:text-purple-600">
            <h3 className="text-xl md:text-3xl cursor-pointer font-bold">
              {lesson.lesson_title[0].text}
            </h3>
          </summary>
          <div
            className="flex flex-col gap-4"
            dangerouslySetInnerHTML={{
              __html: PrismicDom.RichText.asHtml(lesson.lesson_content),
            }}
          />
          <div className="text-purple-600 hover:underline mt-4">
            {lesson.lesson_github_link && (
              <a href={lesson.lesson_github_link.url}>
                Github Länk till lektionen
              </a>
            )}
            {!lesson.lesson_github_link && (
              <p>Det kommer en github länk här efter lektionen</p>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
