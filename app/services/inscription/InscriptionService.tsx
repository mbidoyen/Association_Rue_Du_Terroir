import axios from 'axios';
import {BACK_URI_INSCRIPTION} from '../../constantes/backend_uri.tsx';

class InscriptionService {
  static save = async (data: object) => {
    return await axios.post(BACK_URI_INSCRIPTION, JSON.stringify(data), {
      headers: {'Content-Type': 'application/json'},
    });
  };
}

export default InscriptionService;
