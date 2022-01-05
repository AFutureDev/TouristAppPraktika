import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
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
    color: 'black',
  },
});

export default styles;
