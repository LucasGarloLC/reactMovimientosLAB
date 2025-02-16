export interface AccountVm {
  id: string;
  alias: string;
}

export interface NewAccountVm {
  type: string;
  name: string;
}

export interface FormValues {
  accountList: AccountVm[];
  type: string;
  name: string;
}

export const emptyAccount = (): NewAccountVm => ({
  type: "",
  name: "",
});
