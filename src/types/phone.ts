export type PhoneType = 'home' | 'work' | 'mobile'

export type Phone = {
    type: PhoneType;
    number: string;
}

export const PHONE_TYPES_PT_BR: Record<PhoneType, string> = {
    home: 'Casa',
    mobile: 'Celular',
    work: 'Trabalho'
}