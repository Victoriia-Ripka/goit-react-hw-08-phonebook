import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import {MyContactForm} from '../Form/Form';
import {Section} from '../Section/Section';
import {ListOfContacts} from '../ListOfContacts/ListOfContacts';
import {Filter} from '../Filter/Filter';

export const ContactsEditor = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <MyContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ListOfContacts />
      </Section>
    </>
  );
};
