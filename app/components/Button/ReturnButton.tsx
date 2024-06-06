import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {useNavigation} from '@react-navigation/native';

const ReturnButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.returnButton} onPress={() => navigation.goBack()}>
      <FontAwesomeIcon size={40} style={styles.Icon} icon={faChevronLeft} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  returnButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    width: 70,
    height: 70,
    zIndex: 10,
  },
  Icon: {
    color: 'white',
  },
});

export default ReturnButton;
