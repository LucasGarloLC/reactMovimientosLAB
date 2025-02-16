export interface AccountAPI {
  balance: number;
  id: string;
  iban: string;
  lastTransaction: string;
  name: string;
  type: string;
}

export interface NewAccountAPI {
  name: string;
  type: string;
}
