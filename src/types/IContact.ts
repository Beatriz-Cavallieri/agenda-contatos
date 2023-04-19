

export interface IAdress {
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    cep: string;
}

interface IPhoneNumber {
    type: string;
    number: string;
}

export interface IContact {
    id: string;
    name: string;
    addresses: IAdress[];
    phones: IPhoneNumber[];
}
