import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';

const Contact = ({ 
  id,
  name,
  phoneNumber,
  photo
 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ name }</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Contact;