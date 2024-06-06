import {Pressable, Text, TextInput, View} from 'react-native';
import {Control, Controller, FieldValue} from 'react-hook-form';
import React, {FC, useState} from 'react';
import styles from './CustomPasswordInputStyle.tsx';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

type CustomTextInputType = {
  name: string;
  control: Control<FieldValue<any>>;
  placeholder: string;
};

const CustomPasswordInput: FC<CustomTextInputType> = ({
  name,
  control,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <View style={styles.mainContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              inputMode="text"
              secureTextEntry={showPassword}
              style={styles.input}
              placeholderTextColor="#AEABAB"
            />
            <Pressable
              style={styles.iconContainer}
              onPress={() => setShowPassword(!showPassword)}>
              <FontAwesomeIcon
                size={40}
                icon={showPassword ? faEyeSlash : faEye}
              />
            </Pressable>
          </View>
          {error && <Text>{String(error.message)}</Text>}
        </View>
      )}
    />
  );
};

export default CustomPasswordInput;
