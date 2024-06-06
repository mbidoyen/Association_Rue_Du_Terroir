import {z} from 'zod';

const passwordRegex = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])^.+$/,
);
const onlyTextCharactersAuthorized = new RegExp(/^[a-zA-Z]+$/);
const MAX_SIZE_ALLOWED = 2 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ['image/jpg', 'image/png', 'image/jpeg'];

interface File {
  uri: string;
  type: string;
  name: string;
  size: number;
}

const fileSchema = z
  .object({
    uri: z.string(),
    type: z.string(),
    name: z.string(),
    size: z.number(),
    data: z.string(),
  })
  .optional();
const isValidCivility = (value: string) => {
  const allowedValues = ['Monsieur', 'Madame'];
  return allowedValues.includes(value);
};

const inscriptionValidationSchema = z
  .object({
    civility: z.string().refine(isValidCivility, 'Civilité invalide'),
    firstname: z
      .string()
      .min(1, 'Veuillez indiquer votre prénom')
      .max(50, 'Le prénom ne peut pas dépasser 50 caractères')
      .regex(
        onlyTextCharactersAuthorized,
        'Le prénom ne peut contenir que des lettres',
      ),
    lastname: z
      .string()
      .min(1, 'Veuillez indiquer votre nom')
      .max(50, 'Le nom ne peut pas dépasser 50 caractères')
      .regex(
        onlyTextCharactersAuthorized,
        'Le nom ne peut contenir que des lettres',
      ),
    entry: z.string().min(1, "Veuillez indiquer votre N° d'entrée"),
    floor: z.string().min(1, "Veuillez indiquer le N° d'étage"),
    apartment: z.string().min(1, "Veuillez indiquer le N° d'appartement"),
    residents: z
      .string()
      .refine(
        value => !isNaN(Number(value)),
        'Ce champs ne peut comporter que des nombres',
      )
      .refine(
        value => !isNaN(Number(value)) && Number(value) >= 1,
        'Au moins un résident est requis',
      ),
    email: z
      .string()
      .email({message: 'Adresse email invalide'})
      .min(1, 'Veuillez saisir votre email'),
    phone: z
      .string()
      .min(10, 'Numéro de téléphone invalide')
      .max(10, 'Numéro de téléphone invalide')
      .refine(
        value => !isNaN(Number(value)),
        'Ce champs ne peut comporter que des nombres',
      )
      .optional(),
    password: z
      .string()
      .min(8, 'Le mot de passe doit avoir au moins 8 caractères')
      .regex(
        passwordRegex,
        'Doit contenir une MAJUSCULE, une minuscule, 1 chiffre et un caractères spécial',
      ),
    confirmPassword: z
      .string()
      .min(8, 'Le mot de passe doit avoir au moins 8 caractères')
      .regex(
        passwordRegex,
        'Doit contenir une MAJUSCULE, une minuscule, 1 chiffre et un caractères spécial',
      ),
    garage_number: z
      .string()
      .refine(
        value => !isNaN(Number(value)),
        'Ce champs ne peut comporter que des nombres',
      )
      .refine(
        value => !isNaN(Number(value)) && Number(value) >= 1,
        'Au moins un résident est requis',
      )
      .optional(),
    profil_picture: fileSchema
      .refine(
        (file: File | undefined) =>
          file ? ACCEPTED_FILE_TYPES.includes(file.type) : true,
        {message: 'Seul les fichiers .jpeg .jpg .png sont autorisés'},
      )
      .refine(
        (file: File | undefined) =>
          file ? MAX_SIZE_ALLOWED >= file.size : true,
        {
          message: `La taille du fichier doit être inférieure à ${
            MAX_SIZE_ALLOWED / (1024 * 1024)
          } Mo`,
        },
      ),
    cgu: z.boolean().refine((cgu: boolean) => cgu, {
      message: 'vous devez accepter les condition générales',
    }),
    newsletter: z.boolean().optional(),
  })
  .superRefine(({confirmPassword, password}, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Les mots de passes ne correspondent pas',
        path: ['confirmPassword'],
      });
      ctx.addIssue({
        code: 'custom',
        message: 'Les mots de passes ne correspondent pas',
        path: ['password'],
      });
    }
  });

export default inscriptionValidationSchema;
