import { environment } from "src/environments/environment"; 

const BASE_URL = environment.production? 'https://productapi-zlz9.onrender.com':'http://localhost:7000';

export const USER_URL = BASE_URL + '/api/users';
export const PRODUCT_URL = BASE_URL + '/api/products';

