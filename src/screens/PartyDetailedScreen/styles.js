import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  dateContainer: {
    backgroundColor: '#404040',
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute',
    left: 10,
    right: 0,
    top: 40,
    zIndex: 1,
  },
  dateText: {
    color: '#fff',
    fontSize: 14,
  },
  priceContainer: {
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#fff',
    left: 220,
    right: 0,
    top: 40,
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  ticketContainer: {
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#fff',
    left: 10,
    right: 0,
    top: 200,
  },
  ticketText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginVertical: 20,
  },
});

export default styles;
