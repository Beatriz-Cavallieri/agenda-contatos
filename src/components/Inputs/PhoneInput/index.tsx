import { Phone, PhoneType } from '../../../types/phone';
import { InputSC, LabelSC } from '../../../pages/CreateContact/styles';
import { PhoneInputSC, RemoveButtonSC } from './styles';

interface IPhoneInput extends Phone {
    onChange: (phone: Phone) => void;
    onRemove: () => void;
}

const PhoneInput = (props: IPhoneInput) => {
    const { type, number, onChange, onRemove } = props

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange({ ...props, type: e.target.value as PhoneType });
    };

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange({ ...props, number: e.target.value });
    };
    return (
        <PhoneInputSC>
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
            <RemoveButtonSC onClick={onRemove}>X</RemoveButtonSC>
        </PhoneInputSC>
    );
};

export default PhoneInput