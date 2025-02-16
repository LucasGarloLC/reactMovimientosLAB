import { FormData, Data } from "@/lib/validations/validation.model";
import {
  validateAccountType,
  validateNameField,
} from "./account-field.validation";
import { FormValues } from "../account.model";

export const validateForm = (formValues: FormValues): FormData => {
  const { type, name, accountList } = formValues || {};

  const data: Data[] = [
    validateAccountType(type),
    validateNameField(name, accountList),
  ];

  const formData: FormData = {
    succeeded: data.every((result) => result.succeeded),
    errors: {
      type: data[0]?.errorMessage ?? "",
      name: data[1]?.errorMessage ?? "",
    },
  };

  return formData;
};
