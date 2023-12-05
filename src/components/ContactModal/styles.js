import { StyleSheet } from 'react-native'
import { darkerBlue, paleCornflowerBlue, stTropaz } from '../../styles/colors'

export default StyleSheet.create({
  title: {
    textAlign: 'center',
    paddingBottom: 10,
    fontWeight: 'bold',
    fontSize: 15,
    color: stTropaz
  },
  paragraph: {
    fontSize: 13,
    color: darkerBlue
  },
  textInput: {
    padding: 5,
    marginBottom: 2,
    borderRadius: 5,
    borderColor: paleCornflowerBlue,
    borderWidth: 2
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 13,
    color: 'white'
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  button: {
    padding: 3,
    borderRadius: 5,
    borderColor: paleCornflowerBlue,
    borderWidth: 2
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    width: 70
  },
  submitButton: {
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 5,
    width: 70
  }
})
