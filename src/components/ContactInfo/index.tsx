import React from 'react';
import { IContact } from '../../types/Icontact';

const ContatInfo = (props: IContact) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>Endereços:</h3>
            <ul>
                {props.addresses.map((address, index) => (
                    <li key={index}>
                        <p>{address.street}, {address.number}</p>
                        <p>{address.complement}</p>
                        <p>{address.neighborhood}</p>
                        <p>{address.city} - {address.state}</p>
                        <p>{address.cep}</p>
                    </li>
                ))}
            </ul>
            <h3>phones:</h3>
            <ul>
                {props.phones.map((phone, index) => (
                    <li key={phone.number}>
                        <p>{phone.type}: {phone.number}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContatInfo;
