import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';
import { headings } from '../../styles';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Contact = ({ 
  name,
  phoneNumber,
  photo
 }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate('ContactDetail', { name, phoneNumber, photo })}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={{ uri: `${photo}` }}/>
        <Text style={styles.title}>{ name }</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Contact;