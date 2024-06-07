import React, {useEffect} from 'react';
import {Pressable, SafeAreaView, ScrollView, Text} from 'react-native';
import Header from '../../components/Header/Header.tsx';
import AuthentificationNavigation from '../../components/AuthentificationNavigation/AuthentificationNavigation.tsx';
import NavBar from '../../components/NavBar/NavBar.tsx';
import styles from './ConnexionStyle.tsx';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import connexionValidationSchema from './ConnexionValidation.tsx';
import CustomEmailInput from '../../components/Inputs/CustomEmailInput/CustomEmailInput.tsx';
import CustomPasswordInput from '../../components/Inputs/CustomPasswordInput/CustomPasswordInput.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../services/authentication/AuthenticationAction.ts';
import {AppDispatch, RootState} from '../../store.ts';
import NavigationType from '../../routes/NavigationType.ts';

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userinfo = useSelector((state: RootState) => state.auth.connected);
  const navigation = useNavigation<NavigationType>();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(connexionValidationSchema),
  });

  useEffect(() => {
    if (userinfo) {
      navigation.navigate('Accueil');
    }
  }, [userinfo, navigation]);

  const onSubmit = async (data: any) => {
    try {
      await dispatch(login(data));

      // Handle successful login (e.g., navigate to a different screen)
    } catch (error) {
      // Handle login error (e.g., display user-friendly error message)
      console.error('Login error:', error); // Log for debugging purposes (remove in production)
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header title="Connexion" />
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <AuthentificationNavigation />
        <CustomEmailInput
          name={'email'}
          control={control}
          placeholder="Email"
        />
        <CustomPasswordInput
          name={'password'}
          control={control}
          placeholder={'Mot de passe'}
        />
        <Pressable onPress={() => navigation.navigate('MDPOublier')}>
          <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
        </Pressable>
        <Pressable style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.textButton}>Se connecter</Text>
        </Pressable>
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
};

export default Login;
