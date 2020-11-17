const Discord = require('discord.js');
module.exports = {
    name: 'example',
    description: 'Horario de cineclub',
    execute(message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#DD6260')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Corral Bot', 'https://cdn.discordapp.com/attachments/413988228560060417/778077110614097920/Corral_nuevo_logo.png')
	.setDescription('Some description here')
	.setThumbnail('https://cdn.discordapp.com/attachments/413988228560060417/778077110614097920/Corral_nuevo_logo.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://cdn.discordapp.com/attachments/413988228560060417/778077110614097920/Corral_nuevo_logo.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://cdn.discordapp.com/attachments/413988228560060417/778077110614097920/Corral_nuevo_logo.png');

    message.channel.send(exampleEmbed);
    },
};