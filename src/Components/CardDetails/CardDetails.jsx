import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const card = cards.find((card) => card.id === idInt);
  console.log(card, cards, id, idInt);
  const { picture, title, button_bg, description, price } = card;
  return (
    <div>
      <div className="mt-10">
        <img
          className="w-full rounded-3xl h-[500px]  object-fill  mx-auto max-w-6xl p-5 lg:p-0"
          src={picture}
          alt=""
        />
        <div className="opacity-60 absolute max-w-6xl bg-black w-full h-[70px] rounded-b-3xl text-left bottom-6">
          <button
            className={` mt-3 ml-5 py-2 px-5 text-white bg-${button_bg} rounded-lg font-bold`}
          >
            Donate {price}
          </button>
        </div>
      </div>
      <h1 className="text-4xl mt-10 font-bold">{title}</h1>
      <p className="mt-5 mb-10">{description}</p>
    </div>
  );
};

export default CardDetails;
