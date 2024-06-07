import {
  faHome,
  faInfoCircle,
  faPeopleRoof,
  faPersonShelter,
  faRectangleList,
} from '@fortawesome/free-solid-svg-icons';
import {faContactCard} from '@fortawesome/free-solid-svg-icons/faContactCard';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, Keyboard, Pressable, Text, View} from 'react-native';
import styles from './NavBarStyle.ts';
import {useSelector} from 'react-redux';
import {RootState} from '../../store.ts';
import NavigationType from '../../routes/NavigationType.ts';

const NavBar = () => {
  const route = useRoute();
  const navigation = useNavigation<NavigationType>();
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const isConnected = useSelector((state: RootState) => state.auth.connected);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  console.log(isConnected);
  return (
    <>
      {!isKeyboardVisible && (
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
            onPress={() =>
              navigation.navigate(isConnected ? 'Signalement' : 'Connexion')
            }>
            <Image
              style={styles.imageStyling}
              source={require('../../../assets/images/logo_rond.png')}
            />
            <Text style={styles.textStyling}>
              {isConnected ? 'Signalement' : 'Connexion'}
            </Text>
          </Pressable>
          <Pressable
            style={styles.pressableContainer}
            onPress={() =>
              navigation.navigate(isConnected ? 'Communaute' : 'ContactezNous')
            }>
            {isConnected ? (
              <FontAwesomeIcon size={50} icon={faPeopleRoof} />
            ) : (
              <FontAwesomeIcon size={50} icon={faContactCard} />
            )}

            <Text style={styles.text}>
              {isConnected ? 'Communauté' : 'Contact'}
            </Text>
          </Pressable>
          <Pressable
            style={styles.pressableContainer}
            onPress={() =>
              navigation.navigate(isConnected ? 'Profil' : 'Informations')
            }>
            {isConnected ? (
              <FontAwesomeIcon size={50} icon={faPersonShelter} />
            ) : (
              <FontAwesomeIcon size={50} icon={faInfoCircle} />
            )}
            <Text style={styles.text}>
              {isConnected ? 'Profil' : 'Informations'}
            </Text>
          </Pressable>
        </View>
      )}
    </>
  );
};

export default NavBar;
