import { ListContainer } from './list.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ListContainer>
      <ul>
        {filteredContacts.map(({ name, number, id }) => (
          <li key={id}>
            <p>
              {name} : {number}
            </p>
            <button type="submit" onClick={() => handleDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </ListContainer>
  );
};
