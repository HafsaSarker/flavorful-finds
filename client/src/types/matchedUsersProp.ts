import { User } from './user';

export interface MatchedUsersProp {
  users: User[] | null;
  setShowProfile: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}
