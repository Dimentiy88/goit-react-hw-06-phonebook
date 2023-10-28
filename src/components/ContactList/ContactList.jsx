import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { onFilterChange } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = ({ target: { value } }) => {
    dispatch(onFilterChange(value));
  };

  return (
    <div className={css.wraperContactList}>
      <ul className={css.contactList}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={css.contactListItem}>
            {contact.name}: {contact.number}
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
