import { useState } from "react";
import { asset } from "../data/site.js";
// Shows the image if the file exists, otherwise a labelled placeholder.
export default function Photo({ src, label, ratio = "4 / 3", className = "" }) {
  const [bad, setBad] = useState(false);
  const ok = src && !bad;
  return (
    <figure
      className={`ph ${ok ? "has" : ""} ${className}`}
      style={{ aspectRatio: ratio, margin: 0 }}
    >
      {ok ? (
        <img
          src={asset(src)}
          alt={label}
          loading="lazy"
          onError={() => setBad(true)}
        />
      ) : (
        <span role="img" aria-label={`Photo placeholder: ${label}`}>
          Photo placeholder: {label}
        </span>
      )}
    </figure>
  );
}
