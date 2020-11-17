const ytdl = require('ytdl-core');
module.exports = {
	name: 'play',
  description: 'Reproducir en yt!',
  args:true,
  usage:'<link del tema>',
	async execute(message, args) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            if(args[0].includes('https://www.youtube.com/watch?')){
                connection.play(ytdl(args[0], { filter: 'audioonly' }));
            }
          } else {
            message.reply('Necesitas estar conectado a un canal de voz!');
          }
	},
};