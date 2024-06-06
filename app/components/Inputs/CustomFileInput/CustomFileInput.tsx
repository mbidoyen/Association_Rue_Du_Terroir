import React, {FC, SetStateAction, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {Control, Controller, FieldValue} from 'react-hook-form';
import styles from './CustomFileInputStyle.tsx';
import RNFS from 'react-native-fs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUpload} from '@fortawesome/free-solid-svg-icons';
import {FileInformation} from './ICustomFileInput.tsx';

type CustomFileInputProps = {
  allowMultiple: boolean;
  name: string;
  control: Control<FieldValue<any>>;
  setState?: SetStateAction<any>;
};

const CustomFileInput: FC<CustomFileInputProps> = ({
  allowMultiple,
  control,
  name,
  setState,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<FileInformation>();
  const pickDocument = async (onChange: (file: FileInformation) => void) => {
    try {
      const [result] = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        allowMultiSelection: allowMultiple,
      });
      const fileContent = {
        uri: result.uri,
        type: result.type!,
        name: result.name!,
        size: result.size!,
        data: await RNFS.readFile(result.uri, 'base64'),
      };
      onChange(fileContent);
      setSelectedFiles(fileContent);
      setState(fileContent);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange}, fieldState: {error}}) => (
        <View>
          <Pressable
            style={styles.inputContainer}
            onPress={() => pickDocument(onChange)}>
            <Text
              numberOfLines={1}
              style={[styles.filenameContainer, styles.textStyle]}>
              {selectedFiles ? selectedFiles.name : 'Aucun fichier sélectionné'}
            </Text>

            <View style={styles.buttonContainer}>
              <FontAwesomeIcon size={20} style={styles.icon} icon={faUpload} />
              <Text
                numberOfLines={1}
                style={[styles.textStyle, {color: 'white', fontWeight: '500'}]}>
                {'Choisir un fichier'}
              </Text>
            </View>
          </Pressable>
          {error && <Text>{String(error.message)}</Text>}
        </View>
      )}
    />
  );
};

export default CustomFileInput;
