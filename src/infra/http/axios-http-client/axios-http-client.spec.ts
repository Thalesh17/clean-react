import { AxiosHttpClient } from "./axios-http-client";
import axios from 'axios';
import faker from 'faker';
import { HttpPostParams } from "@/data/protocols/http";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedAxiosResult = {
    data: faker.random.objectElement(),
    status: faker.random.number()
}
mockedAxios.post.mockResolvedValue(mockedAxiosResult)

const makeSut = (): AxiosHttpClient => {
    return new AxiosHttpClient();
}

const mockPostUrl = (): HttpPostParams<any> => ({
    url: faker.internet.url(),
    body: faker.random.objectElement(),
})

describe('Description', () => {
    it('Should call axios with correct url values', async() => {
        const request = mockPostUrl()
        const sut = makeSut()
        await sut.post(request)

        expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request);
    });
    it('Should return StatusCode ', async() => {
        const sut = makeSut()
        const httpResponse = await sut.post(mockPostUrl())
        expect(httpResponse).toEqual({
            statusCode: mockedAxiosResult.status,
            body: mockedAxiosResult.data
        })
    });
});
