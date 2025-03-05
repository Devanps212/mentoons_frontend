const SignUpSection = () => {
  return (
    <section className="relative w-full py-25 px-5 flex justify-end items-end bg-[url('/background/mythos/blogs/bg.png')] bg-center bg-no-repeat bg-cover overflow-hidden">
      <img
        src="/background/mythos/signUp/Circle 2.png"
        alt="circle-1"
        className="absolute -top-[20%] left-40 w-[420px] h-[450px]"
      />
      <img
        src="/background/mythos/signUp/Circle.png"
        alt="circle-2"
        className="absolute -bottom-[20%] left-40 w-[420px] h-[450px]"
      />
      <img
        src="/background/mythos/signUp/Star.png"
        alt="star-1"
        className="absolute top-1/2 left-70 w-15 h-15"
      />
      <img
        src="/background/mythos/signUp/Star.png"
        alt="star-1"
        className="absolute top-50 left-85 w-15 h-15"
      />
      <img
        src="/background/mythos/signUp/Star.png"
        alt="star-1"
        className="absolute top-1/2 left-100 w-15 h-15"
      />

      <div></div>
      <div className="w-3xl space-y-8 text-white">
        <h1 className="cormorant font-bold text-5xl leading-[60px]">
          Sign Up to Create Blogs and Connect with People from Your Community
        </h1>
        <p className="montserrat font-medium text-lg w-3/4">
          Create blogs and groups from your profession and get the exposure you
          need.
        </p>
        <button className="p-3 bg-[#E39712] rounded-xl font-bold text-lg montserrat text-black">
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default SignUpSection;
