import ffmpeg from 'fluent-ffmpeg';
import { join } from 'path';
import ytdl from 'ytdl-core';

export default ({ url, filename }) => {
	console.log(`now running ${filename}`);
	return new Promise((res, rej) => {
		ffmpeg.setFfmpegPath('C:\\Users\\chara\\.ffmpeg\\bin\\ffmpeg.exe');
		ffmpeg(ytdl(url, { quality: 'highestaudio', filter: 'audioonly' }))
			.format('mp3')
			.audioBitrate(128)
			.save(join('.', 'out', `${filename}.mp3`))
			.on('end', res)
			.on('err', rej);
	});
};
