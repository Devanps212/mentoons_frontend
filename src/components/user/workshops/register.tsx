const RegisterWorkshop = ({
  registerData,
  label,
}: {
  registerData: object;
  label: string;
}) => {
  const bg = Object.keys(registerData)[0];
  const image = Object.values(registerData)[0];
  return (
    <section className="p-10" style={{ backgroundColor: bg }}>
      <h1 className="text-center text-[32px] font-bold mb-6 inter">
        REGISTER FOR OUR {label.toUpperCase()} CAMP HERE
      </h1>
      <div className="flex justify-around items-start mt-20">
        <div className="w-1/3">
          <img
            src={image}
            alt={label}
            className="w-full object-cover rounded-lg"
          />
        </div>
        <div className="w-xl flex items-center inconsolata font-bold text-xl text-[#2F251B]">
          <form onSubmit={() => {}} className="space-y-4 w-full">
            <div className="flex gap-6">
              <div className="w-1/2">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full p-2 bg-white rounded-lg border border-gray-300 shadow-[4px_6px_1px_rgba(0,0,0,0.7)]"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full p-2 bg-white rounded-lg border border-gray-300 shadow-[4px_6px_1px_rgba(0,0,0,0.7)]"
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-1/2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 bg-white rounded-lg border border-gray-300 shadow-[4px_6px_1px_rgba(0,0,0,0.7)]"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  className="w-full p-2 bg-white rounded-lg border border-gray-300 shadow-[4px_6px_1px_rgba(0,0,0,0.7)]"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-2 bg-white rounded-lg border border-gray-300 shadow-[4px_6px_1px_rgba(0,0,0,0.7)]"
              />
            </div>
            <div className="flex justify-end items-center">
              <button
                type="submit"
                className="w-1/4 text-white p-2 rounded-xl hover:bg-blue-600 transition"
                style={{
                  backgroundColor: label === "Youth" ? "#EC9600" : "#4285F4",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterWorkshop;
