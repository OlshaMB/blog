import rss from '@astrojs/rss';

export const get = () =>
	rss({
		title: "OlshaMB's Blog",
		description: "OlshaMB's Blog",
		site: import.meta.env.SITE,
		items: import.meta.glob('./blog/**/*.md'),
	});
