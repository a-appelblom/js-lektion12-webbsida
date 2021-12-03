import React from "react";
import InfoRows from "./sections/InfoRows";
import Lessons from "./sections/Lessons";

export default function SliceSection({ body }) {
  return (
    <section>
      {body.map((section, i) => {
        if (section.slice_type === "info_rows")
          return <InfoRows key={i} rows={section} />;
        else return <Lessons key={i} lessons={section} />;
      })}
    </section>
  );
}
