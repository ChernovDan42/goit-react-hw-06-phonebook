import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { ContactItem } from './ContactItem';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);

  const visibleContacts = useMemo(() => {
    const normalized = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  }, [contacts, filterValue]);

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        return <ContactItem key={id} name={name} number={number} id={id} />;
      })}
    </ul>
  );
};
