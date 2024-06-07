import {Pressable, SafeAreaView, Text, View} from 'react-native';
import Header from '../../components/Header/Header.tsx';
import {
  faArrowRightFromBracket,
  faChevronRight,
  faGear,
  faHandHoldingDollar,
  faHandshake,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './DashBoardStyle.ts';
import {faContactCard} from '@fortawesome/free-solid-svg-icons/faContactCard';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store.ts';
import {logout} from '../../services/authentication/AuthenticationAction.ts';

type Dashboard = {
  navigate: (value: string) => void;
};

const DashBoardUser = () => {
  const navigation = useNavigation<Dashboard>();
  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector((state: RootState) => state.auth);
  const dashBoardUser = [
    {text: 'Mes informations', icon: faGear, navigate: ''},
    {text: 'Mon adhésion', icon: faHandshake, navigate: ''},
    {text: 'Nous contacter', icon: faContactCard, navigate: 'ContactezNous'},
    {text: "Besoin d'aide ?", icon: faInfoCircle, navigate: ''},
    {text: 'Faire un don', icon: faHandHoldingDollar, navigate: ''},
    {text: 'Se déconnecter', icon: faArrowRightFromBracket, navigate: 'logout'},
  ];

  useEffect(() => {
    if (!authState.connected) {
      navigation.navigate('Accueil');
    }
  }, [authState]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header title={'Dashboard'} />
      <View style={styles.mainContainer}>
        {dashBoardUser.map((value, index) => (
          <Pressable
            key={index}
            style={styles.pressableContainer}
            onPress={() =>
              value.navigate === 'logout' && authState.token
                ? dispatch(logout(authState.token))
                : navigation.navigate(value.navigate)
            }>
            <View style={styles.viewLeftSidePressable}>
              <FontAwesomeIcon
                style={styles.leftIcon}
                size={25}
                icon={value.icon}
              />
              <Text style={styles.text}>{value.text}</Text>
            </View>
            <FontAwesomeIcon
              style={styles.rightIcon}
              size={20}
              icon={faChevronRight}
            />
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default DashBoardUser;
