import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  activeScreen: {
    color: 'green',
  },
  notActiveScreen: {
    color: 'black',
  },
  navBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 2,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    borderColor: '#16a34a',
    paddingVertical: 2,
    height: 80,
  },
  pressableContainer: {
    width: '20%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainPressable: {
    position: 'relative',
    bottom: 50,
  },
  imageStyling: {
    width: 100,
    height: 100,
  },
  textStyling: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
  },
  text: {
    color: 'black',
    fontSize: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
