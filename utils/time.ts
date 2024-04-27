export function formatDate(date: string) {
	return new Date(date).toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
}