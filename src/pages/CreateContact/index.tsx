import { useState } from 'react';
import { Address } from '../../types/address';
import { Phone } from '../../types/phone';
import { IContact } from '../../types/contact';
import api from '../../services/api';
import { v4 as uuidv4 } from 'uuid';
import { FormSC, InputSC, LabelSC, SubmitButtonSC } from './styles';
import PhoneInput from '../../components/Inputs/PhoneInput';
import { AddButtonSC } from '../../components/Button';

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
        setPhones([...phones, initialPhone]);
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
        <FormSC onSubmit={handleSubmit}>
            <LabelSC>
                Nome:
                <InputSC
                    required
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                />
            </LabelSC>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3>Telefone(s)</h3>
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
                        type={phone.type}
                        number={phone.number}
                        onChange={(phone) => handlePhoneChange(index, phone)}
                        onRemove={() => handleRemovePhone(index)}
                    />
                ))}



            <SubmitButtonSC type="submit">Submit</SubmitButtonSC>
        </FormSC>
    )
}

export default CreateContact