<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Список ссобщений</div>
		<div class="panel-body">
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'edit1', params: {id: 0}}">
				Создать сообщение
			</router-link>
		</div>
		<table class="table table-striped">
			<thead>
			<tr>
				<th>№</th>
				<th style="width: 65%">Тред</th>
				<th style="width: 10%">Пользователь</th>
				<th style="width: 20px">Текст</th>
				<th style="width: 20px">Дата</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="(item, index) in rssItems1" :key="index">
				<td>{{index + 1}}</td>
				<td><a :href="item.source" target="_blank">{{ item.source }}</a></td>
				<td><a :href="item.user" target="_blank">{{ item.user.login }}</a></td>
				<td><a :href="item.message_text" target="_blank">{{ item.message_text }}</a></td>
				<td>{{ formatDate(new Date(item.date)) }}</td>
				<td><router-link role="button" class="btn btn-sm btn-link" :to="{name: 'edit1', params: {id: item.id}}">
					<span class="glyphicon glyphicon-pencil"></span>
				</router-link></td>
				<td><button type="button" class="btn btn-sm btn-link" @click="handleRemoveClick($event, item.id)">
					<span class="glyphicon glyphicon-remove"></span>
				</button></td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import { formatDate } from "../utils";
	import {mapActions, mapState} from 'vuex';

	export default {
		methods: {
			formatDate,
			async handleRemoveClick(e, id) {
				await this.removeItem(id);
			},
			...mapActions([
				'removeItem'
			])
		},
		computed: {
			sources: () => sources,
			...mapState({
				rssItems: state => state.rssItems,
				rssItems1: state => state.rssItems1,
				rssItems2: state => state.rssItems2
			})
		}
	}
</script>
