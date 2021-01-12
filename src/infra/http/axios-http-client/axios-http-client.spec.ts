import { AxiosHttpClient } from "./axios-http-client";
import axios from 'axios';
import faker from 'faker';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Description', () => {
    it('Should call Http with correct url', () => {
        const url = faker.internet.url();
        const sut = new AxiosHttpClient();
        sut.post({ url: url})

        expect(sut).toHaveBeenCalledWith('any_url');
    });
});
