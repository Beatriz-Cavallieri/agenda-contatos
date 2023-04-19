import { useState } from 'react';
import { Address } from '../../types/address';
import { Phone } from '../../types/phone';
import { IContact } from '../../types/contact';
import api from '../../services/api';
import { v4 as uuidv4 } from 'uuid';
import { FormSC, InputSC, LabelSC } from './styles';
import PhoneInput from '../../components/Inputs/PhoneInput';
import { AddButtonSC, ColorButton } from '../../components/Button';
import AddressInput from '../../components/Inputs/AddressInput';
import { PageWrapper } from '../../components/PageWrapper';
import { Header1, Header2 } from '../../components/Headers';
import { Card } from '../../components/Card';

const CreateContact = () => {
    const initialAddress: Address = { cep: '', city: '', neighborhood: '', number: '', state: '', street: '' }
    const initialPhone: Phone = { number: '', type: 'mobile' }

    const [name, setName] = useState('');
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [phones, setPhones] = useState<Phone[]>([]);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleAddPhone = () => {
        setPhones([...phones, { ...initialPhone }]);
    };

    const handlePhoneChange = (index: number, phone: Phone) => {
        const newPhones = [...phones];
        newPhones[index] = phone;
        setPhones(newPhones);
    };

    const handleRemovePhone = (index: number) => {
        const newPhones = [...phones];
        newPhones.splice(index, 1);
        setPhones(newPhones);
    };


    const handleAddAddress = () => {
        setAddresses([...addresses, { ...initialAddress }]);
    };

    const handleAddressChange = (index: number, address: Address) => {
        const newAddresses = [...addresses];
        newAddresses[index] = address;
        setAddresses(newAddresses);
    };

    const handleRemoveAddress = (index: number) => {
        const newAddresses = [...addresses];
        newAddresses.splice(index, 1);
        setAddresses(newAddresses);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        async function onSubmit(contact: IContact): Promise<void> {
            const response = await api.post('/contacts', contact);
        }
        const newContact: IContact = {
            id: uuidv4(),
            name,
            addresses,
            phones,
        };
        console.log(newContact)
        onSubmit(newContact);
    }
    return (
        <PageWrapper>
            <Header1>Criar contato</Header1>
            <FormSC onSubmit={handleSubmit}>
                <Header2>Principal</Header2>
                <Card>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <LabelSC htmlFor='name'>
                            Nome*
                        </LabelSC>
                        <InputSC
                            required
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange} />
                    </div>
                </Card>

                <div style={{ display: 'flex' }}>
                    <Header2>Telefones</Header2>
                    <AddButtonSC
                        aria-label='Adicionar telefone'
                        type="button"
                        onClick={handleAddPhone}>
                        +
                    </AddButtonSC>
                </div>

                {(phones.length ? phones : [initialPhone])
                    .map((phone, index) => (
                        <PhoneInput
                            key={index}
                            index={index}
                            type={phone.type}
                            number={phone.number}
                            onChange={(value) => handlePhoneChange(index, value)}
                            onRemove={() => handleRemovePhone(index)} />
                    ))}

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Header2>Endereços</Header2>
                    <AddButtonSC
                        aria-label='Adicionar telefone'
                        type="button"
                        onClick={handleAddAddress}>
                        +
                    </AddButtonSC>
                </div>

                {(addresses.length ? addresses : [initialAddress])
                    .map((address, index) => (
                        <AddressInput
                            key={index}
                            {...address}
                            index={index}
                            onChange={(value) => handleAddressChange(index, value)}
                            onRemove={() => handleRemoveAddress(index)} />
                    ))}



                <ColorButton type="submit">Submit</ColorButton>
            </FormSC>
        </PageWrapper>
    )
}

export default CreateContact