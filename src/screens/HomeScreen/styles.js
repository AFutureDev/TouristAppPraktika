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
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  isVisitedText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 14,
  },
  notVisitedContainer: {
    marginLeft: 100,
  },
});

export default styles;
