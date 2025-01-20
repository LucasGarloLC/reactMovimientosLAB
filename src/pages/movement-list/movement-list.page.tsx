import { AppLayout } from "@/layouts";
import { FC, useEffect, useState } from "react";
import { AccountVm, MovementVm, createEmptyAccount } from "./movement-list.vm";
import { MovementListAccountInfo } from "./components/account-info/movement-list-account-info.component";
import { MovementListTableComponent } from "./components/table/movement-list-table.component";
import classes from "./movement-list.page.module.css"
import { getAccountInfo, getMovementsList } from "./api/movement-list.api";
import { mapAccountInfoFromApiToVm, mapMovementListFromApiToVm } from "./movement-list.mapper";
import { useParams } from "react-router-dom";

export const MovementListPage: FC = () => {
  const {id} = useParams();
  const [accountInfo, setAccountInfo] = useState<AccountVm>(createEmptyAccount());
  const [movementlist, setMovementList] = useState<MovementVm[]>([]);

  useEffect(() => {
    if (id) {
      getAccountInfo(id).then((result) =>
        setAccountInfo(mapAccountInfoFromApiToVm(result))
      );
      getMovementsList(id).then((result) =>
      setMovementList(mapMovementListFromApiToVm(result))
      );
    }
  }, []);
  
  return(
    <AppLayout>
      <div className={classes.root}>
        <MovementListAccountInfo accountInfo={accountInfo}/>
        <MovementListTableComponent movementList={movementlist}/>
      </div>
    </AppLayout>
    );
};
