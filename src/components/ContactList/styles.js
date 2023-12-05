import { Dimensions, StyleSheet } from 'react-native';
import { darkerBlue, stTropaz } from '../../styles/colors';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
    padding: 10,
  },
  searchInput: {
    width: winWidth - 50,
    height: 40,
    borderRadius: 10,
    borderColor: darkerBlue,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  paragraph: {
    padding: 50,
    fontSize: 20,
    color: stTropaz,
  },
});
