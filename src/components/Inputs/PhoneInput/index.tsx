import { Phone, PhoneType } from '../../../types/phone';
import { InputSC, LabelSC } from '../../../pages/CreateContact/styles';
import { PhoneInputSC } from './styles';
import { RemoveButtonSC } from '../../Button';

interface IPhoneInput extends Phone {
    onChange: (phone: Phone) => void;
    onRemove: () => void;
    index: number;
}

const PhoneInput = (props: IPhoneInput) => {
    const { index, type, number, onChange, onRemove } = props

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange({ ...props, type: e.target.value as PhoneType });
    };

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange({ ...props, number: e.target.value });
    };
    return (
        <PhoneInputSC>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3>Telefone {index + 1}</h3>
                {index > 0 && <RemoveButtonSC
                    type="button"
                    aria-label='Remover telefone'
                    onClick={onRemove}>
                    x
                </RemoveButtonSC>
                }
            </div>
            <LabelSC>
                Tipo de telefone:
                <select
                    value={type}
                    onChange={handleTypeChange}
                    required>
                    <option value={"mobile" as PhoneType}>Celular</option>
                    <option value={"home" as PhoneType}>Casa</option>
                    <option value={"work" as PhoneType}>Trabalho</option>
                </select>
            </LabelSC>
            <LabelSC>
                Número:
                <InputSC
                    required
                    type="text"
                    value={number}
                    onChange={handleNumberChange}
                />
            </LabelSC>
        </PhoneInputSC>
    );
};

export default PhoneInput