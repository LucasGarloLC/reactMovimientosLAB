import { FC } from "react";
import { MovementVm } from "../../movement-list.vm";
import classes from "./movement-list-item.component.module.css"
import { amountClassName } from "./movement-list-item.utils";

interface MovementListItemComponentProps {
    movementItem: MovementVm;
}

export const MovementListItemComponent: FC<MovementListItemComponentProps> = ({ movementItem }) => {
    const { transaction, realTransaction, description, amount: amountResponse, balance: balanceResponse } = movementItem;
    const { dataCell, alignRight, row } = classes;

    const amount = !!amountResponse ? `${amountResponse} €` : "No disponible";
    const balance = !!balanceResponse ? `${balanceResponse} €` : "No disponible";

    return (
        <div className={row}>
            <span className={dataCell}>
            {transaction.toLocaleDateString()}
            </span>
            <span className={dataCell}>
                {realTransaction.toLocaleDateString()}
            </span>
            <span className={dataCell}>
                {description}
            </span>
            <span
            className={amountClassName(amountResponse, classes)}>
                {amount}
            </span>
            <span className={`${dataCell} ${alignRight}`}>
                {balance}
            </span>
        </div>
    )
}