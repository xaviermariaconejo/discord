const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.GuildMembers,
  ],
});

const DEMIURGO_WORDS = ['DEMIURGO'];

client.on('messageCreate', function (message) {
  if (message.author.bot) return;

  const content = message.content.toUpperCase();
  if (DEMIURGO_WORDS.some((word) => content.includes(word))) {
    message.reply(`¡¡Un Círculo, Una Familia!!`);
  }
});

client.login(config.BOT_TOKEN);
