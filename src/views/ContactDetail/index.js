import React from 'react';
import styles from './styles';
import { Image, Text, View } from 'react-native';
import Detail from '../../components/Detail';

const ContactDetail = ({ route }) => {
  const { name, phoneNumber, photo } = route.params
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{ uri: `${photo}` }}/>
      <Text style={styles.paragraph}>{ name }</Text>
      <Text style={styles.paragraph}>{ phoneNumber }</Text>
    </View>
  );
};

export default ContactDetail;