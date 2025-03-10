export interface AccountVm {
    id: string;
    iban: string;
    name: string;
    balance: string;
}

export const createEmptyAccount = (): AccountVm => ({
    id: "",
    iban: "",
    name: "",
    balance: "",
});

export interface MovementVm {
    id: string;
    description: string;
    amount: string;
    balance: string;
    transaction: Date;
    realTransaction: Date;
    accountId: string;
}
