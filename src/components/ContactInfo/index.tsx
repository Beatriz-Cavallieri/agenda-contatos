import { IContact } from '../../types/contact';
import { ContactNameSC, ContactTitleSC, CircleSC } from './styles';
import { PHONE_TYPES_PT_BR } from '../../types/phone';
import { useState } from 'react';
import { TextButton } from '../Button';
import { Header3 } from '../Headers';
import { Card } from '../Card';

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
                <TextButton
                    type="button" onClick={handleExpand}>{expanded ? "Ver menos" : "Ver mais"}</TextButton>
            </ContactTitleSC>
            {expanded && (
                <Card>
                    <Header3>Endereços:</Header3>
                    <ul>
                        {props.addresses.map((address, index) => (
                            <li key={index}>
                                <p>{address.street}, {address.number}, {address.complement}</p>
                                <p>{address.neighborhood}, {address.city} - {address.state}</p>
                                <p>CEP {address.cep}</p>
                            </li>
                        ))}
                    </ul>
                    <Header3>Telefones:</Header3><ul>
                        {props.phones.map((phone) => (
                            <li key={phone.number}>
                                <p>{PHONE_TYPES_PT_BR[phone.type]}: {phone.number}</p>
                            </li>
                        ))}
                    </ul>
                </Card>
            )}
        </div>
    );
}

export default ContactInfo;
