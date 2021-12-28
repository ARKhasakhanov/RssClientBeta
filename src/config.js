export const isProduction = process.env.NODE_ENV === 'production';

export const dateLocaleOptions = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric'
};

export const sources = {
	1: 1,
	2: 2,
	3: 3
};

export const apiUrl = isProduction ? "http://rssapi.cleverfox.space/api" : "http://127.0.0.1:8000";
