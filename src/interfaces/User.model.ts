export interface User {
  id: string;
  name: string;
  email: string;
  created_on: Date;
}

export interface UserCreate {
  name: string;
  email: string;
}

