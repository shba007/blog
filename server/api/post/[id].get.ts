export default defineEventHandler(async (event) => {
	try {
		const config = useRuntimeConfig()
		const id = getRouterParam(event, 'id')

		const posts = await $fetch<Post>('/blog/livefeed/api/v5/GetData', {
			baseURL: config.private.apiUrl,
			query: {
				apikey: config.private.apiKey,
				timestamp: '2017-04-24T10:22:37.354Z',
				format: 'json',
				maxPosts: '50'
			}
		})

		const post = posts.documents.find(({ id: docId }) => docId === id)
		if (!post)
			return null

		return {
			id: post.id,
			blogName: post.blog_name,
			publishedAt: post.published_at,
			text: post.text,
			author: post.author,
			tags: post.tags
		}
	} catch (error: any) {
		console.error("API Post/Id get", error)

		throw createError({ statusCode: 500, statusMessage: "Some Unknown Error Found" })
	}
})