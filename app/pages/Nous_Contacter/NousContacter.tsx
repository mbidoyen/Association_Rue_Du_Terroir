import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header.tsx';
import styles from './NousContacterStyle.tsx';
import NavBar from '../../components/NavBar/NavBar.tsx';

const NousContacter = () => {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <Header title="Nous contacter" />
      <Image
        style={styles.image}
        source={require('../../../assets/images/logo-asso.png')}
      />
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <Text style={styles.messageInfo}>
          Contacter l'association des locataires rue du terroir Villeneuve
          d'ascq
        </Text>

        <View style={styles.contact}>
          <Text>11/23 rue du terroir, 59650, Villeneuve d'ascq</Text>
          <Text>asso@gmail.com</Text>
          <Text>+33 (0) 3 20 01 01 01</Text>
          <Text>Du lundi au vendredi, de 9h à 17h</Text>
        </View>

        <View />
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
};

export default NousContacter;
