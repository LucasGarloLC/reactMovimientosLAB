import { AppLayout } from "@/layouts";
import { FC, useState } from "react";
import classes from "./account.page.module.css";
import { saveAccount } from "./api";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";
import { NewAccountVm } from "./account.model";
import { mapNewAccountFromVmToApi } from "./account.mapper";
import { AccountFormComponent } from "./components";

export const AccountPage: FC = () => {
  const navigate = useNavigate();
  const [resultError, setResultError] = useState<string>("");
  const { container, title } = classes;

  const createAccount = (newAccount: NewAccountVm) => {
    const newAccountInfoAPI = mapNewAccountFromVmToApi(newAccount);

    saveAccount(newAccountInfoAPI).then((result) => {
      if (result) {
        navigate(appRoutes.accountList);
      } else {
        setResultError("Error al crear la cuenta");
      }
    });
  };

  return (
    <AppLayout>
      <div className={container}>
        <h1 className={title}>Cuenta Bancaria</h1>
        <AccountFormComponent
          createAccount={createAccount}
          result={resultError}
        ></AccountFormComponent>
      </div>
    </AppLayout>
  );
};
