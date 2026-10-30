import Page from "../components/Page.jsx";
import Photo from "../components/Photo.jsx";
import Affiliation from "../components/Affiliation.jsx";
import MissionVision from "../components/MissionVision.jsx";
import Stripe from "../components/Stripe.jsx";
import { images, college } from "../data/site.js";
export default function About() {
  return (
    <>
      <Page
        title="Awori District
College of Education"
        subtitle="Discover our history, mission, leadership, and commitment to quality education."
        text="About"
      >
        <div className="split">
          <div>
            <p className="lead">
              {college.name} is located in {college.location}.
            </p>
            <p>
              [History, leadership message and approved description to be
              supplied by the college.]
            </p>
          </div>
          <Photo src={images.campus} label="Campus exterior" ratio="4 / 3" />
        </div>
        <div style={{ marginTop: 56 }}>
          <Affiliation detail />
        </div>
      </Page>

      <Stripe />
      <MissionVision />
      <section>
        <div className="bg-red-500 w-[22%]">
          <Photo src={images.campus} label="Campus exterior" className="" />
          <p
            className="font-medium text-[14px]"
            style={{ margin: "5px 10px" }}
          >
            Classrooms
          </p>
          <p className="text-xs text-gray-700" style={{margin:"0px 10px"}}>Modern lecture halls and classrooms equipped for effective teaching and learning.</p>
        </div>
      </section>
    </>
  );
}
