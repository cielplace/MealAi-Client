import { api, axios, API_ENDPOINT } from "@/utils/axios.utils";

/**
 * user apis
 * 사용자 조회 및 업데이트, 삭제를 담당하는 api 객체
 */
export const userApi = Object.freeze({
	async findUserById(userId: string) {
		return await api.get(`/api/users?user_id=${userId}`);
	},
});
