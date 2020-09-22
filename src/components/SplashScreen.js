import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';


const SplashScreen = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            resizeMode='stretch'
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.title}>Heading to the mountains?</Text>
          <Text style={styles.text}>Sign in</Text>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => alert('clicked')}>
              <LinearGradient
                colors={['#352e5d', '#200d3d']}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Get Started</Text>
                <MaterialCommunityIcons
                  name='account-arrow-right'
                  color='#fff'
                  size={18}
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
};

export default SplashScreen;

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#352e5d'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#352e5d',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      flexDirection: 'row'
  },
  textSign: {
      marginRight: 4,
      color: '#fff',
      fontWeight: 'bold'
  }
});