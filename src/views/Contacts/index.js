import React, { useEffect, useState } from 'react';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, Text, View } from 'react-native';
import ContactList from '../../components/ContactList';
import ContactModal from '../../components/ContactModal';
import * as fileService from '../../services/fileService';

const Contacts = ({ navigation: {navigate} }) => {
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addContact = async (name, phoneNumber, photo) => {
    // if (thumbnailPhoto) {
    //   image = null
    // };
    const contact = {
      name,
      phoneNumber,
      photo
    };

    const newContact = await fileService.addContact(contact);
    setContacts([...contacts, newContact]);
    setIsModalOpen(false);
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
      <ContactList contacts={contacts}/>
    </View>
  );
};

export default Contacts;