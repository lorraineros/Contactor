import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from './styles';
import { Text, View, TextInput } from 'react-native';
import Contact from '../Contact';

const ContactList = ({
  contacts
}) => {
  const [searchFilter, setSearchFilter] = useState('');

  const filteredContacts = contacts
    .sort((a, b) => a.file.name.localeCompare(b.file.name))
    .filter(contact =>
      contact.file.name.toLowerCase().includes(searchFilter.toLowerCase())
    );

  console.log(filteredContacts)

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name"
        value={searchFilter}
        onChangeText={text => setSearchFilter(text)}
      />
      {contacts.length === 0 ? (
        <Text style={styles.paragraph}>You don't have any contacts yet</Text>
      ) : filteredContacts.length > 0 ? (
        filteredContacts.map(c => <Contact key={c.name} {...c.file} />)
      ) : (
        <Text style={styles.paragraph}>No matching contacts found</Text>
      )}
    </View>
  );
};

export default ContactList;

