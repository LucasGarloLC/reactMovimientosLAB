import * as apiModel from "./api";
import { AccountVm, NewAccountVm } from "./account.model";

export const mapAccountFromApiToVm = (
  account: apiModel.AccountAPI
): AccountVm => {
  const { id, name } = account;
  return {
    id,
    alias: name,
  };
};

export const mapNewAccountFromVmToApi = (
  account: apiModel.NewAccountAPI
): NewAccountVm => {
  const { type, name } = account;
  return {
    type,
    name,
  };
};
