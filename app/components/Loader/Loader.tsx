import {ActivityIndicator, View} from 'react-native';

const Loader = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <ActivityIndicator size={100} color={'#16a34a'} />
      </View>
    </View>
  );
};

export default Loader;
