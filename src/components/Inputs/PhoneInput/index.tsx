import { Phone, PhoneType } from '../../../types/phone';
import { InputSC, LabelSC } from '../../../pages/CreateContact/styles';
import { PhoneInputSC } from './styles';
import { RemoveButtonSC } from '../../Button';
import { Header3 } from '../../Headers';
import { Card } from '../../Card';

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
        <Card>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Header3>Telefone {index + 1}</Header3>
                {index > 0 && <RemoveButtonSC
                    type="button"
                    aria-label='Remover telefone'
                    onClick={onRemove}>
                    x
                </RemoveButtonSC>
                }
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <LabelSC htmlFor='type'>
                    Tipo de telefone*
                </LabelSC>
                <select
                    required
                    id={`type-${index}`}
                    value={type}
                    onChange={handleTypeChange}
                >
                    <option value={"mobile" as PhoneType}>Celular</option>
                    <option value={"home" as PhoneType}>Casa</option>
                    <option value={"work" as PhoneType}>Trabalho</option>
                </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <LabelSC htmlFor='"phone-number"'>
                    Número*
                </LabelSC>
                <InputSC
                    required
                    id={`phone-number-${index}`}
                    type="text"
                    value={number}
                    onChange={handleNumberChange}
                />
            </div>
        </Card >
    );
};

export default PhoneInput