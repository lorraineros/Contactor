import React from 'react';
import styles from './styles';
import { Image, Text, View } from 'react-native';

const ContactDetail = ({ route }) => {
  const { name, phoneNumber, photo } = route.params;

  return (
    <View style={styles.container}>
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
