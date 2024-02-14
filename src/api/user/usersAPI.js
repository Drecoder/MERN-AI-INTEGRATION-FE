import axios from 'axios';
// Registration 

export const registrationAPI = async (userData) => {
 const response = await axios.post(
    'http://localhost:5000/api/v1/users/register',
   {
       username: userData?.username,
       email: userData?.email,
       password: userData?.password
    },
    {
        withCredentials: true,
    }
 );
    return response?.data;
};
