import React, { useEffect, useState } from 'react';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import * as fileService from '../../services/fileService';
import ContactModal from '../../components/ContactModal';

const ContactDetail = ({ route }) => {
  const { name, phoneNumber, photo, contactName } = route.params;
  const [image, setImage] = useState()
  const [selectedContact, setSelectedContact] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const contacts = await fileService.getAllContacts();
      const contact = contacts.find(b => b.file.name === name).file;  
      setSelectedContact(contact);
    })();
  }, [name]);
  
  const editContact = async (editedName, editedPhoneNumber, editedPhoto) => {
    await fileService.removeContact(selectedContact.name);
    const updatedContact = {
      ...selectedContact,
      name: editedName,
      phoneNumber: editedPhoneNumber,
      photo: editedPhoto
    };
    const newContact = await fileService.addContact(updatedContact);
    setSelectedContact(newContact.file);
  };

  const takePhoto = async () => {
    const photo = await imageService.takePhoto();
    if (photo) { 
      await addImage(photo); 
    }
  }

  const selectPhoto = async () => {
    const photo = await imageService.selectFromCameraRoll();
    if (photo) {
      await addImage(photo);
    }
  }

  const addImage = async image => {
    const newImage = await fileService.addImage(image);
    setImage(newImage);
  }

  const makePhoneCall = () => {
    const callNumber = selectedContact ? selectedContact.phoneNumber : phoneNumber;
    if (callNumber) {
      const number = callNumber.replace(/[^0-9+]/g,'');
      Linking.openURL(`tel:${number}`);
    }
  };

  return (
    <View style={styles.container}>
      <ContactModal
        isOpen={isModalOpen}
        defaultContact={selectedContact}
        image={image}
        takePhoto={() => takePhoto()}
        selectPhoto={() => selectPhoto()}
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
      {selectedContact && selectedContact.phoneNumber && (
      <TouchableOpacity
        style={styles.call}
        onPress={() => makePhoneCall()}>
        <Text style={styles.callPara}>Call</Text>
        <Entypo style={styles.callIcon} name="phone" />
      </TouchableOpacity>
      )}
    </View>
  );
};

export default ContactDetail;
