import axios from 'axios';
import { InputSC, LabelSC } from '../../../pages/CreateContact/styles';
import { Address } from '../../../types/address';
import { TextButton, RemoveButtonSC } from '../../Button';
import { useState } from 'react';
import { Header3 } from '../../Headers';
import { Card } from '../../Card';
import { AddressGridSC } from './styles';

interface IAddressInput extends Address {
    onChange: (address: Address) => void;
    onRemove: () => void;
    index: number;
}

interface ICorreios {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
}

const AddressInput = (props: IAddressInput) => {
    const { index, number, complement, onChange, onRemove } = props;

    const [state, setState] = useState(props.state)
    const [cep, setCep] = useState(props.cep)
    const [neighborhood, setNeighborhood] = useState(props.neighborhood)
    const [city, setCity] = useState(props.city)
    const [street, setStreet] = useState(props.street)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onChange({ ...props, [name]: value });
    };

    const updateAddressFromCep = (data: ICorreios) => {
        setState(data.uf)
        setCity(data.localidade)
        setNeighborhood(data.bairro)
        setStreet(data.logradouro)
    }

    const findAddress = async () => {
        try {
            const response = await axios.get<ICorreios>(
                `https://viacep.com.br/ws/${cep}/json/`
            );
            updateAddressFromCep(response.data)

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Card>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Header3>Endereço {index + 1}</Header3>
                {index > 0 && <RemoveButtonSC
                    aria-label='Remover Endereço'
                    type="button"
                    onClick={onRemove}>
                    x
                </RemoveButtonSC>
                }
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <LabelSC htmlFor={`cep-${index}`}>
                    CEP*
                </LabelSC>
                <InputSC
                    required
                    type="text"
                    id={`cep-${index}`}
                    value={cep}
                    onChange={(event) => setCep(event.target.value)}
                />
                <TextButton type="button" onClick={findAddress}>
                    Buscar endereço
                </TextButton>
            </div>
            <AddressGridSC>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <LabelSC htmlFor={`street-${index}`}>Rua*</LabelSC>
                    <InputSC
                        required
                        type="text"
                        id={`street-${index}`}
                        name="street"
                        value={street}
                        onChange={handleInputChange} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <LabelSC htmlFor={`number-${index}`}>Número*</LabelSC>
                    <InputSC
                        required
                        type="text"
                        id={`number-${index}`}
                        name="number"
                        value={number}
                        onChange={handleInputChange} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <LabelSC htmlFor={`complement-${index}`}>Complemento:</LabelSC>
                    <InputSC
                        type="text"
                        id={`complement-${index}`}
                        name="complement"
                        value={complement}
                        onChange={handleInputChange} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <LabelSC htmlFor={`neighborhood-${index}`}>Bairro*</LabelSC>
                    <InputSC
                        required
                        type="text"
                        id={`neighborhood-${index}`}
                        name="neighborhood"
                        value={neighborhood}
                        onChange={handleInputChange} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <LabelSC htmlFor={`city-${index}`}>Cidade*</LabelSC>
                    <InputSC
                        required
                        type="text"
                        id={`city-${index}`}
                        name="city"
                        value={city}
                        onChange={handleInputChange} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <LabelSC htmlFor={`state-${index}`}>Estado*</LabelSC>
                    <InputSC
                        required
                        type="text"
                        id={`state-${index}`}
                        name="state"
                        value={state}
                        onChange={handleInputChange} />
                </div>
            </AddressGridSC>
        </Card >
    );
};

export default AddressInput