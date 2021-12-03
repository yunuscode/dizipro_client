import constants from "../configs/constants";

export default class RegionsService {
	static async GetAllRegions() {
		let response = await fetch(constants.API_URL + "/v1/countries");
		response = await response.json();
		return response;
	}
}
