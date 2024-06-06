import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  notActivePressable: {
    width: '50%',
    borderBottomWidth: 1,
    padding: 10,
  },
  activePressable: {
    width: '50%',
    borderBottomWidth: 3,
    borderColor: '#43B175',
    padding: 10,
  },
  notActiveText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'normal',
    color: 'gray',
    textTransform: 'uppercase',
  },
  activeText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#43B175',
    textTransform: 'uppercase',
  },
});

export default styles;
