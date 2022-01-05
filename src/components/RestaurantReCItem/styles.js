import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateContainer: {
    backgroundColor: '#404040',
    width: 90,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute',
    left: -10,
    right: 0,
    top: 5,
    zIndex: 1,
  },
  dateText: {
    color: '#fff',
    fontSize: 14,
  },
  image: {
    width: 150,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    overflow: 'hidden',
  },
  textStyle: {
    marginTop: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  subText: {
    fontWeight: 'bold',
  },
});

export default styles;
