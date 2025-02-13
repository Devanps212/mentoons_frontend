import { GameData } from "../types";

export const COMICS = ["6 -12", "13-16", "17-19", "20+"];

export const PRODUCTS = [
  "Conversation Starter",
  "Story Re-teller",
  "Silent Stories",
  "Conversation Story Card",
];

export const SERVICES = ["One-on-One", "Workshops", "Assessments"];

export const SUBSCRIPTION = ["Podcast", "News"];

export const GAMES: (string | GameData)[] = [
  "Insta Board",
  "Hang Man",
  "Word Game",
  {
    payToPlay: [
      { name: "MoneyPoly", charge: 399 },
      { name: "No-Secrets", charge: 199 },
    ],
  },
];
