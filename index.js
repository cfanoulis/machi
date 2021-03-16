import { Piscina } from 'piscina';
import sanitize from 'sanitize-filename';
import ytpl from 'ytpl';

const makeFilename = (name) =>
	sanitize(name)
		.replaceAll(/(\(|\[).*(video|official version)(\)|\])/gim, '')
		.replaceAll('  ', ' ')
		.trim();

const playlistPromise = ytpl('https://youtube.com/playlist?list=PLCD0445C57F2B7F41', { limit: Infinity });

const piscina = new Piscina({
	filename: new URL('./worker.js', import.meta.url).href
});

const playlist = await playlistPromise;
const resultPromise = playlist.items.map((element) => piscina.runTask({ url: element.shortUrl, filename: makeFilename(element.title) }));
await Promise.all(resultPromise);
console.log('done');
