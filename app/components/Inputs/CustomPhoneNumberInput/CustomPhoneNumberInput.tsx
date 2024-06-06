import {Control, Controller, FieldValue} from 'react-hook-form';
import React, {FC} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from '../CustomTextInput/CustomTextInputStyle.tsx';

type CustomPhoneNumberInputType = {
  name: string;
  control: Control<FieldValue<any>>;
  placeholder: string;
};

const CustomPhoneNumberInput: FC<CustomPhoneNumberInputType> = ({
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
            inputMode="tel"
            style={styles.input}
            placeholderTextColor="#AEABAB"
          />
          {error && <Text>{String(error.message)}</Text>}
        </View>
      )}
    />
  );
};

export default CustomPhoneNumberInput;
