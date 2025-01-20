import * as apiModel from "./api/movement-list.api-model"
import { mapAccountInfoFromApiToVm, mapMovementListFromApiToVm } from "./movement-list.mapper"
import { accountInfoMock, movementListApi, resultMovementListMock, accountVMMock } from "./movement-list.mapper.mock";

describe("mapAccountInfoFromApiToVm", () => {
    it("should return data as modelVM when reads from API ", () => {
        const resultVM = mapAccountInfoFromApiToVm(accountInfoMock);
        expect(resultVM).toEqual(accountVMMock)
    });
});
describe("mapMovementListFromApiToVm", () => {
    it("should return empty array when it feeds empty array", () => {
        const movementListApi: apiModel.MovementApi[] = []
        const resultVM = mapMovementListFromApiToVm(movementListApi);
        expect(resultVM).toEqual([])
    });
    it("should return data as modelVM when reads from API ", () => {
        const resultVM = mapMovementListFromApiToVm(movementListApi);
        expect(resultVM).toEqual(resultMovementListMock)
    });
});