import React from 'react';
import { IContact } from '../../types/contact';
import { ContactNameSC, ContactTitleSC, CircleSC, ContactH3SC } from './styles';
import { PHONE_TYPES_PT_BR } from '../../types/phone';

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
                {props.phones.map((phone) => (
                    <li key={phone.number}>
                        <p>{PHONE_TYPES_PT_BR[phone.type]}: {phone.number}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContatInfo;
