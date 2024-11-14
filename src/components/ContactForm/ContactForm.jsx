import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { v4 as uuidv4 } from 'uuid';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector((state) => state.contacts.items);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    else if (name === 'number') setNumber(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const existingContact = contacts.find(
      (contact) => contact.name === name || contact.number === number
    );
    if (existingContact) {
      alert(`${name} or ${number} is already in contacts`);
      return;
    }

    dispatch(addContact({ id: uuidv4(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          onChange={handleChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +."
          required
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

export default ContactForm;