import React, { useEffect, useState } from 'react'
import api from '../../services/api';
import ContactInfo from '../../components/ContactInfo';
import { IContact } from '../../types/contact';
import { Link } from 'react-router-dom';
import { ColorButton } from '../../components/Button';
import { PageWrapper } from '../../components/PageWrapper';
import { Header1 } from '../../components/Headers';
import { InputSC } from '../CreateContact/styles';


const Homepage = () => {
    const [contacts, setContacts] = useState<Array<IContact>>([])
    const [searchText, setSearchText] = useState("")

    const filterContacts = () => {
        return contacts
            .filter((contact) => {
                const name = contact.name.toLowerCase();
                const term = searchText.toLowerCase();
                return name.includes(term);
            })
    }

    useEffect(() => {
        async function loadContacts(): Promise<void> {
            const response = await api.get('/contacts');
            setContacts(response.data)
        }
        loadContacts();
    }, []);
    return (
        <PageWrapper>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Header1>Contatos</Header1>
                <InputSC
                    type="text"
                    placeholder="Buscar contato"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            <Link to={'/create'}>
                <ColorButton>
                    + Criar contato
                </ColorButton>
            </Link>
            {contacts && filterContacts().map(contact => <ContactInfo {...contact} />)}
        </PageWrapper>
    )
}

export default Homepage