import { FC, useState, useEffect } from "react";

import classes from "./account-form.component.module.css";
import { getAccountList } from "../api";
import { mapAccountFromApiToVm } from "../account.mapper";
import { NewAccountVm, emptyAccount, AccountVm } from "../account.model";
import { validateForm } from "../validations";

interface AccountFormComponentProps {
  createAccount: (newAccount: NewAccountVm) => void;
  result: string;
}

export const AccountFormComponent: FC<AccountFormComponentProps> = ({
  createAccount,
  result,
}) => {
  const [newAccount, setNewAccount] = useState<NewAccountVm>(emptyAccount());
  const [errors, setErrors] = useState<NewAccountVm>(emptyAccount());
  const [accountList, setAccountList] = useState<AccountVm[]>([]);
  const { formContainer, button, formInput, error } = classes;

  const handleTypeFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setErrors({ ...errors, type: "" });
    setNewAccount({ ...newAccount, [e.target.name]: e.target.value });
  };

  const handleAliasFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setErrors({ ...errors, name: "" });
    setNewAccount({ ...newAccount, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm({ ...newAccount, accountList });
    setErrors(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      createAccount(newAccount);
    }
  };

  useEffect(() => {
    getAccountList().then((result) => {
      const accountListVm = result.map(mapAccountFromApiToVm);
      setAccountList(accountListVm);
    });
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={formContainer}>
          <div>
            <label>Tipo de Cuenta</label>
            <select
              name="type"
              onChange={handleTypeFieldChange}
              className={formInput}
            >
              <option value="">Seleccionar</option>
              <option value="1">Cuenta Corriente</option>
              <option value="2">Cuenta Ahorro</option>
            </select>
            <span className={error}>{errors.type}</span>
          </div>
          <div>
            <label>Alias</label>
            <input
              name="name"
              onChange={handleAliasFieldChange}
              className={formInput}
            />
            <span className={error}>{errors.name}</span>
          </div>
        </div>
        <button type="submit" className={button}>
          Guardar
        </button>
        <span className={error}>{result}</span>
      </form>
    </div>
  );
};
