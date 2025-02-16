import { REQUIRED_FIELD_MESSAGE } from "../constants/validations";
import { Data } from "./validation.model";

export const validationError = (errorMessage: string): Data => ({
  succeeded: false,
  errorMessage,
});

export const validationSuccessful = () => ({
  succeeded: true,
});

export const requiredFieldValidationError = (): Data =>
  validationError(REQUIRED_FIELD_MESSAGE);
