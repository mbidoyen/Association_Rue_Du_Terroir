import {Text, TextInput, View} from 'react-native';
import styles from '../CustomTextInput/CustomTextInputStyle.tsx';
import {Control, Controller, FieldValue} from 'react-hook-form';
import React, {FC} from 'react';

type CustomNumberInputType = {
  name: string;
  control: Control<FieldValue<any>>;
  placeholder: string;
  maxLength?: number;
};

const CustomNumberInput: FC<CustomNumberInputType> = ({
  name,
  control,
  placeholder,
  maxLength,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <View style={styles.mainContainer}>
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            inputMode="numeric"
            style={styles.input}
            placeholderTextColor="#AEABAB"
            maxLength={maxLength}
          />
          {error && <Text>{String(error.message)}</Text>}
        </View>
      )}
    />
  );
};

export default CustomNumberInput;
