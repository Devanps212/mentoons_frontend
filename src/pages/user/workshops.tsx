import { useEffect, useRef, useState } from "react";
import CareerCorner from "../../components/user/workshops/careerCorner";
import Hero from "../../components/user/workshops/hero";
import {
  CHALLENGES_KIDS,
  CHALLENGES_TEENS,
  CHALLENGES_YOUTH,
  FAQ_WORKSHOPS,
} from "../../constants";
import {
  CAREER_CORNER,
  BUDDY_CAMP,
  TEEN_CAMP,
  FAMILY_CAMP,
} from "../../constants";
import WhatToExpect from "../../components/user/workshops/whatToExpect";
import ChallengesFaced from "../../components/common/challenges/challenges";
import WorkShopsMatter from "../../components/user/workshops/workShopsMatter";
import RegisterWorkshop from "../../components/user/workshops/register";
import FAQ from "../../components/user/products/faq/faq";

const Workshops = () => {
  const [workshop, setWorkshop] = useState<
    "buddy" | "teen" | "family" | "career"
  >("career");
  const careerCornerRef = useRef<HTMLDivElement>(null);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const label =
    workshop === "career" ? "Youth" : workshop === "buddy" ? "Kids" : "Teens";

  const workshopData = {
    buddy: BUDDY_CAMP,
    teen: TEEN_CAMP,
    family: FAMILY_CAMP,
    career: CAREER_CORNER,
  }[workshop];

  const challengeData = {
    buddy: CHALLENGES_KIDS,
    teen: CHALLENGES_TEENS,
    career: CHALLENGES_YOUTH,
    family: [],
  }[workshop];

  useEffect(() => {
    if (!isFirstRender && careerCornerRef.current) {
      careerCornerRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsFirstRender(false);
  }, [workshop, isFirstRender]);

  return (
    <>
      <Hero setWorkshop={setWorkshop} />
      <div ref={careerCornerRef} className={workshopData.bg}>
        <CareerCorner workshopData={workshopData} />
        <WhatToExpect
          expectations={workshopData.expectations}
          label={workshop}
        />
        <ChallengesFaced challenges={challengeData} label={label} />
      </div>
      <WorkShopsMatter matter={workshopData.workshopMatter} />
      <RegisterWorkshop registerData={workshopData.registerImg} label={label} />
      <FAQ data={FAQ_WORKSHOPS} />
    </>
  );
};

export default Workshops;
