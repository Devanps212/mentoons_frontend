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
