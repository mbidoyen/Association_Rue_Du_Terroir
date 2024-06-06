import React, {FC} from 'react';
import {Control, FieldValue, useController} from 'react-hook-form';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './CustomCheckboxInputStyle.tsx';

type CustomCheckboxInputProps = {
  name: string;
  control: Control<FieldValue<any>>;
  label: string;
};

const CustomCheckboxInput: FC<CustomCheckboxInputProps> = ({
  control,
  name,
  label,
}) => {
  const {
    field: {onChange, value},
    fieldState: {error},
  } = useController({
    control,
    name,
    defaultValue: false,
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkboxInput}
          disabled={false}
          value={value}
          onValueChange={newValue => onChange(newValue)}
        />
        <Text style={styles.textLabel}>{label}</Text>
      </View>
      {error && <Text>{String(error.message)}</Text>}
    </View>
  );
};

export default CustomCheckboxInput;
