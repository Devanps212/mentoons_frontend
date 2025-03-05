const MythosButton = ({ label }: { label: string }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-6 py-4 bg-white cursor-pointer z-3">
      <img src="/icons/mythos/star.png" alt="star-icon" className="h-3 w-3" />
      <span className="font-extrabold text-sm tracking-[1.3px] text-black">
        {label}
      </span>
    </button>
  );
};

export default MythosButton;
