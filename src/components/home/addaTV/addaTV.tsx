import "./addaTV.css";

const AddaTV = () => {
  return (
    <div className="relative w-full md:w-[410px] lg:w-[500px] xl:w-[590px] xl:h-auto">
      <img
        src="/addaTV/Rectangle 285.png"
        alt="tv"
        className="lg:w-3/4 xl:w-full h-auto"
      />

      <div
        className="absolute top-1/2 left-1/2 md:left-[50%] lg:left-[38%] xl:left-1/2 w-[360px] sm:w-[500px] md:w-[350px] lg:w-[330px] xl:w-[498px] h-[200px] sm:h-[300px] md:h-[220px] lg:h-[180px] xl:h-[290px] bg-black -translate-x-1/2 -translate-y-1/2 rounded-t-[60px] overflow-hidden flex items-center justify-center"
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
