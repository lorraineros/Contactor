import React, { useEffect, useState } from 'react';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import ContactList from '../../components/ContactList';
import ContactModal from '../../components/ContactModal';
import * as fileService from '../../services/fileService';
import * as EContacts from 'expo-contacts';

const Contacts = ({ navigation: {navigate} }) => {
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const contacts = await fileService.getAllContacts();
      setContacts(contacts);
    })();
  }, []);

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
  
  const importContacts = async () => { 
    const { status } = await EContacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await EContacts.getContactsAsync({
        fields: [EContacts.Fields.Name, EContacts.Fields.PhoneNumbers, EContacts.Fields.Image],
      });

      if (data.length > 0) {
        const importedContacts = data.map(async (contact) => {
          const name = contact.name;
          const phoneNumber = contact.phoneNumbers ? contact.phoneNumbers[0]?.number : '';
          const photo = contact.image ? contact.image.uri : null;

          const newContact = await fileService.addContact({ name, phoneNumber, photo });
          return newContact;
        });

        const newContact = await Promise.all(importedContacts);
        console.log(newContact);
        setContacts([...contacts, ...newContact]);
      }
    }
  }  
  
  return (
    <ScrollView>
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
        <TouchableOpacity 
          style={styles.button}
          onPress={() => importContacts()}>
          <Text style={styles.paragraph}>Import contacts</Text>
        </TouchableOpacity>
        <ContactList contacts={contacts}/>
      </View>
    </ScrollView>
  );
};

export default Contacts;
