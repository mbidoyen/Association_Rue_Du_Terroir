import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#16a34a',
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 10,
  },

  HeaderHomeContainer: {
    width: '50%',
    alignItems: 'center',
  },

  logo: {
    width: 200,
    height: 200,
    objectFit: 'scale-down',
    backgroundColor: 'white',
    borderRadius: 25,
  },

  logoText: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
  },

  logoTextHomeCity: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },

  HeaderTitleContainer: {
    width: '100%',
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titleStyling: {
    width: '100%',
    marginVertical: 10,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});

export default styles;
