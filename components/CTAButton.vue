<script setup lang="ts">
const props = withDefaults(defineProps<{
	title: string,
	active?: boolean,
	href: string
}>(), {
	active: true
})
</script>

<template>
	<NuxtLink :href="href" class="border-[2.5px] rounded-[10px] px-5 py-[0.625rem] w-fit hover:bg-black transition-all"
		:class="active
		? 'border-primary-400 hover:shadow-[0px_2px_24px_2px_rgba(3,139,223,0.6)]'
		: 'opacity-60 border-white hover:opacity-100'">
		{{ title }}
	</NuxtLink>
</template>
