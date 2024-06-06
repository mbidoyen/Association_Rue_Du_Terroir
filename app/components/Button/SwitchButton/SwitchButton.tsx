import React, {FC, useState} from 'react';
import {Switch, Text, View} from 'react-native';
import styles from './SwitchButtonStyle.tsx';

type SwitchButtonType = {
  label: string;
  onChange: (newValue: boolean) => void;
};

const SwitchButton: FC<SwitchButtonType> = ({label, onChange}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        style={styles.switch}
        trackColor={{false: '#767577', true: '#43B175'}}
        thumbColor={isEnabled ? '#43B175' : '#767577'}
        ios_backgroundColor={'#3e3e3e'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SwitchButton;
