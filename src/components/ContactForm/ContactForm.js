import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import s from './ContactForm.module.css';
import Input from '../Input';
import Label from '../Label';
import options from '../options';
import { addContact } from '../../redux/contacts/contacts-action';
import { getItems } from '../../redux/contacts/contacts-selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const contacts = useSelector(getItems);

  const dispatch = useDispatch();
  const onSubmit = () => dispatch(addContact(name, number));

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    const checkName = newName => contacts.find(({ name }) => name === newName);

    if (!checkName(name) ?? checkName(name) !== undefined) {
      onSubmit(name, number);
      reset();
      return;
    }
    alert(`${name} is already in contacts`);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
      <Label id={nameInputId} title="Name">
        <Input
          id={nameInputId}
          type="text"
          name="name"
          value={name}
          handleChange={handleChange}
          options={options.name}
        />
      </Label>
      <Label id={numberInputId} title="Number">
        <Input
          id={numberInputId}
          type="tel"
          name="number"
          value={number}
          handleChange={handleChange}
          options={options.number}
        />
      </Label>
      <button className={s.button} type="submit">
        add Contact
      </button>
    </form>
  );
};

export default ContactForm;
