import { GameData } from "../types";

export const COMICS = ["Comic 1", "Comic 2", "Comic 3"];

export const PRODUCTS = [
  "Conversation Starter",
  "Story Re-teller",
  "Silent Stories",
  "Conversation Story Card",
];

export const SERVICES = ["One-One-One", "Workshops", "Assessments"];

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
