const Banner = () => {
  return (
    <div className="max-w-6xl">
      <img
        className="rounded-lg absolute top-0 -z-20 opacity-5 w-full max-w-6xl"
        src="https://i.ibb.co/6yhrVcB/Rectangle-4281.png"
        alt=""
      />
      <div className="flex flex-col justify-center items-center h-96">
        <h1 className="text-xl px-5 md:px-0 md:text-3xl lg:text-5xl font-bold pb-10  text-center">
          I Grow By Helping People In Need
        </h1>
        <div className="flex">
          <input
            className="border rounded-md pl-5 md:w-[400px]"
            type="text"
            placeholder="Search here..."
          />
          <button className="bg-[#FF444A] text-white py-2 px-5 rounded-tr-md rounded-br-md">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
