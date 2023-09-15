  
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffffff') 
.setAuthor(`Wash Genel Komutlar`, client.user.avatarURL())
.setDescription(`<a:yan:1152318349703921704>  Wash botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Komut Sayısı__`,`<a:yan:1152318349703921704>  \`${prefix}komutlar\` Botun Komut Sayısını Gösterir`,true)
.addField(`__Davet Et__`,`<a:yan:1152318349703921704>  \`${prefix}davet\` Botumuzu Davet Edersiniz`,true)
.addField(`__Bot Bilgi__`,`<a:yan:1152318349703921704>  \`${prefix}botbilgi\` Botumuzun İstatistikleri`,true)
.addField(`__Bot Shard__`,`<a:yan:1152318349703921704>  \`${prefix}shard\` Shard Bilgilerini Gösterir`,true)
.addField(`__Profil__`,`<a:yan:1152318349703921704>  \`${prefix}profil\` Kullanıcı Profilinizi Gösterir`,true)
.addField(`__Oylama__`,`<a:yan:1152318349703921704>  \`${prefix}oylama\` Sunucuda Oylama Başlatır`,true)
.addField(`__Duyuru__`,`<a:yan:1152318349703921704>  \`${prefix}duyuru\` Sunucuda Duyuru Yapar`,true)
.addField(`__Bilgilendirme__`,`<a:yan:1152318349703921704>  \`${prefix}davet\` | Wash'yi Sunucunuza Davet Edersiniz\n<a:yan:1152318349703921704>  \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:yan:1152318349703921704>  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "genel",
  aliases: []
}
