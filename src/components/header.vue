<template>
	<div class="layout">
		<header>
			<div class="fl">
				<span class="iconfont icon-liebiao"></span>
			</div>

			<div class="fc">
				<div class="item">
					<router-link :to="{ name: 'my' }">我的</router-link>
				</div>
				<div class="item">
					<router-link :to="{ name: 'find' }">发现</router-link>
				</div>
				<div class="item">
					<router-link :to="{ name: 'friend' }">朋友</router-link>
				</div>
				<div class="item">
					<router-link :to="{ name: 'video' }">视频</router-link>
				</div>
			</div>
			<div class="fr">
				<span class="iconfont icon-chaxun"></span>
			</div>
		</header>
	</div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@rem: 1080/16rem;
header{
	width: 100%;
	box-sizing: border-box;
	height: 156/@rem;
	padding-top: 56/@rem;
	display: flex;
	&>div{
		text-align: center;
		line-height: 100/@rem;
		flex: 1;
		&.fc{
			font-size: 42/@rem;
			color: #7f7f7f;
			flex-grow: 6;
			display: flex;
			.item{
				flex: 1;
				.music-active{
					transition: all 0.3s;
					display: block;
					margin-top: -4/@rem;
					font-size: 46/@rem;
					color: #343434 !important;
				}
			}
		}
		&>span{
			font-size: 50/@rem;
		}
	}
}
</style>
