import { api, axios, API_ENDPOINT } from "@/utils/axios.utils";

interface LoginParams {
	email: string;
	password: string;
}

export const authApi = Object.freeze({
	async requestLogin(params: LoginParams) {
		return await api.post("/api/login", params);
	},
	async requestLogout() {
		// 그냥 클라이언트에 발급받은 토큰을 삭제하면 끝(따로 API 호출이 필요없다)
		return await api.post("/api/logout");
	},
	async findUsers() {
		return await api.get("/api/users/db");
	},
});
