import React, { useEffect, useState } from 'react';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import * as fileService from '../../services/fileService';
import ContactModal from '../../components/ContactModal';

const ContactDetail = ({ route }) => {
  const { name, phoneNumber, photo, contactName } = route.params;
  const [selectedContact, setSelectedContact] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const contacts = await fileService.getAllContacts();
      const contact = contacts.find(b => b.file.name === name).file;  
      setSelectedContact(contact);
    })();
  }, [name]);
  
  const editContact = () => {  
  }

  return (
    <View style={styles.container}>
      <ContactModal
        isOpen={isModalOpen}
        defaultContact={selectedContact}
        closeModal={() => setIsModalOpen(false)}
        submitModal={editContact}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={() => setIsModalOpen(true)}>
        <Entypo style={styles.icon} name="edit" />
        <Text style={styles.text}>Edit contact</Text>
      </TouchableOpacity>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{ uri: `${selectedContact ? selectedContact.photo : photo}` }}
      />
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.paragraph}>{name}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Phone Number</Text>
          <Text style={styles.paragraph}>{selectedContact ? selectedContact.phoneNumber : phoneNumber}</Text>
        </View>
      </View>
    </View>
  );
};

export default ContactDetail;
