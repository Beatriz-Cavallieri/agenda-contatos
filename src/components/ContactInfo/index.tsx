import { IContact } from '../../types/contact';
import { ContactNameSC, ContactTitleSC, CircleSC, ContactH3SC } from './styles';
import { PHONE_TYPES_PT_BR } from '../../types/phone';
import { useState } from 'react';
import { Button, ViewMoreButton } from '../Button/styles';

const ContactInfo = (props: IContact) => {

    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    }
    return (
        <div>
            <ContactTitleSC>
                <CircleSC color='#345782'>
                    {props.name[0]}
                </CircleSC>
                <ContactNameSC>{props.name}</ContactNameSC>
                <ViewMoreButton
                    type="button" onClick={handleExpand}>{expanded ? "Ver menos" : "Ver mais"}</ViewMoreButton>
            </ContactTitleSC>
            {expanded && (<>
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
                <ContactH3SC>Telefones:</ContactH3SC><ul>
                    {props.phones.map((phone) => (
                        <li key={phone.number}>
                            <p>{PHONE_TYPES_PT_BR[phone.type]}: {phone.number}</p>
                        </li>
                    ))}
                </ul>
            </>)}
        </div>
    );
}

export default ContactInfo;
