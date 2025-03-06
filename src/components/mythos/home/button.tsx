const MythosButton = ({ label }: { label: string }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-white cursor-pointer z-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
      <img
        src="/icons/mythos/star.png"
        alt="star-icon"
        className="h-3 w-3 sm:h-4 sm:w-4"
      />
      <span className="font-extrabold text-xs sm:text-sm tracking-[1px] sm:tracking-[1.3px] text-black">
        {label}
      </span>
    </button>
  );
};

export default MythosButton;
