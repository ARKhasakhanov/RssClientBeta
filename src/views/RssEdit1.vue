<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Сообщения</div>
		<div class="panel-body">
			<form @submit="handleSubmit">
				<div class="form-group">
					<label for="inputThread">Тред</label>
					<select class="form-control" id="inputThread" v-model="thread">
						<option v-for="(source, key) in sources1" :value="key">{{ source }}</option>
					</select>
				</div>
				<div class="form-group">
					<label for="inputUserId">Пользователь</label>
					<select class="form-control" id="inputUserId" v-model="user">
						<option v-for="(user, key) in sources" :value="user.id">{{ user.login }}</option>
					</select>
				</div>
				<div class="form-group">
					<label for="inputText">Текст</label>
					<input type="text" class="form-control" id="inputText" v-model="message_text">
				</div>
				<div class="form-group">
					<label for="inputDate">Дата</label>
					<input type="text" class="form-control" id="inputDate" v-model="date">
				</div>
				<button type="submit" class="btn btn-primary pull-right">Сохранить</button>
			</form>
		</div>
	</div>
</template>

<script>
	import { sources } from "../config";
	import { formatInputDate, formatInputTime } from "../utils";
	import {mapActions} from "vuex";

	export default {
		data() {
			const now = new Date(Date.now());
			return {
				id: parseInt(this.$route.params.id),
				thread: 1,
				user: 1,
				message_text: "",
				date: formatInputDate(now),
			};
		},
		created() {
			if (this.id !== 0 && this.rssItem) {
				const date1 = new Date(this.rssItem.date);
				this.thread = this.thread.id;
				this.user = this.rssItem.user.id;
				this.message_text = this.rssItem.message_text;
				this.date = this.formatInputDate(date1);
			}
		},
		methods: {
			async handleSubmit(e) {
				e.preventDefault();
				const item = {
					thread: this.thread,
					user: this.user,
					message_text: this.message_text,
					date: this.date,
				};
				if (this.id !== 0) {
					item.id = this.id;
					await this.editItem1(item);
				} else {
					await this.addItem1(item);
				}
				await this.$router.push({name: "app1"});
			},
			...mapActions([
				'addItem1',
				'editItem1'
			])
		},
		computed: {
			date() { return `${this.visibleDate}T${this.visibleTime}:00+03:00`; },
			sources() { return this.$store.state.rssItems },
			sources1() { return this.$store.state.rssItems2},
			rssItem() {
				return this.id !== 0 ?
					this.$store.state.rssItems1.find(item => item.id === this.id):
					null;
			}
		}
	}
</script>
