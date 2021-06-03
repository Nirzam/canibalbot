const { executionAsyncResource } = require('async_hooks');
const Discord = require('discord.js');

const { prefix, token } = require ('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', (message) => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split('/ +/');
    const commands = args.shift().toLowerCase();

    if (commands === `nirzam`) {
        message.channel.send('Un vrai beau gosse vous trouvez pas ?');
    }

    else if (commands === `dentifrisse`){
        message.channel.send('Un bouffon non ? Non je rigole, il est super !')
    }

    else if (commands === `naahoz`){
        message.channel.send('Le meilleur des seconds moi je vous le dis !')
    }

    else if (commands === `moderateur`){
        message.channel.send('Censé faire régner l ordre mais peut mieux faire ^^')
    }

    else if (commands === `serveur`) {
        message.channel.send(`> **__Informations Serveur__**\n     **__Nom de la faction:__** ${message.guild.name}\n     **__Nombre de membres:__** ${message.guild.memberCount}`);
    }

});

client.login(token);