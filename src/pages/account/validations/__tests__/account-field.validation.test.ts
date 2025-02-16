import {
  NAME_ACCOUNT_ALREADY_EXISTS,
  REQUIRED_FIELD_MESSAGE,
} from "@/lib/constants/validations";

import { AccountVm } from "../../account.model";
import {
  validateAccountType,
  validateNameField,
} from "../account-field.validation";

describe("account-field.validation specs", () => {
  describe("validateAccountType", () => {
    it("should return false when account id is empty", () => {
      const result = validateAccountType("");

      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });
    it("should return true when account id has value", () => {
      const result = validateAccountType("1");

      expect(result.succeeded).toBeTruthy();
      expect(result.errorMessage).toBeUndefined();
    });
  });
  describe("validateNameField", () => {
    it("should return false when account name is empty", () => {
      const accountList: AccountVm[] = [{ id: "1", alias: "mockName" }];
      const result = validateNameField("", accountList);

      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });
    it("should return true when account name has value", () => {
      const accountList: AccountVm[] = [{ id: "1", alias: "mockName" }];
      const result = validateNameField("Mock", accountList);

      expect(result.succeeded).toBeTruthy();
    });
    it("should return false when the account name already exists", () => {
      const accountList: AccountVm[] = [{ id: "1", alias: "mockName" }];
      const result = validateNameField("mockName", accountList);

      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(NAME_ACCOUNT_ALREADY_EXISTS);
    });
    it("should return true when the account name does not exists", () => {
      const accountList: AccountVm[] = [{ id: "1", alias: "mockName" }];
      const result = validateNameField("name", accountList);

      expect(result.succeeded).toBeTruthy();
    });
  });
});
