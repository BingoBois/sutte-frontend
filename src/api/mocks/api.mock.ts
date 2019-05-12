import { IAccount } from "types/types";

export function login(email: string, password: string): Promise<IAccount>{
  return new Promise((resolve, rejects) => {
    resolve({ email: email, id: 1, name: "Vikto Bim", pass: password, role: "teacher" })
  })
}

export function register(account: IAccount): Promise<boolean> {
  return new Promise((resolve, rejects) => {
    resolve(true);
  })
}
