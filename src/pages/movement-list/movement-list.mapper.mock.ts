import * as apiModel from "./api/movement-list.api-model"

export const accountInfoMock: apiModel.AccountApi = {
    id: '1',
    iban: 'DE89370400440532013000',
    name: 'John Doe',
    balance: 1000.00
};

export const accountVMMock = {
    id: "1",
    iban: "DE89370400440532013000",
    name: "John Doe", 
    balance: "1000"
};

export const movementListApi: apiModel.MovementApi[] = [
    {
        id: '1',
        description: 'Payment for services',
        amount: 150.0,
        balance: 850.0,
        transaction: '2023-10-01T10:00:00Z',
        realTransaction: '2023-10-01T09:55:00Z',
        accountId: 'ACC123'
    },
    {
        id: '2',
        description: 'Refund for order',
        amount: -50.0,
        balance: 800.0,
        transaction: '2023-10-02T11:00:00Z',
        realTransaction: '2023-10-02T10:45:00Z',
        accountId: 'ACC123'
    },
    {
        id: '3',
        description: 'Salary deposit',
        amount: 2000.0,
        balance: 2800.0,
        transaction: '2023-10-03T12:00:00Z',
        realTransaction: '2023-10-03T11:50:00Z',
        accountId: 'ACC123'
    },
];

export const resultMovementListMock = [
    {
        id: '1',
        description: 'Payment for services',
        amount: "150",
        balance: "850",
        transaction: new Date('2023-10-01T10:00:00Z'),
        realTransaction: new Date('2023-10-01T09:55:00Z'),
        accountId: 'ACC123'
    },
    {
        id: '2',
        description: 'Refund for order',
        amount: "-50",
        balance: "800",
        transaction: new Date('2023-10-02T11:00:00Z'),
        realTransaction: new Date('2023-10-02T10:45:00Z'),
        accountId: 'ACC123'
    },
    {
        id: '3',
        description: 'Salary deposit',
        amount: "2000",
        balance: "2800",
        transaction: new Date('2023-10-03T12:00:00Z'),
        realTransaction: new Date('2023-10-03T11:50:00Z'),
        accountId: 'ACC123'
    },
];