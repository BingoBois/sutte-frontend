export interface IAccount {
  id: number;
  email: string;
  pass: string;
  role: string;
  name: string;
}

export interface ISignup {
  id: number;
  fk_account: number;
  fk_course: number;
  paid: boolean;
}

export interface ICourse {
  id: number;
  name: string;
  description: string;
  active: boolean;
  fk_suggestedBy: number | undefined;
  amountSignups: number;
}
