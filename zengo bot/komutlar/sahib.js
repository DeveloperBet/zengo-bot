const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("36393F")
    .setTimestamp()
     .setAuthor(`${client.user.username}`, client.user.avatarURL)
    .setDescription('<❤> **Yapımcılarım :** <@1083077271402844220> ');
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım','sahip','yapımcılarım','yapımcılar',],
  permLevel: 0
};

exports.help = {
  name: 'sahib',
  description: 'Yapımcımı Gosterir.',
  usage: 'sahip'
};