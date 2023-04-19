import React from 'react';
import { IContact } from '../../types/contact';
import { InfoWrapperSC, ContactNameSC, ContactTitleSC, CircleSC, ContactH3SC } from './styles';

const ContatInfo = (props: IContact) => {
    return (
        <div>
            <ContactTitleSC>
                <CircleSC color='#345782'>
                    {props.name[0]}
                </CircleSC>
                <ContactNameSC>{props.name}</ContactNameSC>
            </ContactTitleSC>
            <ContactH3SC>Endereços:</ContactH3SC>
            <ul>
                {props.addresses.map((address, index) => (
                    <li key={index}>
                        <p>{address.street}, {address.number}, {address.complement}</p>
                        <p>{address.neighborhood}, {address.city} - {address.state}</p>
                        <p>CEP {address.cep}</p>
                    </li>
                ))}
            </ul>
            <ContactH3SC>Telefones:</ContactH3SC>
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
