let data = require('../data/reacciones.json')
let respuestas = data.ping
module.exports = {
	name: "ping",
	cooldown: 5,
	description: "Ping!",
	execute(message, args) {
		let random = Math.floor(Math.random() * respuestas.length);
		let respuesta = respuestas[random]
		message.channel.send(respuesta);
	},
};