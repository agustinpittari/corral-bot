const ytdl = require('ytdl-core');
module.exports = {
	name: 'mujik',
	description: 'Best tema in the world!',
	async execute(message, args) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
                connection.play(ytdl('https://www.youtube.com/watch?v=eYlMIUOsXPU&feature=youtu.be', { filter: 'audioonly' }));
                message.channel.send('Que buen tema pasaste perrooooooo!');
                console.log('reproduciendo')
          } else {
            message.reply('Necesitas estar conectado a un canal de voz!');
          }
	},
};