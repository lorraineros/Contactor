import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { darkerBlue } from '../../styles/colors'
import { Text, TextInput, View, TouchableHighlight } from 'react-native'
import Modal from '../Modal'

const ContactModal = ({
  isOpen,
  defaultContact,
  submitModal,
  closeModal
}) => {
  const [name, setName] = useState(defaultContact?.name || '');
  const [phoneNumber, setNumber] = useState(defaultContact?.phoneNumber || '');
  const [photo, setPhoto] = useState(defaultContact?.photo || '');

  useEffect(() => {
    if (defaultContact) {
      setName(defaultContact.name || '');
      setNumber(defaultContact.phoneNumber || '');
      setPhoto(defaultContact.photo || '');
    } else {
      setName('');
      setNumber('');
      setPhoto('');
    }
  }, [defaultContact]);

  const handleConfirm = () => {
    if (defaultContact) {
      submitModal(name, phoneNumber, photo);
    } else {
      submitModal(name, phoneNumber, photo);
    }
    closeModal();
  };


  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}>
      <View>
        <Text style={styles.title}> {defaultContact ? 'Edit contact' : 'Create new contact'} </Text>
        <Text style={styles.paragraph}> Name </Text>
        <TextInput
          style={styles.textInput}
          autoFocus
          label="Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <Text style={styles.paragraph}> Phone Number </Text>
        <TextInput
          style={styles.textInput}
          autoFocus
          label="Phone number"
          value={phoneNumber}
          onChangeText={text => setNumber(text)}
        />
        <Text style={styles.paragraph}> Photo </Text>
        <TextInput
          style={styles.textInput}
          autoFocus
          label="Photo"
          value={photo}
          placeholder="Photo Url"
          placeholderTextColor={darkerBlue}
          onChangeText={text => setPhoto(text)}
        />
        <TouchableHighlight style={styles.button} onPress={() => takePhoto()}>
          <Text style={styles.paragraph} >Take Photo</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => selectPhoto()}>
          <Text style={styles.paragraph} >Photo Library</Text>
        </TouchableHighlight>
        <View styleName="horizontal" style={styles.toolbar}>
          <TouchableHighlight style={styles.cancelButton} onPress={closeModal}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.submitButton} onPress={handleConfirm}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  )
}

ContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  defaultBoard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    photo: PropTypes.string
  }),
  image: PropTypes.shape({
    file: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string
  }),
  takePhoto: PropTypes.func.isRequired,
  selectPhoto: PropTypes.func.isRequired,
  submitModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired, 
}

export default ContactModal
