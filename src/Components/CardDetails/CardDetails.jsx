import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveDonatedCard } from "../Utility/LocalStorage";

const CardDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const card = cards.find((card) => card.id === idInt);
  const { picture, title, button_bg, description, price } = card;
  const handleCardDonation = () => {
    toast("Wow Your Donation is successful !");
    saveDonatedCard(idInt);
  };

  return (
    <div className="p-5 ">
      <div className="  h-[400px] relative w-full  ">
        <img
          className="w-full rounded-xl h-full  object-cover  mx-auto max-w-6xl"
          src={picture}
          alt=""
        />
        <div className=" w-full  bg-[#00000070]  absolute left-0  right-0 bottom-0 h-[70px] rounded-b-xl    ">
          <button
            onClick={handleCardDonation}
            style={{ background: button_bg }}
            className=" mt-3 ml-5 py-2 px-5 text-white  rounded-lg font-bold"
          >
            Donate {price}
          </button>
        </div>
      </div>
      <h1 className="text-4xl mt-10 font-bold ">{title}</h1>
      <p className="mt-5 mb-10 ">{description}</p>
      <ToastContainer />
    </div>
  );
};

export default CardDetails;
