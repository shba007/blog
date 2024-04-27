export interface Post {
	ts:                  Date;
	from:                Date;
	number_of_posts:     number;
	max_number_of_posts: number;
	first_post:          Date;
	last_post:           Date;
	next_timestamp:      Date;
	documents:           Document[];
}

export interface Document {
	id:            string;
	author:        string;
	url:           string;
	title:         string;
	text:          string;
	language_code: string;
	location_code: null | string;
	links:         string[];
	tags:          string[];
	images:        string[];
	indexed_at:    Date;
	published_at:  Date;
	reindexed_at:  Date;
	inlinks_count: number;
	blog_id:       string;
	blog_name:     string;
	blog_url:      string;
	blog_rank:     number;
	authority:     number;
}
