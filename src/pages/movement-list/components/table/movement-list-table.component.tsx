import { FC } from "react";
import { MovementVm } from "../../movement-list.vm";
import { MovementListItemComponent } from "../item/movement-list-item.component";
import classes from "./movement-list-table.component.module.css"
import MovementListEmptyComponent from "../empty/movement-list-empty.component";

interface MovementListTableComponentProps {
    movementList: MovementVm[];
}

export const MovementListTableComponent : FC<MovementListTableComponentProps> = ({ movementList }) => {
    const { gridContainer, headerTable, headerCell } = classes;
    return (
        <div className={gridContainer}>
            <div className={headerTable}>
                <span className={headerCell}>FECHA</span>
                <span className={headerCell}>FECHA VALOR</span>
                <span className={headerCell}>DESCRIPCIÓN</span>
                <span className={headerCell}>IMPORTE</span>
                <span className={headerCell}>SALDO DISPONIBLE</span>
            </div>
            {!!movementList.length && movementList.map((movement) => (
                <MovementListItemComponent key={movement.id} movementItem={movement}/>
            ))}
            {!movementList.length && <MovementListEmptyComponent />}
        </div>
    )

}