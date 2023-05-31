export default function ({ $axios }) {
  // Configurar la base URL de la API de Mercado Libre
  $axios.defaults.baseURL = 'https://api.mercadolibre.com';

  // Interceptores de solicitud
  $axios.onRequest(async config => {
    if (!config.url.includes('/oauth/token')) {
      // Obtener el token de acceso
      const tokenResponse = await $axios.post('/oauth/token', {
        grant_type: 'client_credentials',
        client_id: '3820820639250625',
        client_secret: 'V0G3zUcr57GoJMYFAWEtHvs52QQsKREU'
      });
      
      const accessToken = tokenResponse.data.access_token;

      // Agregar el token de acceso a los encabezados de la solicitud
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    // Agregar cualquier lógica adicional necesaria antes de enviar la solicitud
    return config;
  });

  // Interceptores de respuesta
  $axios.onResponse(response => {
    // Agregar cualquier lógica adicional necesaria después de recibir la respuesta
    return response.data;
  });

  // Interceptores de error
  $axios.onError(error => {
    // Manejar errores de manera adecuada según tus necesidades
    return Promise.reject(error);
  });
}
