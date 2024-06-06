import {Pressable, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import styles from './AuthentificationNavigationStyle.tsx';

type SwitchPage = {
  navigate: (value: string) => void;
};

const AuthentificationNavigation = () => {
  const route = useRoute();
  const navigation = useNavigation<SwitchPage>();

  return (
    <View style={styles.container}>
      <Pressable
        style={
          route.name === 'Connexion'
            ? styles.activePressable
            : styles.notActivePressable
        }
        onPress={() => navigation.navigate('Connexion')}>
        <Text
          style={
            route.name === 'Connexion'
              ? styles.activeText
              : styles.notActiveText
          }>
          {'Connexion'}
        </Text>
      </Pressable>
      <Pressable
        style={
          route.name === 'Inscription'
            ? styles.activePressable
            : styles.notActivePressable
        }
        onPress={() => navigation.navigate('Inscription')}>
        <Text
          style={
            route.name === 'Inscription'
              ? styles.activeText
              : styles.notActiveText
          }>
          {'Inscription'}
        </Text>
      </Pressable>
    </View>
  );
};

export default AuthentificationNavigation;
