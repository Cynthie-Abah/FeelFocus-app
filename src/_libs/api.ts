
export const getAffirmations = async () => {
    const url = process.env.API_URL;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': process.env.API_KEY ?? '',
            'x-rapidapi-host': process.env.API_HOST ?? ''
        }
    };
try {
	const response = await fetch(`${url}/categories/gratitude/random`, options);
	const result = await response.json();
	console.log(result);
    return result;
} catch (error) {
	console.error(error);
}
}