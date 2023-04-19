import React, { useEffect, useState } from 'react'
import api from '../services/api';
import { IContact } from '../types/Icontact';
import ContatInfo from '../components/ContactInfo';


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
        <div>Homepage
            {contacts && contacts.map(contact => <ContatInfo {...contact} />)}
        </div>
    )
}

export default Homepage