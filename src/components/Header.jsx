import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { college, nav, asset, images } from "../data/site.js";
export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const k = (e) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, []);
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="bar">
        Admissions details are placeholders until confirmed.{" "}
        <Link to="/admissions" style={{ color: "#fff" }}>
          See admissions
        </Link>
      </div>
      <header>
        <div className="wrap hd">
          <Link className="brand" to="/" aria-label={`${college.short} home`}>
            <img src={asset(images.logo)} alt={`${college.short} crest`} />
            <span>
              <b>{college.name}</b>
              <small>{college.location}</small>
            </span>
          </Link>
          <button
            className="tg"
            aria-expanded={open}
            aria-controls="nv"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
          <nav id="nv" aria-label="Main" className={open ? "open" : ""}>
            {nav.map(([to, l]) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) => (isActive ? "act" : "")}
              >
                {l}
              </NavLink>
            ))}
            <Link className="btn" to="/apply">
              Apply now
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
