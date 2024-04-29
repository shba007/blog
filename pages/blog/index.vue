<script setup lang="ts">
const { data: posts, pending, error, refresh } = await useFetch('/api/post')
</script>

<template>
	<main
		class="relative shrink flex flex-col items-stretch mt-20 mb-3 px-4 md:px-8 w-screen h-[calc(100vh-194px)] overflow-y-scroll">
		<section>
			<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto justify-center w-fit max-w-[76rem]">
				<li v-for="{ id, slug, image, publishedAt, title, description } in posts" :key="id">
					<BlogCard :image="image" :publishedAt="publishedAt" :title="title" :description="description"
						:url="`/blog/${slug}`" />
				</li>
			</ul>
		</section>
	</main>
</template>
