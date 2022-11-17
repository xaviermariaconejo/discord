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
const KARAKKAT_WORDS = ['KARAK', 'ENANO'];
const TRO_WORDS = [
  ' TRO ',
  'TORMENTA',
  'LEGACIES',
  'PRELUDIUM',
  'STORM',
];
const GUNNAR_WORDS = ['GUNNAR'];
const KING_WORDS = ['KING', 'REY'];
const BULLVOICE_WORDS = ['BULLVOICE', 'BRAM', 'BRAU'];
const BULLVOICE_WORDS_RESPONSES = [
  '⚒️ ¡¡Khazad Aimenu!! ⚒️',
  '⚒️ ¡¡Glòria al Clan Bram de Brau!! ⚒️',
];

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

  if (KARAKKAT_WORDS.some((word) => content.includes(word))) {
    const response = await message.reply({
      content: `¡¡PIEDRA Y HIELO!!`,
      fetchReply: true,
    });
    response.react('1021465972458147840');
    response.react('⛰️');
    response.react('🧊');
  }

  if (TRO_WORDS.some((word) => content.includes(word))) {
    const response = await message.reply({
      content: `⚡ ¡¡Join the Storm!! ⚡`,
      fetchReply: true,
    });
    response.react('🙌');
    response.react('⚡');
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

  if (BULLVOICE_WORDS.some((word) => content.includes(word))) {
    const wordIndex = Math.floor(
      Math.random() * BULLVOICE_WORDS_RESPONSES.length
    );
    const response = await message.reply({
      content: BULLVOICE_WORDS_RESPONSES[wordIndex],
      fetchReply: true,
    });
    response.react('⚒️');
  }
});

client.login(process.env.BOT_TOKEN);
