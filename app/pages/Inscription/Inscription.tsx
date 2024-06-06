import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Header from '../../components/Header/Header.tsx';
import AuthentificationNavigation from '../../components/AuthentificationNavigation/AuthentificationNavigation.tsx';
import CustomSelectInput from '../../components/Inputs/SelectInput/CustomSelectInput.tsx';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import inscriptionValidationSchema from './InscriptionFormValidation.tsx';
import CustomTextInput from '../../components/Inputs/CustomTextInput/CustomTextInput.tsx';
import styles from './InscriptionStyle.tsx';
import CustomFileInput from '../../components/Inputs/CustomFileInput/CustomFileInput.tsx';
import CustomNumberInput from '../../components/Inputs/CustomNumberInput/CustomNumberInput.tsx';
import CustomEmailInput from '../../components/Inputs/CustomEmailInput/CustomEmailInput.tsx';
import CustomPasswordInput from '../../components/Inputs/CustomPasswordInput/CustomPasswordInput.tsx';
import SwitchButton from '../../components/Button/SwitchButton/SwitchButton.tsx';
import {
  getAddressId,
  getAllEntry,
  getApartmentsForFloor,
  getFloorForEntries,
} from './IAddressValues.tsx';
import {
  civilityValues,
  defaultValuesRegisterForm,
} from './FormDefaultValues.tsx';
import {FileInformation} from '../../components/Inputs/CustomFileInput/ICustomFileInput.tsx';
import CustomCheckboxInput from '../../components/Inputs/CustomCheckboxInput/CustomCheckboxInput.tsx';
import InscriptionService from '../../services/inscription/InscriptionService.tsx';
import NavBar from '../../components/NavBar/NavBar.tsx';
import Loader from '../../components/Loader/Loader.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store.ts';
import {fetchAddresses} from '../../services/address/addressActions.ts';

const Register = () => {
  const [hasGarage, setHasGarage] = useState(false);
  const [entry, setEntry] = useState<string>();
  const [floor, setFloor] = useState();
  const [apartment, setApartment] = useState();
  const [imageFile, setImageFile] = useState<FileInformation>();
  const {control, handleSubmit} = useForm({
    defaultValues: defaultValuesRegisterForm,
    resolver: zodResolver(inscriptionValidationSchema),
  });
  const dispatch = useDispatch<AppDispatch>();
  const addresses = useSelector(
    (state: RootState) => state.addresses.addresses,
  );

  useEffect(() => {
    if (addresses.length === 0) {
      dispatch(fetchAddresses());
    }
  }, [dispatch, addresses]);

  const handleHasGarage = (newValue: boolean) => {
    setHasGarage(newValue);
  };

  const onSubmit = (data: any) => {
    data.address_id = getAddressId(
      addresses,
      String(entry),
      String(floor),
      String(apartment),
    );
    InscriptionService.save(data)
      .then((result: any) => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header title="Inscription" />
      {addresses.length !== 0 ? (
        <ScrollView contentContainerStyle={styles.scrollViewStyle}>
          <AuthentificationNavigation />
          <CustomSelectInput
            values={Array.from(civilityValues)}
            label={'Civilité'}
            control={control}
            name={'civility'}
            placeholder={'Civilité'}
          />

          <CustomTextInput
            name="lastname"
            control={control}
            placeholder="Nom"
          />
          <CustomTextInput
            name="firstname"
            control={control}
            placeholder="Prénom"
          />

          <View style={styles.doubleInputContainer}>
            <CustomSelectInput
              label={'Entrée'}
              control={control}
              name={'entry'}
              placeholder={'Entrée'}
              values={getAllEntry(addresses)}
              setState={setEntry}
            />
            <CustomSelectInput
              label={'Etage'}
              values={getFloorForEntries(addresses, entry)}
              control={control}
              name={'floor'}
              placeholder={'Etage'}
              setState={setFloor}
            />
          </View>
          <View style={styles.doubleInputContainer}>
            <CustomSelectInput
              values={getApartmentsForFloor(addresses, String(floor))}
              label={'Appartement'}
              control={control}
              name={'apartment'}
              placeholder={'Appartement'}
              setState={setApartment}
            />
            <CustomNumberInput
              name="residents"
              control={control}
              placeholder="Nb. Résident(s)"
            />
          </View>
          <CustomEmailInput
            name={'email'}
            control={control}
            placeholder={'Email'}
          />

          <CustomNumberInput
            maxLength={10}
            name={'phone'}
            control={control}
            placeholder={'N° de téléphone'}
          />

          <CustomPasswordInput
            name={'password'}
            control={control}
            placeholder={'Mot de passe'}
          />
          <CustomPasswordInput
            name={'confirmPassword'}
            control={control}
            placeholder={'Confirmation du mot de passe'}
          />

          <SwitchButton
            label={"Disposez-vous d'un garage ?"}
            onChange={handleHasGarage}
          />

          {hasGarage ? (
            <CustomNumberInput
              name={'garage_number'}
              control={control}
              placeholder={'N° du garage'}
            />
          ) : null}
          <View style={styles.fileContainer}>
            <Image
              style={styles.image}
              source={
                imageFile
                  ? {uri: imageFile?.uri}
                  : require('../../../assets/images/logo_rond.png')
              }
            />
            <View style={{width: '75%'}}>
              <CustomFileInput
                setState={setImageFile}
                allowMultiple={false}
                control={control}
                name="profil_picture"
              />
            </View>
          </View>
          <CustomCheckboxInput
            name={'cgu'}
            control={control}
            label={"J'accepte les termes et conditions de l'association."}
          />
          <CustomCheckboxInput
            name={'newsletter'}
            control={control}
            label={
              "J’accepte de recevoir des informations et des mises à jour de l'association par e-mail."
            }
          />
          <Pressable
            style={styles.submitButton}
            onPress={handleSubmit(onSubmit)}>
            <Text style={styles.textButton}>{"S'inscrire"}</Text>
          </Pressable>
        </ScrollView>
      ) : (
        <Loader />
      )}
      <NavBar />
    </SafeAreaView>
  );
};

export default Register;
