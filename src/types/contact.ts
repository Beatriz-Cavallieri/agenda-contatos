import { Address } from "./address";
import { Phone } from "./phone";

export interface IContact {
    id: string;
    name: string;
    addresses: Address[];
    phones: Phone[];
}
