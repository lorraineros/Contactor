import contacts from '../../resources/data.json';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import ContactModal from '../../components/ContactModal';

const ContactDetail = ({ route }) => {
  const { name, phoneNumber, photo, contactName } = route.params;
  const [selectedContact, setSelectedContact] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contact = contacts.find(b => b.name.toLowerCase() === name.toLowerCase())

  useEffect(() => {
    const contact = contacts.find(b => b.name.toLowerCase() === name.toLowerCase())
    setSelectedContact(contact)
  }, []);

  
  
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
      <TouchableOpacity onPress={() => setIsModalOpen(true)}>
        <Text>Edit contact</Text>
      </TouchableOpacity>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{ uri: `${photo}` }}
      />
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.paragraph}>{name}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Phone Number</Text>
          <Text style={styles.paragraph}>{phoneNumber}</Text>
        </View>
      </View>
    </View>
  );
};

export default ContactDetail;
