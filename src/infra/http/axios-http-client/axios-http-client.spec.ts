import { AxiosHttpClient } from "./axios-http-client";
import axios from 'axios';
import faker from 'faker';
import { HttpPostParams } from "@/data/protocols/http";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeSut = (): AxiosHttpClient => {
    return new AxiosHttpClient();
}

const makePostUrl = (): HttpPostParams<any> => ({
    url: faker.internet.url(),
    body: faker.random.objectElement(),
})

describe('Description', () => {
    it('Should call axios with correct url values', async() => {
        const request = makePostUrl()
        const sut = makeSut()
        await sut.post(request)

        expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request);
    });
});
