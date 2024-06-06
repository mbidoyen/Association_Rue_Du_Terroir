import {
  faHome,
  faInfoCircle,
  faRectangleList,
} from '@fortawesome/free-solid-svg-icons';
import {faContactCard} from '@fortawesome/free-solid-svg-icons/faContactCard';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, View, Image, Text} from 'react-native';

type NavBar = {
  navigate: (value: string) => void;
};

const NavBar = () => {
  const route = useRoute();
  const navigation = useNavigation<NavBar>();

  return (
    <View style={styles.navBarContainer}>
      <Pressable
        style={styles.pressableContainer}
        onPress={() => navigation.navigate('Accueil')}>
        <FontAwesomeIcon
          style={
            route.name === 'Accueil'
              ? styles.activeScreen
              : styles.notActiveScreen
          }
          size={50}
          icon={faHome}
        />
        <Text style={styles.text}>{'Accueil'}</Text>
      </Pressable>
      <Pressable
        style={styles.pressableContainer}
        onPress={() => navigation.navigate('Actualites')}>
        <FontAwesomeIcon
          style={
            route.name === 'Actualites'
              ? styles.activeScreen
              : styles.notActiveScreen
          }
          size={50}
          icon={faRectangleList}
        />
        <Text style={styles.text}>{'Actualités'}</Text>
      </Pressable>
      <Pressable
        style={styles.mainPressable}
        onPress={() => navigation.navigate('Connexion')}>
        <Image
          style={styles.imageStyling}
          source={require('../../../assets/images/logo_rond.png')}
        />
        <Text style={styles.textStyling}>{'Connexion'}</Text>
      </Pressable>
      <Pressable
        style={styles.pressableContainer}
        onPress={() => navigation.navigate('ContactezNous')}>
        <FontAwesomeIcon size={50} icon={faContactCard} />
        <Text style={styles.text}>{'Contact'}</Text>
      </Pressable>
      <Pressable style={styles.pressableContainer}>
        <FontAwesomeIcon size={50} icon={faInfoCircle} />
        <Text style={styles.text}>{'Informations'}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  activeScreen: {
    color: 'green',
  },
  notActiveScreen: {
    color: 'black',
  },
  navBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 2,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    borderColor: '#16a34a',
    paddingVertical: 2,
    height: 80,
  },
  pressableContainer: {
    width: '20%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainPressable: {
    position: 'relative',
    bottom: 50,
  },
  imageStyling: {
    width: 100,
    height: 100,
  },
  textStyling: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
  },
  text: {
    color: 'black',
    fontSize: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default NavBar;
