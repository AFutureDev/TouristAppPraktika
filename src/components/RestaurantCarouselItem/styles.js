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
    fontSize: 12,
  },
});

export default styles;
