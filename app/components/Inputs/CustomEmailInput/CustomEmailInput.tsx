import {Text, TextInput, View} from 'react-native';
import {Control, Controller, FieldValue} from 'react-hook-form';
import React, {FC} from 'react';
import styles from './CustomEmailInputStyle.tsx';

type CustomEmailInputType = {
  name: string;
  control: Control<FieldValue<any>>;
  placeholder: string;
};

const CustomEmailInput: FC<CustomEmailInputType> = ({
  name,
  control,
  placeholder,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <View style={styles.mainContainer}>
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            inputMode="email"
            style={styles.input}
            placeholderTextColor="#AEABAB"
          />
          {error && <Text>{error.message}</Text>}
        </View>
      )}
    />
  );
};

export default CustomEmailInput;
