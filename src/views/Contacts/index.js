import React, { useState } from 'react';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, Text, View } from 'react-native';
import ContactList from '../../components/ContactList';
import ContactModal from '../../components/ContactModal';

const contacts = [
  {
    name: "Irina",
    phoneNumber: 123456,
    photo: "https://static.wikia.nocookie.net/squishmallowsquad/images/2/26/Irina.jpg/revision/latest?cb=20210820092849"
  },
  {
    name: "Violet",
    phoneNumber: 234567,
    photo: "https://static.wikia.nocookie.net/squishmallowsquad/images/5/59/Violet.jpg/revision/latest?cb=20200814095539"
  },
  {
    name: "Ace",
    phoneNumber: 345678,
    photo: "https://static.wikia.nocookie.net/squishmallowsquad/images/c/c1/Acet.png/revision/latest?cb=20230401061717"
  }
];

const Contacts = ({ navigation: {navigate} }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState();

  const addContact = () => {
    console.log('.');
  } 

  const selectContact = (name) => {
    const contact = contacts.find(b => b.name === name)
    setSelectedcontact(contact)
    setcontactName(name)
  } 
  
  return (
    <View style={styles.container}>
      <ContactModal
        isOpen={isAddModalOpen}
        defaultContact={selectedContact}
        selectPhoto={() => selectContact()}
        closeModal={() => setIsAddModalOpen(false)}
        submitModal={addContact}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={() => setIsAddModalOpen(true)}>
      <Entypo style={styles.icon} name="plus" />
        <Text style={styles.paragraph}>Add new contact</Text>
      </TouchableOpacity>
      <ContactList contacts={contacts}/>
    </View>
  );
};

export default Contacts;