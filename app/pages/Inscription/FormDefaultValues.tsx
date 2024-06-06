export const defaultValuesRegisterForm = {
  civility: '',
  lastname: '',
  firstname: '',
  entry: '',
  floor: '',
  apartment: '',
  residents: undefined,
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  garage_number: '',
  profil_picture: undefined,
  cgu: false,
  newsletter: false,
};

export const civilityValues = new Set([
  {label: 'Monsieur', value: 'Monsieur'},
  {label: 'Madame', value: 'Madame'},
]);
