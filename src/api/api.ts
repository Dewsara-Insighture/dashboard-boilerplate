import axios from 'axios';

/**This is a basic api endpoint that will be used. 
Can add custom headers if needed as well. 
Like the Authtoken if it is being used everywhere **/

export const API_Gateway = axios.create(
    {
        baseURL : import.meta.env.VITE_API_GATEWAY,
    }
)