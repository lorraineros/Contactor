import { StyleSheet } from 'react-native';
import { stTropaz } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paragraph: {
    padding: 15,
    fontSize: 20,
    color: stTropaz
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    fontSize: 20,
    color: stTropaz
  }
});
