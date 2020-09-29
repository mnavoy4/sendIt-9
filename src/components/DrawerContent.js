import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AuthContext } from './context';



export function DrawerContent(props){

  const { signOut } = useContext(AuthContext)

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={require('../assets/images/avatar.png')}
                size={60}
              />
              <View style={{ marginLeft: 25, flexDirection: "column" }}>
                <Title style={styles.title}>Michael Navoy</Title>
                <Caption style={styles.caption}>mnavoy4@gmail.com</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>Driver Rating</Paragraph>
                <Caption style={styles.caption}>4.9 / 5</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>Rider Rating</Paragraph>
                <Caption style={styles.caption}>4.8 / 5</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name='car'
                  color={color}
                  size={size}
                  onPress={() => {}}
                />
              )}
              label='Find Ride'
              onPress={() => props.navigation.navigate('Find Ride')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name='seat-recline-normal'
                  color={color}
                  size={size}
                />
              )}
              onPress={() => props.navigation.navigate('Post Ride')}
              label='Post Ride'
            />
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name='account'
                  color={color}
                  size={size}
                />
              )}
              onPress={() => props.navigation.navigate('Profile')}
              label='Profile'
            />
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name='settings'
                  color={color}
                  size={size}
                />
              )}
              onPress={() => props.navigation.navigate('Settings')}
              label='Settings'
            />
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name='account-check'
                  color={color}
                  size={size}
                />
              )}
              onPress={() => props.navigation.navigate('SupportScreen')}
              label='Support'
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <MaterialCommunityIcons
              name='logout'
              color={color}
              size={size}
            />
          )}
          label='Sign Out'
          onPress={() => {signOut()}}
        />
      </Drawer.Section>
    </View>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 11,
    lineHeight: 11,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});