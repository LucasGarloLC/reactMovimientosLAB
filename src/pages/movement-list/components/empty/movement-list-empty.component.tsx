import { FC } from "react";
import classes from "./movement-list-empty.component.module.css"

const MovementListEmptyComponent: FC = () => {
    const { emptyCell, row } = classes;
    return (
        <div className={row}>
            <span className={emptyCell}>No hay movimientos para mostrar</span>
        </div>
    );
};

export default MovementListEmptyComponent;