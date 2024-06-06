import React from 'react';
import styles from './HeaderStyle';
import HeaderProps from './HeaderProps';

import {View} from 'react-native';
import HeaderHome from './HeaderHome';
import HeaderTitle from './HeaderTitle';
import {useRoute} from '@react-navigation/native';

function Header(props: HeaderProps) {
  const route = useRoute();
  let isHomePage = route.name === 'Accueil';

  return (
    <View style={styles.mainContainer}>
      {isHomePage ? <HeaderHome /> : <HeaderTitle title={props.title} />}
    </View>
  );
}

export default Header;
