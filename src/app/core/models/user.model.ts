export interface User {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    role?: string;
    footprints?: string;
    token?: string;
    country?: string;
}

export class UserModel {
    constructor(
        public id?: string,
        public name?: string,
        public email?: string,
        public _token?: string,
        public expirationDate?: Date
    ) {}

    get token() {
        return this._token;
    }
}