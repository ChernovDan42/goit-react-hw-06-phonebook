import { ContactForm } from './Contacts/ContactForm/ContactForm';
import { ContactsFilter } from './Contacts/ContactsFilter/ContactsFilter';
import { ContactsList } from './Contacts/ContactsList/ContactsList';

export const App = () => {
  return (
    <div>
      <ContactForm />
      <ContactsFilter />
      <ContactsList />
    </div>
  );
};
