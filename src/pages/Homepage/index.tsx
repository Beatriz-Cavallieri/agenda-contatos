import React, { useEffect, useState } from 'react'
import api from '../../services/api';
import ContactInfo from '../../components/ContactInfo';
import { IContact } from '../../types/contact';
import { Link } from 'react-router-dom';
import { ColorButton } from '../../components/Button';
import { PageWrapper } from '../../components/PageWrapper';


const Homepage = () => {
    const [contacts, setContacts] = useState<Array<IContact>>([])

    useEffect(() => {
        async function loadContacts(): Promise<void> {
            const response = await api.get('/contacts');
            setContacts(response.data)
        }
        loadContacts();
    }, []);
    return (
        <PageWrapper>
            <h1>Contatos</h1>
            <Link to={'/create'}>
                <ColorButton>
                    + Criar contato
                </ColorButton>
            </Link>
            {contacts && contacts.map(contact => <ContactInfo {...contact} />)}
        </PageWrapper>
    )
}

export default Homepage