export interface UserStatusInterface {
  status: string;
  isWatched: boolean;
  userName: string;
  userProfilePic: string;
}

export interface RequestInterface {
  userName: string;
  accepted: boolean;
  profilePic: string;
}

interface PayToPlayGame {
  name: string;
  charge: number;
}

export interface GameData {
  payToPlay?: PayToPlayGame[];
}

export interface DropDownInterface {
  games: boolean;
  comics: boolean;
  products: boolean;
  services: boolean;
  subscription: boolean;
}

export interface Community {
  title: string;
  description: string;
  color: string;
}

export interface Comics {
  _id: string;
  title: string;
  image: string;
}

interface Features {
  feature: string;
  details: string;
  important?: boolean;
}

export interface Membership {
  benefits: Features[];
  price: number;
  character: string;
  type: string;
}
