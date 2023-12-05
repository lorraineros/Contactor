import contacts from '../../resources/data.json';
import React, { useState } from 'react';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, Text, View } from 'react-native';
import ContactList from '../../components/ContactList';
import ContactModal from '../../components/ContactModal';

const Contacts = ({ navigation: {navigate} }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactName, setContactName] = useState('')

  const addContact = () => {
    console.log('.');
  } 
  
  return (
    <View style={styles.container}>
      <ContactModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        submitModal={addContact}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={() => setIsModalOpen(true)}>
      <Entypo style={styles.icon} name="plus" />
        <Text style={styles.paragraph}>Add new contact</Text>
      </TouchableOpacity>
      <ContactList contacts={contacts} contactName={contactName}/>
    </View>
  );
};

export default Contacts;