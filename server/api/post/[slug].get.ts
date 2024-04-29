export default defineEventHandler(async (event) => {
	try {
		const slug = getRouterParam(event, 'slug')
		const posts = await useStorage().getItem<Post>('posts')

		if (!posts)
			throw createError({ statusCode: 404, statusMessage: "Posts not found" })

		const post = posts.documents.find(({ title }) => slug === convertToSlug(title))
		if (!post)
			throw createError({ statusCode: 404, statusMessage: "Post Id " + slug + " not found" })

		return {
			id: post.id,
			title: post.title,
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