import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '95%',
    backgroundColor: 'white',
  },

  dropdown: {
    height: 50,
    borderColor: '#43B175',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },

  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: -12,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 12,
  },

  placeholderStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#AEABAB',
    fontStyle: 'italic',
  },

  selectedTextStyle: {
    fontSize: 14,
  },

  itemTextStyles: {
    fontSize: 14,
  },
});

export default styles;
