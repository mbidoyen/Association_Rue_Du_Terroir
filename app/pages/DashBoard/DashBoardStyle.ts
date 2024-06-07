import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 'auto',
  },
  pressableContainer: {
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 5,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EDE7E7',
    borderRadius: 15,
  },
  viewLeftSidePressable: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
  rightIcon: {
    marginHorizontal: 10,
  },
});

export default styles;
