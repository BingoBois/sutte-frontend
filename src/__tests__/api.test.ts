import Api from '../api/Api';

describe("Testing API Endpoint", () => {
    test("Testing POST Request", async () => {
        const serverResponse = await Api.testServer();
        expect(serverResponse).toBe({sut: "sut"});
    })
})