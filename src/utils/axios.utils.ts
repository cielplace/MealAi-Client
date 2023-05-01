import axios from "axios";

const API_ENDPOINT = "http://kdt-ai6-team08.elicecoding.com:5000";

const axiosOptions = {
	baseURL: API_ENDPOINT,
};

const api = axios.create(axiosOptions);

api.interceptors.request.use(
	function (config) {
		// 요청을 보내기 전에 수행할 일
		return config;
	},
	function (error) {
		// 오류 요청을 보내기전 수행할 일
		return Promise.reject(error);
	}
);

api.interceptors.response.use(
	function (res) {
		return res;
	},
	function (error) {
		console.error(error);
		return Promise.reject(error);
	}
);

export { api, axios, API_ENDPOINT };
