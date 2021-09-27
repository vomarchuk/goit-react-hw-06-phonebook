import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
export const deleteContact = createAction('contacts/delete');
export const changeFilter = createAction('contacts/filter');
// eslint-disable-next-line import/no-anonymous-default-export
// export { addContact, deleteContact, changeFilter };

// import * as contactsTypes from './contacts-types';

// const addContact = (name, number) => ({
//   type: contactsTypes.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteContact = contactId => ({
//   type: contactsTypes.DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: contactsTypes.CHANGE_FILTER,
//   payload: value,
// });
