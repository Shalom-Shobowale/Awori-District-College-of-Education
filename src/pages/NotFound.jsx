import { Link } from "react-router-dom";
import Page from "../components/Page.jsx";
export default function NotFound() {
  return (
    <Page title="Page not found">
      <p className="lead">We could not find that page.</p>
      <p>
        <Link className="btn" to="/">
          Go to the homepage
        </Link>
      </p>
    </Page>
  );
}
