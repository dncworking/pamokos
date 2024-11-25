import catImage from "./images/cat.jpg";

export default function PostImage() {
  return (
    <div>
      <img
        src={catImage}
        alt="Domestic cat"
        className="header-img w-100 object-fit-cover"
      />
    </div>
  );
}
