import axios from 'axios';

export let url = 'http://localhost:8090';
export let apiUrl = `${url}/api`;

let requests = {
	clients: {
		create: (data) => axios.post(`${apiUrl}/clients`, data),
		get: () => axios.get(`${apiUrl}/clients`),
	},
	upload: {
		multiple: (data) => axios.post(`${apiUrl}/upload-multiple`, data),
	},
	cars: {
		get: () => axios.get(`${apiUrl}/cars`),
		create: (data) => axios.post(`${apiUrl}/cars`, data),
	},
};

export default requests;
