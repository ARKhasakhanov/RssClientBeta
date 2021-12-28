import { apiUrl } from "./config";
import axios from "axios";

export default {
	messageRssItem: {
		resourceUrl: "message/",
		resourceUrl2: "message",
		urlExpand: "message/?expand",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.urlExpand}`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "PUT",
				data: item
			});
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "DELETE"
			});
		}
	}
};
