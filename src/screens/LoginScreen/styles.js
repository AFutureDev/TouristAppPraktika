import { StyleSheet, useWindowDimensions } from 'react-native';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: '70%',
    maxWidth: 100,
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
    borderRadius: 10,
  },
  orText: {
    marginVertical: 30,
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  btnContainer: {
    backgroundColor: '#e4e4e4',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
  },
  arbaText: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFb: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 10,
  },
  textGoogle: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 10,
  },
  colorBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
