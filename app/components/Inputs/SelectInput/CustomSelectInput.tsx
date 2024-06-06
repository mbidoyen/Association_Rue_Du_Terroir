import React, {FC, SetStateAction, useState} from 'react';
import {Control, Controller, FieldValue} from 'react-hook-form';
import {Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import styles from './CustomSelectInputStyle.tsx';

type SelectValues = {
  name: string;
  label: string;
  values: {
    label: string;
    value: string;
  }[];
  control: Control<FieldValue<any>>;
  placeholder: string;
  setState?: SetStateAction<any>;
};

const CustomSelectInput: FC<SelectValues> = ({
  values,
  label,
  control,
  name,
  placeholder,
  setState,
}) => {
  const [value] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: '#43B175'}]}>
          {label}
        </Text>
      );
    }
    return null;
  };
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, value}, fieldState: {error}}) => (
        <View style={styles.container}>
          {renderLabel()}
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: '#43B175'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            itemTextStyle={styles.itemTextStyles}
            activeColor={'#43B175'}
            data={values}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={placeholder}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              onChange(item.value);
              if (setState) {
                setState(item.value);
              }
            }}
          />
          {error && <Text>{String(error.message)}</Text>}
        </View>
      )}
    />
  );
};

export default CustomSelectInput;
