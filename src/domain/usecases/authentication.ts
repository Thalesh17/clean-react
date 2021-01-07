import { AccountModel } from './models/accountmodel';

type AuthenticationParams = {
    email: string;
    password: string;
}

export interface Authentication {
    auth(params: AuthenticationParams): Promise<AccountModel>

}