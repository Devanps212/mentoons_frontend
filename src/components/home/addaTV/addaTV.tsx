import "./addaTV.css";

const AddaTV = () => {
  return (
    <div className="relative w-[590px] h-auto">
      <img src="/addaTV/Rectangle 285.png" alt="tv" className="w-full h-auto" />

      <div
        className="absolute top-1/2 left-1/2 w-[498px] h-[290px] bg-black -translate-x-1/2 -translate-y-1/2 rounded-t-[60px] overflow-hidden flex items-center justify-center"
        style={{ clipPath: "polygon(15% 100%, 90% 100%, 100% 0%, 0% 0%)" }}
      >
        <video
          className="w-[80%] h-full object-fill"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="/video/addiction/We know THE STRUGGLES our youth is facing_03.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default AddaTV;
