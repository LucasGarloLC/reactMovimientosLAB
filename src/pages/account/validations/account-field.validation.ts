import { NAME_ACCOUNT_ALREADY_EXISTS } from "@/lib/constants/validations";
import {
  requiredFieldValidationError,
  validationSuccessful,
  validationError,
} from "@/lib/validations";
import { isNotFieldEmpty } from "@/lib/validations/plain.validation";
import { Data } from "@/lib/validations/validation.model";
import { AccountVm } from "../account.model";

const accountExists = (value: string, accountList: AccountVm[]): boolean => {
  const accountExists: boolean = accountList.some(
    (account: AccountVm): boolean =>
      account.alias.toLocaleLowerCase() === value.toLocaleLowerCase()
  );

  return accountExists;
};

export const validateAccountType = (value: string): Data => {
  const isEmpty = !isNotFieldEmpty(value);
  if (isEmpty) {
    return requiredFieldValidationError();
  }

  return validationSuccessful();
};

export const validateNameField = (
  value: string,
  accountList: AccountVm[]
): Data => {
  const isEmpty = !isNotFieldEmpty(value);
  if (isEmpty) {
    return requiredFieldValidationError();
  }

  const isExistingAccount = accountExists(value, accountList);
  if (isExistingAccount) {
    return validationError(NAME_ACCOUNT_ALREADY_EXISTS);
  }

  return validationSuccessful();
};
