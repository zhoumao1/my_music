<template>
	<div id="app">
		<v-header></v-header>
		<transition>
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="less" scoped>
@rem: 1080/16rem;

#app{
	box-sizing: border-box;
	overflow-x: hidden;
}
.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to {
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active {
	transition: all 0.5s ease;
}
</style>