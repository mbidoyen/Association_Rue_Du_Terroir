import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollViewStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
  },
  forgotPassword: {
    padding: 10,
    color: '#43B175',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#43B175',
    width: '95%',
    borderRadius: 10,
    padding: 20,
  },

  textButton: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'italic',
    color: 'white',
  },
});

export default styles;
