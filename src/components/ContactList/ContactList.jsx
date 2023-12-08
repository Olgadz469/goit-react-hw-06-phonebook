import React from 'react';
import { List, Item, Button } from './ContactList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';
import { getFilter } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  // console.log(contacts);
  const filter = useSelector(getFilter);
  // console.log(filter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();
  // console.log(filteredContacts);
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name + ' : ' + number}
          {
            <Button
              type="button"
              name="delete"
              onClick={() => dispatch(removeContact(id))}
            >
              delete
            </Button>
          }
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
