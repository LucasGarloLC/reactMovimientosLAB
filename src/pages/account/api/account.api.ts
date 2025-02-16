import Axios from "axios";
import { AccountAPI, NewAccountAPI } from "./account.api-model";

const accountLink = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountList = (): Promise<AccountAPI[]> =>
  Axios.get<AccountAPI[]>(accountLink).then(({ data }) => data);

export const saveAccount = (account: NewAccountAPI): Promise<NewAccountAPI> =>
  Axios.post<NewAccountAPI>(accountLink, account).then(({ data }) => data);
