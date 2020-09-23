import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;

const createRideStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    backgroundColor: '#ce3624',
    marginHorizontal: 0,
    width: width
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
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