import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: '#e4e4e4',
    width: '100%',
    height: 60,
    marginLeft: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    //backgroundColor: '#e4e4e4',
  },
  restItem: {
    marginLeft: 50,
  },
  isVisitedContainer: {
    backgroundColor: '#e4e4e4',
  },
});

export default styles;
