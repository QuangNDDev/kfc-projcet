export type User = {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  role: "ADMIN" | "CUSTOMER" | "MANAGER" | "STAFF";
};
