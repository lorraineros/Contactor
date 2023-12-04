import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';
import Contact from '../Contact';

const ContactList = ({ 
  contacts
 }) => {
  return (
    <View style={styles.container}>
      {contacts.map(c => <Contact key={c.id} {...c} />)}
    </View>
  );
};

export default ContactList;