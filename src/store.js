import Vue from 'vue';
import Vuex from 'vuex';
import RssApi from './api';
import RssApi1 from './api1';
import RssApi2 from './api2';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		rssItems: [],
		rssItems1: [],
		rssItems2: [],
		alertText: ""
	},
	getters: {

	},
	mutations: {
		'SET_RSS_ITEMS'(state, rssItems) {
			state.rssItems = rssItems;
		},
		'SET_RSS1_ITEMS'(state, rssItems1) {
			state.rssItems1 = rssItems1;
		},
		'SET_RSS2_ITEMS'(state, rssItems2) {
			state.rssItems2 = rssItems2;
		},
		'SET_ALERT_TEXT'(state, alertText) {
			state.alertText = alertText;
		},
		'ADD_RSS_ITEM'(state, rssItem) {
			state.rssItems.push(rssItem);
		},
		'ADD_RSS1_ITEM'(state, rssItem1) {
			state.rssItems1.push(rssItem1);
		},
		'ADD_RSS2_ITEM'(state, rssItem2) {
			state.rssItems1.push(rssItem2);
		},
		'EDIT_RSS_ITEM'(state, rssItem) {
			const item = state.rssItems.find(item => item.id === rssItem.id);
			Object.assign(item, rssItem);
		},
		'EDIT_RSS1_ITEM'(state, rssItem1) {
			const item = state.rssItems1.find(item => item.id === rssItem1.id);
			Object.assign(item, rssItem1);
		},
		'EDIT_RSS2_ITEM'(state, rssItem2) {
			const item = state.rssItems1.find(item => item.id === rssItem2.id);
			Object.assign(item, rssItem2);
		},
		'REMOVE_RSS_ITEM'(state, rssItem) {
			const index = state.rssItems.findIndex(item => item.id === rssItem.id);
			state.rssItems.splice(index, 1);
		},
		'REMOVE_RSS1_ITEM'(state, rssItem1) {
			const index = state.rssItems1.findIndex(item => item.id === rssItem1.id);
			state.rssItems1.splice(index, 1);
		},
		'REMOVE_RSS2_ITEM'(state, rssItem2) {
			const index = state.rssItems2.findIndex(item => item.id === rssItem2.id);
			state.rssItems2.splice(index, 1);
		}
	},
	actions: {
		async initialize(context) {
			try {
				const response = await RssApi.userRssItem.getAll();
				context.commit('SET_RSS_ITEMS', response.data );
				const response1 = await RssApi1.messageRssItem.getAll();
				context.commit('SET_RSS1_ITEMS', response1.data );
				const response2 = await RssApi2.threadRssItem.getAll();
				context.commit('SET_RSS2_ITEMS', response2.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async addItem(context, item) {
			try {
				const response = await RssApi.userRssItem.add(item);
				context.commit('ADD_RSS_ITEM', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async addItem1(context, item) {
			try {
				const response = await RssApi1.messageRssItem.add(item);
				context.commit('ADD_RSS1_ITEM', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async addItem2(context, item) {
			try {
				const response = await RssApi2.messageRssItem.add(item);
				context.commit('ADD_RSS2_ITEM', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editItem(context, item) {
			try {
				const response = await RssApi.userRssItem.edit(item.id, item);
				context.commit('EDIT_RSS_ITEM', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editItem1(context, item) {
			try {
				const response = await RssApi1.messageRssItem.edit(item.id, item);
				context.commit('EDIT_RSS1_ITEM', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editItem2(context, item) {
			try {
				const response = await RssApi2.threadRssItem.edit(item.id, item);
				context.commit('EDIT_RSS2_ITEM', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeItem(context, id) {
			try {
				const response = await RssApi.userRssItem.delete(id);
				context.commit('REMOVE_RSS_ITEM', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeItem1(context, id) {
			try {
				const response = await RssApi1.messageRssItem.delete(id);
				context.commit('REMOVE_RSS1_ITEM', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeItem2(context, id) {
			try {
				const response = await RssApi2.threadRssItem.delete(id);
				context.commit('REMOVE_RSS2_ITEM', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		}
	}
});
