const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  if (message.author.id != ayarlar.sahip) return; // botun sahibi dışında herhangi bir kişi kullanamaz

// BU KOMUTU ASLA İNTERNETTEN BULUPTA REKLAM AMAÇLI KULLANMAYIN!
  // DİSCORD HESABINIZ DAHİL BİDAHA BOT YAPAMAZSINIZ ÇÜNKÜ DİSCORD BU REKLAM YAPMA ÖZELLİĞİNİ YASAKLADI!
     // İNSANLARI LÜTFEN BU KOMUTLAR İLE RAHATSIZ ETME!
  message.delete()
  message.author.send('**Aklından bile lütfen geçirme lütfen şöyle komutlar...**')
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['duyurbot'],
  permLevel: 0
};

exports.help = {
  name: 'dmduyuru',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'dmduyuru'
};