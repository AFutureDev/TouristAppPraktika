import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
  },
  dateTextContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 10,
    zIndex: 1,
    backgroundColor: '#404040',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 30,
    borderRadius: 5,
  },
  dateText: {
    color: '#eee',
    fontSize: 12,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
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
    color: 'black',
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#000',
  },
});

export default styles;
