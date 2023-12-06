import React, { useEffect, useState } from 'react';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import ContactList from '../../components/ContactList';
import ContactModal from '../../components/ContactModal';
import * as EContacts from 'expo-contacts';
import * as contactServive from '../../services/contactService';
import * as fileService from '../../services/fileService';
import * as imageService from '../../services/imageService';

const Contacts = ({ navigation: {navigate} }) => {
  const [contacts, setContacts] = useState([]);
  const [image, setImage] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const defaultPhoto = "https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png";

  useEffect(() => {
    (async () => {
      // await fileService.cleanDirectory();
      const contacts = await fileService.getAllContacts();
      setContacts(contacts);
    })();
  }, []);

  const addContact = async (name, phoneNumber, photo, image) => {
    setImage(null);
    if (photo && image) {
      image = null;
    };
    if (!photo && !image) {
      photo = defaultPhoto;
    };

    const contact = {
      name,
      phoneNumber,
      photo,
      image
    };

    const newContact = await fileService.addContact(contact);
    setContacts([...contacts, newContact]);
    setIsModalOpen(false);
  }

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
  
  const importContacts = async () => { 
    const data = await contactServive.getContacts();

    if (data.length > 0) {
      const importedContacts = data.map(async (contact) => {
        const name = contact.name;
        const phoneNumber = contact.phoneNumbers ? contact.phoneNumbers[0]?.number : '';
        const photo = contact.image ? contact.image.uri : defaultPhoto;

        const newContact = await fileService.addContact({ name, phoneNumber, photo });
        return newContact;
      });

      const newContacts = await Promise.all(importedContacts);
      setContacts([...contacts, ...newContacts]);
    }
  }  
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <ContactModal
          isOpen={isModalOpen}
          defaultContact={null}
          image={image}
          takePhoto={() => takePhoto()}
          selectPhoto={() => selectPhoto()}
          closeModal={() => setIsModalOpen(false)}
          submitModal={addContact}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => setIsModalOpen(true)}>
            <Entypo style={styles.icon} name="plus" />
            <Text style={styles.paragraph}>Add new contact</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => importContacts()}>
            <Entypo style={styles.icon} name="login" />
            <Text style={styles.paragraph}>Import contacts</Text>
          </TouchableOpacity>
        </View>
        <ContactList contacts={contacts}/>
      </View>
    </ScrollView>
  );
};

export default Contacts;
