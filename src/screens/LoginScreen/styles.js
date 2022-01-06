import { StyleSheet, useWindowDimensions } from 'react-native';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: '70%',
    maxWidth: 200,
    maxHeight: 200,
  },
  logTextCont: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  logText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInpt: {
    justifyContent: 'center',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  btnContainer: {
    backgroundColor: '#e4e4e4',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 5,
  },
  regContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
