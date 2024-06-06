import {Text, View} from 'react-native';
import HeaderProps from './HeaderProps';
import ReturnButton from '../Button/ReturnButton';
import styles from './HeaderStyle';
import React from 'react';

const HeaderTitle = (props: HeaderProps) => {
  return (
    <View style={styles.HeaderTitleContainer}>
      <ReturnButton />
      <Text style={styles.titleStyling}>{props.title}</Text>
    </View>
  );
};

export default HeaderTitle;
