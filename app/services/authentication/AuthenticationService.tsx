import axios from 'axios';
import {BACK_URI_AUTHENTICATION} from '../../constantes/backend_uri.tsx';

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  email: string;
  token: string;
}

class AuthenticationService {
  static login = async (data: LoginData) => {
    try {
      const response = await axios.post(BACK_URI_AUTHENTICATION, data, {
        headers: {'Content-Type': 'application/json'},
      });
    } catch (error: any) {
      if (error.response) {
        console.error('Erreur du serveur:', error.response.data);
      } else if (error.request) {
        console.error('Aucune réponse du serveur:', error.request);
      } else {
        console.error('Erreur de configuration:', error.message);
      }
    }
  };
}

export default AuthenticationService;
