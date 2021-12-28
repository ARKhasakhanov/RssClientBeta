<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Данные форума</div>
		<div class="panel-body">
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'app'}">
				Аккаунты
			</router-link>
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'app1'}">
				Сообщения
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "Admin"
}
</script>

<style scoped>

</style>
