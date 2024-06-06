import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '93%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  label: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    paddingVertical: 10,
  },

  switch: {
    transform: [{scaleX: 1.5}, {scaleY: 1.5}],
  },
});

export default styles;
