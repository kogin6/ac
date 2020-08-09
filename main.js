var Discord = require ('discord.js');

var cheerio = require('cheerio');

var request = require('request');

var client = new Discord.Client();

var prefix = "a-"

var fs = require('fs');

client.commands = new Discord.Collection();

var commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(var file of commandFiles){
    var command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('ac is online!');
    client.user.setActivity('a- | by kogin', {type: 'PLAYING'}).catch(console.error);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    var args = message.content.slice(prefix.length).split(/ +/);
    var command = args.shift().toLowerCase();

    if(command === 'bruh'){
        client.commands.get('bruh').execute(message, args);
    } else if (command == 'youtube'){
        client.commands.get('youtube').execute(message, args);
    } else if (command == 'img'){
        client.commands.get('img').execute(message, args);

    }
});














client.login('NzQxODk4ODc5ODMzODY2MzIw.Xy-RLA.bpZEB4kg0ariWjZJfi6j1aAuiAM');