import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-action';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
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
