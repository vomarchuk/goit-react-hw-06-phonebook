import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-action';
import s from './ContactList.module.css';
const ContactList = () => {
  const getFilteredContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  const contacts = useSelector(({ contacts: { items, filter } }) =>
    getFilteredContacts(items, filter),
  );

  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {contacts.map(item => {
        const { id, name, number } = item;
        return (
          <li key={id} className={s.item}>
            {name}: {number}
            <button
              className={s.btn__delete}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
