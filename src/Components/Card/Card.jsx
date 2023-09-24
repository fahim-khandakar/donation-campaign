import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ card }) => {
  const { id, title, picture, category, card_bg, text_color, category_bg } =
    card;
  const bgCard = `bg-${card_bg}`;

  const colorText = `text-${text_color}`;
  const bgCategory = `bg-${card_bg}`;
  return (
    <div>
      <Link to={`/card/${id}`}>
        <div className={`${`bgCard`} rounded-lg mb-10 mx-5 lg:mx-0`}>
          <img
            className="rounded-lg w-full h-[150px] object-cover"
            src={picture}
            alt=""
          />
          <button
            className={`bg-${category_bg} text-${text_color} font-semibold py-1 ml-2 rounded-md my-2 px-3`}
          >
            {category}
          </button>
          <h3 className={`text-${text_color} font-bold text-lg pb-2 pl-2`}>
            {title}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;
