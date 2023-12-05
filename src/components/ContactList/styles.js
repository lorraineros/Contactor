import { StyleSheet } from 'react-native';
import { stTropaz } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start'
  },
  paragraph: {
    padding: 50,
    fontSize: 20,
    color: stTropaz
  }
});
