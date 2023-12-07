import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Contact = ({ 
  name,
  phoneNumber,
  photo,
  image
 }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate('ContactDetail', { name, phoneNumber, photo })}>
      <View style={ styles.container }>
      {
        image
          ? <Image
            style={styles.image}
            resizeMode='cover'
            source={{ uri: `data:image/jpeg;base64,${image.file}` }}/>
          : <Image
            style={styles.image}
            resizeMode='cover'
            source={{ uri: `${photo}` }}/>
        }
        <Text style={styles.title}>{ name }</Text>
      </View>
    </TouchableOpacity>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  photo: PropTypes.string,
  image: PropTypes.object
}

export default Contact;