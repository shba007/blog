<template>
	<main class="flex flex-col gap-8 items-stretch mx-auto p-4 max-w-[76rem]">
		<!-- Hero Section -->
		<section class="min-h-[calc(100vh-6rem)] sm:min-h-[75vh] lg:min-h-screen">
			<div class="flex flex-col-reverse md:flex-row gap-8 justify-between items-center">
				<div class="flex flex-col gap-9 md:mt-20 md:max-w-[50%] text-center md:text-left">
					<h1 class="text-3xl md:text-4xl lg:text-5xl font-semi-bold leading-[1.05]">The Intuitive AI Guide Book</h1>
					<h2 class="text-lg lg:text-xl leading-[1.5]">
						Simple, powerful, and detailed guide to use AI In your work and
						daily life and become more productive.
					</h2>
					<CTAButton title="Goto Blogs" href="/blog" class="mx-auto md:mx-0" />
				</div>
				<NuxtImg src="./images/hero-image.svg" alt="background-img"
					class="w-screen max-w-[25rem] md:w-1/2 md:max-w-[46rem]" />
			</div>
		</section>
		<!-- Hero Section -->
		<!-- Starting Section -->
		<section class="flex flex-col gap-8 md:flex-row justify-between md:items-center my-12 md:my-4 md:min-h-[50vh]">
			<div>
				<h6 class="uppercase font-semi-bold">Getting Started</h6>
				<h2 class="mt-1 text-2xl md:text-4xl font-semi-bold">Start your AI Journey</h2>
				<p class="text-lg mt-3 opacity-80">Learn everything you need to know, from beginner to master</p>
			</div>
			<div class="flex gap-4">
				<CTAButton title="Goto Blogs" href="/blog" />
			</div>
		</section>
		<!-- Starting Section -->
	</main>
</template>