<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Изменение данных акаунта</div>
		<div class="panel-body">
			<form @submit="handleSubmit">
				<div class="form-group">
					<label for="inputLogin">Логин пользователя</label>
					<input type="text" class="form-control" id="inputLogin" v-model="login">
				</div>
				<div class="form-group">
					<label for="inputPassword">Пароль пользователя</label>
					<input type="text" class="form-control" id="inputPassword" v-model="password">
				</div>
				<button type="submit" class="btn btn-primary pull-right">Сохранить</button>
			</form>
		</div>
	</div>
</template>

<script>
	import { formatInputDate, formatInputTime } from "../utils";
	import {mapActions} from "vuex";

	export default {
		data() {
			const now = new Date(Date.now());
			return {
				id: parseInt(this.$route.params.id),
				login: "",
				password: "",
			};
		},
		created() {
			if (this.id !== 0 && this.rssItem) {
				this.login = this.rssItem.login;
				this.password = this.rssItem.password;
			}
		},
		methods: {
			async handleSubmit(e) {
				e.preventDefault();
				const item = {
					login: this.login,
					password: this.password,
				};
				if (this.id !== 0) {
					item.id = this.id;
					await this.editItem(item);
				} else {
					await this.addItem(item);
				}
				await this.$router.push({name: "app"});
			},
			...mapActions([
				'addItem',
				'editItem'
			])
		},
		computed: {
			date() { return `${this.visibleDate}T${this.visibleTime}:00+03:00`; },
			rssItem() {
				return this.id !== 0 ?
					this.$store.state.rssItems.find(item => item.id === this.id):
					null;
			}
		}
	}
</script>
