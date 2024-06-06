import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import NavBar from '../../components/NavBar/NavBar.tsx';
import Header from '../../components/Header/Header.tsx';

const HomePage = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header title={'Home page'} />
      <ScrollView />
      <NavBar />
    </SafeAreaView>
  );
};

export default HomePage;
