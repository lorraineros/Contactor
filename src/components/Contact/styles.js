import { Dimensions, StyleSheet } from 'react-native';
import { darkerBlue, paleCornflowerBlue, stTropaz } from '../../styles/colors';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: winWidth - 50,
    paddingLeft: 10,
    borderRadius: 5,
    borderColor: darkerBlue,
    borderWidth: 2,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start'
  },
  title: {
    paddingLeft: 20,
    fontSize: 34,
    fontWeight: 'bold',
    color: stTropaz
  },
  image: {
    width: 100,
    height: 100
  }
});
