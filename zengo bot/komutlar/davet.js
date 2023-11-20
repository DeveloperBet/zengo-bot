const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Davet Et Kazan Ve daha fazlası `, client.user.avatarURL)
      .setDescription("Davet Et Kazan discord.gg/zenginler")
      .setThumbnail(client.user.avatarURL)
      .addField("Davet Et Kazan", `\n**discord.gg/zenginler**`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['d', 'davet', 'de', 'yam', 'he', 'hp', 'djy', 'hshsj', 'commdjsjands'],
    permLevel: 0
  };

  exports.help = {
    name: 'davet',
    description: 'yardım',
    usage: 'davet'
  };
