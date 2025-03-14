import Select from "react-select";
import countries from "world-countries";
import { useEffect, useState } from "react";
import { CountryOption } from "../../types";

const MythosSignUp = () => {
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(
    null
  );

  const countryOptions = countries.map((country) => ({
    value: country.cca2,
    label: country.name?.common || "",
  }));

  useEffect(() => {
    const today = new Date();
    const max = today.toISOString().split("T")[0];
    const minYear = today.getFullYear() - 100;
    const min = `${minYear}-${String(today.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(today.getDate()).padStart(2, "0")}`;

    setMaxDate(max);
    setMinDate(min);
  }, []);

  return (
    <div className="flex justify-center items-center gap-5 h-screen">
      <div className="flex flex-col justify-center items-center gap-13 bg-[#1A1D3B] px-10 py-10">
        <img
          src="/logo/mythos/Logo 2.png"
          alt="mythos-logo"
          className="w-48 h-48"
        />
        <h1 className="text-center inter font-bold text-[43px] text-white w-md">
          Start Your Journey With Us
        </h1>
        <img
          src="/logo/mythos/Boy using VR technology for education.png"
          alt="mythos-logo"
          className="w-48 h-48"
        />
      </div>
      <div className="">
        <h1>Register</h1>
        <form>
          <div className="flex justify-start items-start gap-5">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                placeholder="eg: Eliza"
                className="w-full rounded-xl p-2 outline-none border"
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                placeholder="eg: Maguire"
                className="w-full rounded-xl p-2 outline-none border"
              />
            </div>
          </div>
          <div className="flex justify-start items-start gap-5 w-full">
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="eg: maguire@flexui.com"
                className="w-full rounded-xl p-2 outline-none border"
              />
            </div>
            <div>
              <label htmlFor="dob">Your DOB</label>
              <input
                id="dob"
                type="date"
                max={maxDate}
                min={minDate}
                className="w-full rounded-xl p-2 outline-none border"
              />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="country">Your Country</label>
            <Select
              id="country"
              options={countryOptions}
              getOptionLabel={(e) => e.label}
              onChange={(option) =>
                setSelectedCountry(option as CountryOption | null)
              }
              className="mt-2"
            />
          </div>

          {selectedCountry && (
            <p className="text-white mt-2">
              Selected Country: {selectedCountry.label}
            </p>
          )}

          <div className="flex justify-start items-start gap-5 mt-4">
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl p-2 outline-none border"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="w-full rounded-xl p-2 outline-none border"
              />
            </div>
          </div>

          <div className="w-full mt-4">
            <label htmlFor="about">Tell us about yourself</label>
            <textarea
              id="about"
              placeholder="Write something about yourself..."
              className="w-full rounded-xl p-2 outline-none border h-24"
            ></textarea>
          </div>
          <p className="text-gray-400 text-sm mt-2 text-center">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-blue-500 underline">
              Terms & Conditions
            </a>
          </p>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-xl mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MythosSignUp;
