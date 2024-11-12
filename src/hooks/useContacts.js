import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { contactsSelectors, filtersSelectors } from '../redux';

const selectFilteredContacts = createSelector(
  [contactsSelectors.selectContacts, filtersSelectors.selectFiltersValue],
  (contacts, filter) => {
    const normalizedSearch = filter?.toLowerCase().trim();
    return contacts?.filter(contact => {
      return (
        contact.name.toLowerCase().includes(normalizedSearch) ||
        contact.number.includes(normalizedSearch)
      );
    });
  }
);

export const useContacts = () => {
  const contacts = useSelector(contactsSelectors.selectContacts);
  const loading = useSelector(contactsSelectors.selectLoading);
  const error = useSelector(contactsSelectors.selectError);
  const filters = useSelector(filtersSelectors.selectFiltersValue);
  const filteredContacts = useSelector(selectFilteredContacts);

  return {
    contacts,
    loading,
    error,
    filters,
    filteredContacts,
  };
};
