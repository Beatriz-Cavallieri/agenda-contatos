import React, { useEffect, useState } from 'react'
import api from '../../services/api';
import ContatInfo from '../../components/ContactInfo';
import { IContact } from '../../types/contact';
import { Link } from 'react-router-dom';


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
        <div>
            <Link to={'/create'}>Criar contato</Link>
            {contacts && contacts.map(contact => <ContatInfo {...contact} />)}
        </div>
    )
}

export default Homepage