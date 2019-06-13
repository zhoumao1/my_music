<template>
	<div>
		<!-- swiper -->
		<div class="swiper layout">
			<swiper :options="swiperOption">
				<swiper-slide v-for="(slide, index) in swiperSlides" :key="index"
					>I'm Slide {{ slide }}</swiper-slide
				>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<!-- 类别 -->
		<div class="category layout">
			<ul class="category-row">
				<li>
					<!-- <router-link :to="{name: 'name'}">LinkTitle</router-link> -->
					<router-link :to="{ name: 'xx' }">每日推荐</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'xx' }">歌单</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'xx' }">排行榜</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'xx' }">电台</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'xx' }">直播</router-link>
				</li>
			</ul>
		</div>
		<!-- 推荐 -->
		<div class="recommend layout">
			<div class="recommend-header clearfix">
				<h3>推荐歌单</h3>
				<router-link :to="{ name: 'songdan_square' }">歌单广场</router-link>
			</div>
			<div class="recommend-content">
				<div class="recommend-row">
					<div class="item">
						<div class="top-layout">
							<span class="host">4.9亿</span>
						</div>
						<div class="bottom-title">
							<p>话语速爆新歌</p>
						</div>
					</div>
					<div class="item">
						<div class="top-layout">
							<span class="host">72万</span>
						</div>
						<div class="bottom-title">
							<p>粤语情歌 : 与你听风声, 观赏过夜星</p>
						</div>
					</div>
					<div class="item">
						<div class="top-layout">
							<span class="host">52万</span>
						</div>
						<div class="bottom-title">
							<p>烟嗓民谣 : 醉放于呢喃细语之中</p>
						</div>
					</div>
				</div>
				
				<div class="recommend-row">
					<div class="item">
						<div class="top-layout">
							<span class="host">4.9亿</span>
						</div>
						<div class="bottom-title">
							<p>话语速爆新歌</p>
						</div>
					</div>
					<div class="item">
						<div class="top-layout">
							<span class="host">72万</span>
						</div>
						<div class="bottom-title">
							<p>粤语情歌 : 与你听风声, 观赏过夜星</p>
						</div>
					</div>
					<div class="item">
						<div class="top-layout">
							<span class="host">52万</span>
						</div>
						<div class="bottom-title">
							<p>烟嗓民谣 : 醉放于呢喃细语之中</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "carrousel",
	data() {
		return {
			swiperOption: {
				pagination: {
					el: ".swiper-pagination"
				}
			},
			swiperSlides: [1, 2, 3, 4, 5]
		};
	},
	created() {},
	mounted() {}
};
</script>

<style lang="less" scoped>
@import url("../../assets/css/find.css");
</style>
