<script setup lang="ts">
const routes = [{
	link: '/blog',
	title: 'Blogs'
}]
</script>

<template>
	<header>
		<nav
			class="absolute top-0 left-0 right-0 flex justify-between items-center gap-6 mx-auto py-5 px-4 md:px-8 lg:px-0 max-w-[76rem]">
			<a href="/" class="flex gap-3">
				<NuxtIcon name="logo" filled class="text-[32px] scale-125" />
				<h2 class="hidden md:inline text-lg">{SITE_TITLE}</h2>
			</a>
			<!-- Routes -->
			<ul class="relative flex gap-8 md:-translate-x-16">
				<li v-for="{ link, title } in routes" :key="link" class="text-white/80 hover:text-white/100 transition-colors">
					<NuxtLink :href="link" active-class="text-white">{{ title }}</NuxtLink>
				</li>
			</ul>
			<!-- Social Media -->
			<ul>
				<li>
					<a href="https://github.com/shba007/ai-guide">
						<NuxtIcon name="github" class="text-[32px] fill-white opacity-60 hover:opacity-100 transition-opacity" />
					</a>
				</li>
			</ul>
		</nav>
	</header>
</template>