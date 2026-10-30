import PageHeader from "./PageHeader.jsx";

export default function Page({ title, subtitle, text, children }) {
  return (
    <>
      <PageHeader title={title} subtitle={subtitle} text={text} />

      <div className="page">
        <div className="wrap">{children}</div>
      </div>
    </>
  );
}