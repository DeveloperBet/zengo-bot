const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        `${prefix}⭐️ Davet Et Kazan .gg/zenginler ⭐️ 🔥`,
        "⭐️ Davet Et Kazan .gg/zenginler ⭐️",
        "⭐️ Davet Et Kazan .gg/zenginler ⭐️",
        "⭐️ Davet Et Kazan .gg/zenginler ⭐️",
        "⭐️ Davet Et Kazan .gg/zenginler ⭐️",  // Cortex Bot'u - Eklemek için websitemiz ^_^
        "⭐️ Davet Et Kazan .gg/zenginler ⭐️", // Cortex Bot'un destek sunucusu ^_^
        `${prefix}yardım`
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "https://www.youtube.com/channel/trapspaces"); // youtube kanalım öhöm :3
      }, 2 * 5000); //DEĞİŞME SÜRESİ 10 sn ayarlı

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setActivity(`${prefix}yardım + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};
