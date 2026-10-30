import { Link } from "react-router-dom";
export function List({ children }) {
  return <div className="list">{children}</div>;
}
export function Row({ to, title, text, tag, action }) {
  const inner = (
    <>
      <div>
        {tag && <span className="tag">{tag}</span>}
        <h3>{title}</h3>
        {text && <p>{text}</p>}
      </div>
      {action}
    </>
  );
  return to ? (
    <Link className="row" to={to}>
      {inner}
    </Link>
  ) : (
    <div className="row">{inner}</div>
  );
}
