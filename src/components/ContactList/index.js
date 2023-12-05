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
    .sort((a, b) => a.name.localeCompare(b.name)) // Sort contacts alphabetically
    .filter(contact =>
      contact.name.toLowerCase().includes(searchFilter.toLowerCase())
    );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name"
        value={searchFilter}
        onChangeText={text => setSearchFilter(text)}
      />
      {filteredContacts.length > 0 ? (
        filteredContacts.map(c => <Contact key={c.id} {...c} />)
      ) : (
        <Text style={styles.paragraph}>No matching contacts found</Text>
      )}
    </View>
  );
};

export default ContactList;

