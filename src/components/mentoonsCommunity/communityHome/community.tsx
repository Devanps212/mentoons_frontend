import Details from "../details/details";
import News from "../news/news";

const Community = () => {
  return (
    <section className="pt-4 w-full h-auto bg-gradient-to-r from-[rgba(255,187,68,0.7)] to-[rgba(253,185,147,0.7)] p-20">
      <h1 className="text-xl text-[48px] font-semibold">Mentoons Community</h1>
      <div className="flex justify-center items-center gap-25">
        <Details />
        <News />
      </div>
    </section>
  );
};

export default Community;
