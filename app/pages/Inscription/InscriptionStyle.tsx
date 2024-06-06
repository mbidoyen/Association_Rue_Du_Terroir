import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollViewStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
    paddingBottom: 100,
  },

  doubleInputContainer: {
    width: '47%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },

  submitButton: {
    width: '95%',
    backgroundColor: '#43B175',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },

  textButton: {
    width: '100%',
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },

  fileContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
});

export default styles;
