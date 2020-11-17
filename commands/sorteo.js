let Discord = require('discord.js');

module.exports = {
    name: 'sorteo',
    description: 'armado de equipos',
    args: true,
    usage:'<persona 1> <persona 2> <persona 3> <etc...>',
    execute(message, args) {
        let total = args.length
        let equipo1 = [];
        let equipo2 = [];
        
        for (let i = 0; i < total; i++){
          let random = Math.floor(Math.random() * args.length);
          if(equipo1.length > equipo2.length){
            equipo2.push(args[random])
            args.splice(random, 1)
          } else{
          equipo1.push(args[random])
          args.splice(random, 1)
          }
        }
        let embed = new Discord.MessageEmbed()
            .setColor('#FF3633')
            .setTitle('🎲Resultado del sorteo🎲')
            .setDescription('🏅Los equipos son🏅')
            .addFields(
                { name: "Equipo 1️⃣", value: equipo1, inline:true},
                { name: "Equipo 2️⃣", value: equipo2, inline:true},
            )
        message.channel.send(embed)
    },
};