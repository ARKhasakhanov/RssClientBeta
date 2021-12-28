<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Список аккаунтов</div>
		<div class="panel-body">
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'edit', params: {id: 0}}">
				Создать аккаунт
			</router-link>
		</div>
		<table class="table table-striped">
			<thead>
			<tr>
				<th>№</th>
				<th style="width: 65%">Логин</th>
				<th style="width: 10%">Пароль</th>
				<th style="width: 20px"></th>
				<th style="width: 20px"></th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="(item, index) in rssItems" :key="index">
				<td>{{index + 1}}</td>
				<td><a :href="item.login" target="_blank">{{ item.login }}</a></td>
				<td><a :href="item.password" target="_blank">{{ item.password }}</a></td>
				<td><router-link role="button" class="btn btn-sm btn-link" :to="{name: 'edit', params: {id: item.id}}">
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
				rssItems: state => state.rssItems
			})
		}
	}
</script>
