import { Post } from "@/server/utils/model"

export default defineEventHandler(async () => {
	try {
		const config = useRuntimeConfig()

		const posts = await $fetch<Post>('/blog/livefeed/api/v5/GetData', {
			baseURL: config.private.apiUrl,
			query: {
				apikey: config.private.apiKey,
				timestamp: '2017-04-24T10:22:37.354Z',
				format: 'json',
				maxPosts: '50'
			}
		})

		return posts.documents.map(({ id, url, title, text, published_at, images }) => {
			return { id, image: images[0], publishedAt: published_at, title, description: text, url }
		})
	} catch (error: any) {
		console.error("API Post get", error)

		throw createError({ statusCode: 500, statusMessage: "Some Unknown Error Found" })
	}
})