import React from 'react';
import styles from './styles';
import { Text, View } from 'react-native';

const ContactDetail = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Deatail</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default ContactDetail;