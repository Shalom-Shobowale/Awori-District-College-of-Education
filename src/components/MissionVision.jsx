import Reveal from "./Reveal.jsx";
import { mvv } from "../data/site.js";
export default function MissionVision() {
  return (
    <section className="mvv" aria-labelledby="mvv-h">
      <div className="wrap">
        <div className="lab">
          <h2 id="mvv-h">What we stand for</h2>
          <p className="ph-note">
            Placeholder statements. Edit in src/data/site.js
          </p>
        </div>
        <div>
          <Reveal className="mvv-b">
            <h3>Our mission</h3>
            <p>{mvv.mission}</p>
          </Reveal>
          <Reveal className="mvv-b">
            <h3>Our vision</h3>
            <p>{mvv.vision}</p>
          </Reveal>
          <Reveal className="mvv-b">
            <h3>Core values</h3>
            <ul className="vals">
              {mvv.values.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
