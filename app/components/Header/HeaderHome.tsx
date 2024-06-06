import React from 'react';
import styles from './HeaderStyle';
import {Image, Text, View} from 'react-native';

function HeaderHome() {
  return (
    <View style={styles.HeaderHomeContainer}>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/logo-asso.png')}
        alt={"logo Association du Terroir Villeneuve d'Ascq"}
      />
      <Text style={styles.logoText}>Rue du Terroir</Text>
      <Text style={styles.logoTextHomeCity}>{"Villeneuve d'Ascq"}</Text>
    </View>
  );
}

export default HeaderHome;
