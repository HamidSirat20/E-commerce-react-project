interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: "customer" | "admin";
  avatar?: string;
}

export interface CreateNewUser {
  email: string;
  password: string;
  name: string;
  avatar?: string;
}
export interface UpdateNewUser {
  id: number;
  update?: {
    email?: string;
    password?: string;
    name?: string;
    avatar?: string;
  };
}
export default User;
