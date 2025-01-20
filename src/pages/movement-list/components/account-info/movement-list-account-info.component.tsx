import { FC } from "react";
import { AccountVm } from "../../movement-list.vm";
import classes from "./movement-list-account-info.component.module.css"

interface MovementListAccountInfoProps {
    accountInfo: AccountVm;
}

export const MovementListAccountInfo: FC<MovementListAccountInfoProps> = ({ accountInfo }) => {
    const { headerContainer, infoCuentaHeader } = classes;
    const { balance: balanceResponse, name: nameResponse, iban: ibanResponse } = accountInfo;

    const balance = !!balanceResponse ? `${balanceResponse} €` : "Saldo no disponible";
    const name = !!nameResponse ? `Alias: ${nameResponse}` : "Alias no disponible";
    const iban = !!ibanResponse ? `IBAN: ${ibanResponse}` : "IBAN no disponible";

    return (
        <>
            <div className={headerContainer}>
                <h1>Saldos y Últimos movimientos</h1>
                <div className={classes.saldoDisponibleContainer}>
                    <p> SALDO DISPONIBLE:</p> 
                    <h2>{balance}</h2>
                </div>
            </div>
            <div className={infoCuentaHeader}>
                <h2>{name}</h2>
                <h2>{iban}</h2>
            </div>
        </>
    )
}