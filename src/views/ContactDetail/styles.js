
import { StyleSheet } from 'react-native';
import { paleCornflowerBlue, stTropaz } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
  detailsContainer: {
    marginTop: 20,
  },
  detailItem: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    color: paleCornflowerBlue,
  },
  paragraph: {
    paddingTop: 5,
    fontSize: 22,
    fontWeight: 'bold',
    color: stTropaz,
  },
  text: {
    padding: 15,
    fontSize: 20,
    color: stTropaz
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    fontSize: 20
  },
  image: {
    borderRadius: 75,
    borderColor: paleCornflowerBlue,
    borderWidth: 3,
    width: 150,
    height: 150,
  },
});
