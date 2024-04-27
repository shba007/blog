<script setup lang="ts">
const props = defineProps<{
	image?: string,
	publishedAt: string,
	title: string,
	description: string,
	url: string
}>()
</script>

<template>
	<NuxtLink :href="url" class="flex flex-col rounded-[0.625rem] max-w-[318px] h-full bg-dark-500 overflow-hidden">
		<NuxtImg :src="image ?? '/images/hero-image.svg'" :alt="image ?? 'hero-image'"
			class="w-full aspect-[13/7] object-cover" />
		<div class="px-4 md:px-6 py-4">
			<time class="uppercase text-sm opacity-60">
				{{ formatDate(publishedAt) }}
			</time>
			<h2 class="text-lg line-clamp-2 font-semi-bold mt-2 mb-3 md:mt-[0.625rem] md:mb-4">{{ title }}</h2>
			<p class="line-clamp-2 opacity-60">{{ description }}</p>
		</div>
	</NuxtLink>
</template>