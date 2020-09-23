import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;

const createRideStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollView: {
    backgroundColor: '#ce3624',
    marginHorizontal: 0,
    width: width
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 25,
    color: '#fff'
  },
  signIn: {
    width: '95%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10
  },
  textSign: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 20,
  },
  form: {
    backgroundColor: '#ce3624'
  },
  numericInputItem: {
    justifyContent: "space-around"
  }
});

export default createRideStyles;