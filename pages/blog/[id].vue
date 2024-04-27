<script setup lang="ts">
const route = useRoute()

const id = route.params.id.toString()
const image = '/images/hero-image.svg'

const { data: post, pending, error, refresh } = await useFetch(`/api/post/${id}`)
</script>

<template>
	<main class="px-4 shrink flex flex-col items-stretch mx-auto mt-14 mb-3 max-w-[76rem] min-h-screen">
		<article class="w-full">
			<NuxtImg :src="image" class="absolute left-0 w-screen aspect-[5/3] max-h-[20rem] object-cover" />
			<div class="invisible left-0 w-screen aspect-[5/3] max-h-[20rem]" />
			<div v-if="post" class="content mx-auto max-w-4xl leading-relaxed">
				<div class="flex justify-between gap-8 mt-12 md:mt-8 mb-2 text-white/60">
					<span> {{ formatDate(post.publishedAt) }}</span>
					<span v-if="post.publishedAt" class="text-base text-right">
						Updated on {{ formatDate(post.publishedAt) }}
					</span>
				</div>
				<section>
					<p>{{ post.text }}</p>
					<h6 v-if="post.author" class="my-4 text-sm">Author: {{ post.author }}</h6>
					<ul class="flex gap-2 max-w-[100vw] overflow-x-scroll">
						<li v-for="tag in post.tags" :key="tag" class="px-4 py-1.5 bg-dark-500 rounded-lg">{{ tag }}</li>
					</ul>
				</section>
			</div>
		</article>
	</main>
</template>
