const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Sitio para monitorear')
})
let port = process.env.PORT || 3000;
app.listen(port)

require('dotenv').config()
///////////////////////START BOT//////////////////////////////

// ----------BOT PARA DISCORD---------- //
const fs = require('fs')
const Discord = require('discord.js');
const client = new Discord.Client();


client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const prefix = process.env.PREFIX
const token = process.env.TOKEN

let {contains} = require('./commands/helpers')
let {cuatro, siete, chelas, paly, viejos} = require('./data/reacciones.json')

function presence(){
    client.user.setPresence({
        status:"online",
        activity: {
            name: "la piragua con hermanita pa. Comandos con '.'",
            type: "PLAYING"
        }
    })
}

client.on("ready", function(){
    console.log("Uesaaaaaa");
    presence();
});

client.on("message", function(message){
    const mencionados = Array.from(message.mentions.users).length;
    if(mencionados == 0){
        if(contains(message.content.toLocaleLowerCase(), cuatro)){
            message.channel.send('te puse')
        } else if(contains(message.content.toLocaleLowerCase(), siete)){
            message.channel.send('te escupi');
        } else if(contains(message.content.toLocaleLowerCase(), chelas)){
            message.react('🐖')
        }else if(contains(message.content.toLocaleLowerCase(), paly)){
            message.react('🕊️')
        }else if(contains(message.content.toLocaleLowerCase(), viejos)){
            message.react('🥦');
            message.react('👴');
            
        }
    }
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLocaleLowerCase();
    
    if(!client.commands.has(commandName)) return;
    
    const command = client.commands.get(commandName);
    
    if (command.args && !args.length){
        let reply = `No estas usando bien el comando pelotudito, ${message.author}`;
        
        if (command.usage){
            reply += `\nEl uso correcto tiene que ser: \`${prefix}${command.name} ${command.usage}\``;
        };
        
        return message.channel.send(reply);
    }
    
    try {
        command.execute(message, args);
    } catch(error){
        console.error(error);
        message.reply('Hubo un error tratando de ejecutar ese comando');
    }
});

client.login(token); 