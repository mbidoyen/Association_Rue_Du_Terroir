import {Text, TextInput, View} from 'react-native';
import {Control, Controller, FieldValue} from 'react-hook-form';
import React, {FC} from 'react';
import styles from './CustomTextInputStyle.tsx';

type CustomTextInputType = {
  name: string;
  control: Control<FieldValue<any>>;
  placeholder: string;
};

const CustomTextInput: FC<CustomTextInputType> = ({
  name,
  control,
  placeholder,
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
            inputMode="text"
            style={styles.input}
            placeholderTextColor="#AEABAB"
          />
          {error && <Text>{String(error.message)}</Text>}
        </View>
      )}
    />
  );
};

export default CustomTextInput;
