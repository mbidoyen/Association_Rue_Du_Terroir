import {z} from 'zod';

const passwordRegex = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])^.+$/,
);

const connexionValidationSchema = z.object({
  email: z.string().email('Veuillez entrer une adresse email valide'),
  password: z.string({required_error: 'Password is required'}),
  // .regex(passwordRegex, {message: "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial"}),
});

export default connexionValidationSchema;
