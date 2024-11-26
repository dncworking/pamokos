// export default function Box() {
//   return (
//     <div>
//       <img
//         src="/images/cat.jpg"
//         alt="Domestic cat"
//         className="header-img w-100 object-fit-cover"
//       />
//     </div>
//   );
// }

import catImage from "./images/cat.jpg";

export default function Box() {
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
