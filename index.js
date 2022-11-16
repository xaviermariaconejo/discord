require('dotenv').config();
const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

const DEMIURGO_WORDS = ['DEMIURGO'];
const REPUBLIC_WORDS = ['REPUBLICA', 'REPÚBLICA'];
const GUNNAR_WORDS = ['GUNNAR'];
const KING_WORDS = ['KING', 'REY'];

client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot) return;

  const content = message.content.toUpperCase();

  if (DEMIURGO_WORDS.some((word) => content.includes(word))) {
    const response = await message.reply({
      content: `¡¡Un Círculo, Una Familia!!`,
      fetchReply: true,
    });
    response.react('1042364615666958366');
  }

  if (REPUBLIC_WORDS.some((word) => content.includes(word))) {
    const response = await message.reply({
      content: `¡¡Dulce et decorum est pro patria mori!!`,
      fetchReply: true,
    });
  }

  if (GUNNAR_WORDS.some((word) => content.includes(word))) {
    const response = await message.reply({
      content: `¡¡Viva King Gunnar!!`,
      fetchReply: true,
    });
    response.react('🙌');
  }

  if (KING_WORDS.some((word) => content.includes(word))) {
    const response = await message.reply({
      content: `¡¡King Gunnar es el único y verdadero rey!!`,
      fetchReply: true,
    });
    response.react('🙌');
  }
});

client.login(process.env.BOT_TOKEN);
