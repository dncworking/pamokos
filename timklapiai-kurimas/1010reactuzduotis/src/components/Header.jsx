// import "./Header.css";

// export default function Header() {
//   return (
//     <header>
//       <h1 className="header-title">Page title</h1>
//       <img
//         src="/components/images/header-cat.jpg"
//         alt="Domestic cat"
//         className="header-img w-100 object-fit-cover"
//       />
//     </header>
//   );
// }

import "./Header.css";
import headerCatImage from "./images/header-cat.jpg";

export default function Header() {
  return (
    <header>
      <h1 className="header-title">Page title</h1>
      <img
        src={headerCatImage}
        alt="Domestic cat"
        className="header-img w-100 object-fit-cover"
      />
    </header>
  );
}
