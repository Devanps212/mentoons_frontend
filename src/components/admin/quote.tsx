const Quote = () => {
  return (
    <div className="flex justify-center items-center bg-[#F7941D] h-screen p-4 md:p-8 overflow-hidden">
      <div className="flex flex-col justify-center items-center w-full max-w-screen-lg mx-auto">
        <img
          src="/icon/mentoons-logo.png.png"
          alt="mentoons-icon"
          className="w-32 sm:w-36 md:w-48"
        />
        <div className="text-center text-xl sm:text-2xl font-medium italic text-black w-full max-w-2xl mx-auto my-4">
          "Optimism is a happiness magnet. If you stay positive, good things and
          good people will be drawn to you."
          <div className="text-center text-base sm:text-lg text-black mt-2">
            — Mary Lou Retton
          </div>
        </div>
        <div className="w-full flex justify-between items-center mt-4">
          <img
            src="/background/Avatars of happy young people.png"
            alt="bg-img2"
            className="w-1/4 md:w-1/3"
          />
          <img
            src="/background/Books, motivational poster with the inscription Make Today Great, office plant on the desk.png"
            alt="bg-img"
            className="w-1/4 md:w-1/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Quote;
