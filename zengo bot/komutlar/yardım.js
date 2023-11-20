const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("**✨ | KOMUTLAR LİSTESİ**")
  .setDescription('\n-Hesapla \n-Avatar \n-Atatürk \n-Kullanıcı | Kullanıcı Bilgim | kbilgim \n-Kaçcm  \n-Slots  \n-Çekiç  \n-Yaz  \n-Şifre  \n-Sç  \n-Ara155 **\n-(!! Komutları küçük harfle yazın!!)** ')
  .setThumbnail(client.user.avatarURL)
  .setFooter('Ekle Beni :):)', client.user.avatarURL)
  .setURL('');
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};