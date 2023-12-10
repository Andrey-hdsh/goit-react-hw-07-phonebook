import { ContactForm } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../List/List';
import { Loader } from 'components/Loader/Loader';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export const SectionFormContacts = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && !error && <Loader />}
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {error !== null && (
        <p style={{
          color: 'red'
        }}>
          <b>Sorry, something went wrong... Try reloading the page</b>
        </p>
      )}
    </div>
  );
};
