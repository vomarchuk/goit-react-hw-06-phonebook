import s from './App.module.css';
import Container from '../Container';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList/';
import Filter from '../Filter';
import { useSelector } from 'react-redux';

const App = () => {
  const contacts = useSelector(state => state.contacts.items.length);

  return (
    <>
      <Container>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
      </Container>
      {contacts > 0 ? (
        <Container>
          <h2 className={s.title}>Contacts</h2>
          <Filter />
          <ContactList />
        </Container>
      ) : (
        <Container>
          <h2 className={s.title}>Phone book is empty</h2>
        </Container>
      )}
    </>
  );
};

export default App;
