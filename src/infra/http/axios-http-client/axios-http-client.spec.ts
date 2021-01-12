import { AxiosHttpClient } from "./axios-http-client";
import axios from 'axios';
import faker from 'faker';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeSut = (): AxiosHttpClient => {
    return new AxiosHttpClient();
}

describe('Description', () => {
    it('Should call Http with correct url', () => {
        const url = faker.internet.url();
        const sut = makeSut();
        sut.post({ url: url})

        expect(sut).toHaveBeenCalledWith('any_url');
    });
});
