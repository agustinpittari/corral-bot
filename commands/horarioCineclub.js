const Discord = require('discord.js');
module.exports = {
    name: 'cineclub',
    description: 'Horario de cineclub',
    execute(message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#DD6260')
        .setTitle('🎞️ Horarios de CINECLUB 🎞️')
        .setAuthor('Corral','https://cdn.discordapp.com/attachments/413988228560060417/778077110614097920/Corral_nuevo_logo.png')
        .setThumbnail('https://cineclub.xyz/logo.jpg')
        .addFields(
            { name: 'Lunes', value: '23:00Hs  🕚', inline: true },
            { name: 'Miercoles', value: '23:00Hs  🕚', inline: true },
        )
        .setTimestamp()
        .setFooter('Los derechos de CINECLUB estan reservados');
            
    message.channel.send(exampleEmbed);
    },
};