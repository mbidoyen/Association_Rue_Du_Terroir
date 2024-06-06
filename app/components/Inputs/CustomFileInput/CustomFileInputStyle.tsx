import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#43B175',
    borderRadius: 8,
    height: 60,
  },

  filenameContainer: {
    width: '50%',
    padding: 10,
  },

  buttonContainer: {
    width: '50%',
    fontWeight: 'bold',
    backgroundColor: '#43B175',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    color: 'white',
    marginRight: 10,
  },

  textStyle: {
    fontSize: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default styles;
