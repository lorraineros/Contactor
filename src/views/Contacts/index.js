import React from 'react';
import styles from './styles';
import { Text, View } from 'react-native';
import ContactList from '../../components/ContactList';

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
]

const Contacts = ({ navigation: {navigate} }) => {
  return (
    <View style={styles.container}>
      <ContactList contacts={contacts}/>
    </View>
  );
};

export default Contacts;