import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    width: '80%',
    gap: 20,
  },

  image: {
    width: '30%',
    height: '20%',
    objectFit: 'scale-down',
  },

  messageInfo: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },

  contact: {
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    padding: 10,
  },

  formulaire: {},
});

export default styles;
