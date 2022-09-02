const base_url="http://localhost:8080";
const axios = require('axios').default;

// axois object
const axiosObject = axios.create({
  baseURL: base_url
});



// Add a request interceptor
axiosObject.interceptors.request.use(function (config ) {
    // set token
    const token = localStorage.getItem('usertoken');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
});

export default axiosObject;