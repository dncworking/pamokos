import "./Header.css";

export default function Header(props) {
  return (
    <header>
      <h1 className="header-title">{props.title}</h1>
      <img
        src="src/components/images/header-cat.jpg"
        alt="Domestic cat"
        className="header-img w-100 object-fit-cover"
      />
    </header>
  );
}
