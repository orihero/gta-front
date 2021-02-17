import axios from 'axios';

export let url = 'http://localhost:8090/api';

let requests = {
	clients: {
		create: (data) => axios.post(`${url}/clients`, data),
	},
	upload: {
		multiple: (data) => axios.post(`${url}/upload-multiple`, data),
	},
};

export default requests;
