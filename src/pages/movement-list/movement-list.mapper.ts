import * as apiModel from "./api/movement-list.api-model"
import * as viewModel from "./movement-list.vm"

export const mapAccountInfoFromApiToVm = (accountList: apiModel.AccountApi): viewModel.AccountVm => {
    const { id, iban, name, balance } = accountList;
    return {
        id,
        iban,
        name,
        balance: balance.toString(),
    };
};

export const mapMovementListFromApiToVm = (movementList: apiModel.MovementApi[]) : viewModel.MovementVm[] =>
    movementList.map((movement) => {
        const { id, description, amount, balance, accountId, transaction, realTransaction } = movement;
        return ({
            id,
            description,
            amount: amount.toString(),
            balance: balance.toString(),
            accountId,
            transaction: new Date(transaction),
            realTransaction: new Date(realTransaction),
        });
    });

