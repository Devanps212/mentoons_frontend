export interface Auth {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

interface User {
  id: string;
  name: string;
  email: string;
}
