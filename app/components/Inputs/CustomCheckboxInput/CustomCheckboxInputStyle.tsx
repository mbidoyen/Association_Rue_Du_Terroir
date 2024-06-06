import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    width: '95%',
  },

  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkboxInput: {
    transform: [{scaleX: 1.5}, {scaleY: 1.5}],
    marginRight: 5,
  },

  textLabel: {
    width: '90%',
    fontSize: 14,
  },
});

export default styles;
