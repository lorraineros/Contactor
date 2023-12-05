import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';
import { Text, View } from 'react-native';
import Contact from '../Contact';

const ContactList = ({ 
  contacts
 }) => {
  return (
    <View style={styles.container}>
      { contacts
        ? 
          <>
            {contacts
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(c => <Contact key={c.id} {...c} />)
            }
          </>
        :
          <Text style={styles.paragraph}>You don't have any contacts yet</Text>
      }
    </View>
  );
};

export default ContactList;