import axios from 'axios';
import {BACK_URI_GET_ALL_ADDRESSES} from '../../constantes/backend_uri.tsx';

export interface AddressValues {
  id: number;
  entry: number;
  floor: number;
  apartment: number;
}

class AddressService {
  public addressesValues: AddressValues[] = [];
  public getAllAddresses = async () => {
    try {
      return await axios.get(BACK_URI_GET_ALL_ADDRESSES);
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

export default AddressService;
