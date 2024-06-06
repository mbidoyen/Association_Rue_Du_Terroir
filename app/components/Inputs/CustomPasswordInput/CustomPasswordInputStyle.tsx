import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },

  inputContainer: {
    borderWidth: 1,
    borderColor: '#43B175',
    borderRadius: 10,
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    width: '80%',
    padding: 10,
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  iconContainer: {
    paddingVertical: 5,
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
