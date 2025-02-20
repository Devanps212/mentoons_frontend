import { Membership } from "../types";

export const PRIME: Membership = {
  benefits: [
    {
      feature: "Enable Chat",
      details: "50 Members",
    },
    {
      feature: "Access to groups",
      details: "Unlimited",
    },
    { feature: "Access to freebies", details: "Included" },
    {
      feature: "Free complementary call with a psychologist",
      details: "1 Call",
    },
    {
      feature: "Comics per month",
      details: "4 Comics",
    },
    {
      feature: "Audio Comics per month",
      details: "10 comics",
    },
    {
      feature: "Podcasts per month",
      details: "5 Podcasts",
    },
    {
      feature: "Assessments",
      details: "Available",
    },
    {
      feature: "Workshop Discount",
      details: "Not available",
    },
    {
      feature: "Enable audio calling Feature",
      details: "50 Members",
    },
    {
      feature: "Enable video calling Feature",
      details: "50 Members",
    },
  ],
  price: 149,
  character: "/characters/prime.png",
  type: "Prime",
};

export const PLATINUM: Membership = {
  benefits: [
    {
      feature: "Enable Chat",
      details: "Unlimited Members",
    },
    {
      feature: "Access to groups",
      details: "Unlimited",
    },
    { feature: "Access to freebies", details: "Included" },
    {
      feature: "Free complementary call with a psychologist",
      details: "1 Call",
    },
    {
      feature: "Comics per month",
      details: "10 Comics",
    },
    {
      feature: "Audio Comics per month",
      details: "15 comics",
    },
    {
      feature: "Podcasts per month",
      details: "8 Podcasts",
    },
    {
      feature: "Assessments",
      details: "Available",
    },
    {
      feature: "Workshop Discount",
      details: "10% off on 1-year workshop",
    },
    {
      feature: "Enable audio calling Feature",
      details: "Unlimited Members",
      important: true,
    },
    {
      feature: "Enable video calling Feature",
      details: "Unlimited Members",
      important: true,
    },
  ],
  price: 349,
  character: "/characters/platinum.png",
  type: "Platinum",
};
