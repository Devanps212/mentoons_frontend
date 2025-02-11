const AddaHomeSection = () => {
  return (
    <div className="flex justify-start items-center gap-8 bg-transparent translate-y-35">
      <div className="flex flex-col justify-start items-start gap-5">
        <h1 className="text-[64px] font-bold text-[#EC9600]">Mentoons Adda</h1>
        <div>
          <h6 className="font-medium text-[27px]">/ˈʌdə,ˈadə/</h6>
          <div className="flex gap-2 text-[23.4px] italic inter">
            <span>noun</span>
            <span>Indian</span>
          </div>
        </div>
        <p className="font-semibold text-[28px]">
          a place for parents and children to gather and have <br /> meaningful
          interactions and strike conversations
        </p>
      </div>
      <div className="p-2 grid place-items-center flex-1">
        <div className="w-48 h-48 bg-blue-500 px-2"></div>
      </div>
    </div>
  );
};

export default AddaHomeSection;
