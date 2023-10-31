export default async (req, context) => {
	var myHeaders = new Headers();
	myHeaders.append("accept", "application/json");
	myHeaders.append("content-type", "application/x-www-form-urlencoded");

	var urlencoded = new URLSearchParams();
	urlencoded.append("grant_type", "refresh_token");
	urlencoded.append("client_id", process.env.VUE_CLIENT_ID);
	urlencoded.append("client_secret", process.env.VUE_CLIENT_SECRET);
	urlencoded.append("refresh_token", process.env.VUE_REFRESH_TOKEN);

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: urlencoded,
		redirect: 'follow'
	};

	var tokenResponse = await fetch("https://api.mercadolibre.com/oauth/token", requestOptions)
	.then(response => response.json())
	.catch(error => console.log('error', error));

	return {
        statusCode: 200,
        body: JSON.stringify({ tokenResponse })
    };
};