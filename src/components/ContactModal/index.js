import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Text, TextInput, View, TouchableHighlight } from 'react-native'
import Modal from '../Modal'

const ContactModal = ({
  isOpen,
  defaultContact,
  selectPhoto,
  submitModal,
  closeModal
}) => {
  const [name, setName] = useState(defaultContact?.name || '')
  const [phoneNumber, setNumber] = useState(defaultContact?.number || '')
  const [image, setImage] = useState(defaultContact?.image || '')

  useEffect(() => {
    if (defaultContact) {
      setName(defaultContact.name || '')
      setNumber(defaultContact.number || '')
      setImage(defaultContact.image || '')
    } else {
      setName('')
      setNumber('')
      setImage('')
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
        {/* <Text style={styles.paragraph}> Image </Text>
        <TextInput
          style={styles.textInput}
          autoFocus
          label="Image"
          value={image}
          onChangeText={text => setImage(text)}
        /> */}
        <Text style={styles.paragraph}> or </Text>
        <TouchableHighlight style={styles.button} onPress={() => selectPhoto()}>
          <Text style={styles.paragraph} >Choose a file</Text>
        </TouchableHighlight>
        <View styleName="horizontal" style={styles.toolbar}>
          <TouchableHighlight style={styles.cancelButton} onPress={closeModal}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.submitButton} onPress={() => submitModal(name, phoneNumber, image)}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  )
}

export default ContactModal
