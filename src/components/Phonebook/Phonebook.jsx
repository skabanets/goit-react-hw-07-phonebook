import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { PhonebookWrapper, Subtitle, Title } from './Phonebook.styled';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/slice';

export const Phonebook = () => {
  const contacts = useSelector(selectContacts);

  return (
    <PhonebookWrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts ({contacts.length})</Subtitle>
      <Filter />
      {contacts.length ? <Contacts /> : <p>No contacts</p>}
    </PhonebookWrapper>
  );
};
