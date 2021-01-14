import { AxiosHttpClient } from "./axios-http-client";
import { mockPostRequest } from "@/data/test/";
import { mockAxios } from '@/infra/test/'
import axios from 'axios';

jest.mock('axios');
type SutTypes = {
    sut: AxiosHttpClient
    mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
    const sut =  new AxiosHttpClient()
    const mockedAxios = mockAxios();
    return { 
        sut, 
        mockedAxios
    };
}

describe('Description', () => {
    it('Should call axios with correct url values', async() => {
        const request = mockPostRequest()
        const { sut, mockedAxios } = makeSut()
        await sut.post(request)

        expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
    });
    it('Should return StatusCode ', async() => {
        const { sut, mockedAxios} = makeSut()
        const promise = sut.post(mockPostRequest())
        expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
    });
});
