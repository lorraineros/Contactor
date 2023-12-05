import { StyleSheet } from 'react-native';
import { paleCornflowerBlue, stTropaz } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start'
  },
  paragraph: {
    paddingTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: stTropaz
  },
  image: {
    borderRadius: 75,
    borderColor: paleCornflowerBlue,
    borderWidth: 3,
    width: 150,
    height: 150
  }
});
