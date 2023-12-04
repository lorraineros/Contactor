import React from 'react';
import styles from './styles';
import { Text, View } from 'react-native';

const Contacts = ({ navigation: {navigate} }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contactor!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Contacts;