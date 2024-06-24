import axios from 'axios';

export default ({ $config }, inject) => {
  const api = axios.create({
    baseURL: $config.apiBaseURL,
    headers: {
      Authorization: `Bearer ${$config.apiToken}`
    }
  });

  inject('api', api);
};
