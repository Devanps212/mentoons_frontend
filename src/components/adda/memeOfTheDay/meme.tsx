const Meme = () => {
  return (
    <div className="flex flex-col justify-center items-center p-2 shadow-xl w-full rounded-lg">
      <div className="flex justify-start items-start gap-3 w-full">
        <img
          src="/emojis/e62353b3daac244b2443ebe94d0d8343.png"
          alt="emoji"
          className="w-5 h-5"
        />
        <h1>Meme of the Day!</h1>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        {/* <img
          src="/meme/1600w-eV5oBZqGAG8.webp"
          alt="meme"
          className="w-full h-auto rounded-lg object-cover"
        /> */}
      </div>
    </div>
  );
};

export default Meme;
