import { InputSC, LabelSC } from '../../../pages/CreateContact/styles';
import { Address } from '../../../types/address';
import { RemoveButtonSC } from '../../Button';
import { AddressInputSC } from './styles';

interface IAddressInput extends Address {
    onChange: (address: Address) => void;
    onRemove: () => void;
    index: number;
}

const AddressInput = (props: IAddressInput) => {
    const { index, street, number, neighborhood, city, state, onChange, onRemove } = props;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onChange({ ...props, [name]: value });
    };

    return (
        <AddressInputSC>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3>Endereço {index + 1}</h3>
                {index > 0 && <RemoveButtonSC
                    aria-label='Remover Endereço'
                    type="button"
                    onClick={props.onRemove}>
                    x
                </RemoveButtonSC>
                }
            </div>
            <div>
                <LabelSC htmlFor={`street-${index}`}>Rua:</LabelSC>
                <InputSC
                    type="text"
                    id={`street-${index}`}
                    name="street"
                    value={street}
                    onChange={handleInputChange} />
            </div>
            <div>
                <LabelSC htmlFor={`number-${index}`}>Número:</LabelSC>
                <InputSC
                    type="text"
                    id={`number-${index}`}
                    name="number"
                    value={number}
                    onChange={handleInputChange} />
            </div>
            <div>
                <LabelSC htmlFor={`city-${index}`}>Cidade:</LabelSC>
                <InputSC
                    type="text"
                    id={`city-${index}`}
                    name="city"
                    value={city}
                    onChange={handleInputChange} />
            </div>
            <div>
                <LabelSC htmlFor={`state-${index}`}>Estado:</LabelSC>
                <InputSC
                    type="text"
                    id={`state-${index}`}
                    name="state"
                    value={state}
                    onChange={handleInputChange} />
            </div>
        </AddressInputSC >
    );
};

export default AddressInput