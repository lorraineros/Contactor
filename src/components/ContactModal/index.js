import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Text, TextInput, View, TouchableHighlight } from 'react-native'
import Modal from '../Modal'

const ContactModal = ({
  isOpen,
  defaultContact,
  submitModal,
  closeModal
}) => {
  console.log(defaultContact);
  const [name, setName] = useState(defaultContact?.name || '')
  const [phoneNumber, setNumber] = useState(defaultContact?.phoneNumber || '')
  const [photo, setPhoto] = useState(defaultContact?.photo || '')

  useEffect(() => {
    if (defaultContact) {
      setName(defaultContact.name || '')
      setNumber(defaultContact.phoneNumber || '')
      setPhoto(defaultContact.photo || '')
    } else {
      setName('')
      setNumber('')
      setPhoto('')
    }
  }, [defaultContact])

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
          onChangeText={text => setPhoto(text)}
        />
        <View styleName="horizontal" style={styles.toolbar}>
          <TouchableHighlight style={styles.cancelButton} onPress={closeModal}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.submitButton} onPress={() => submitModal(name, phoneNumber, photo)}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  )
}

export default ContactModal
