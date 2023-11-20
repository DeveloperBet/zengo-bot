const Discord = require('discord.js');


exports.run = function(client, message) {
    if(message.author.id !== "450006793884663820") if(message.author.id !== "537347735280418816") if(message.author.id !== "488571851786682389")  return message.channel.send("**Botun sahibi değilsin!**")
    message.channel.send("Bot yeniden başlatılıyor").then(msg => {
        console.log("[BOT]Yeniden başlatılıyor | [REiS BOT] Altypaı");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'reboot', 
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};
