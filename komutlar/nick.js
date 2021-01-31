  const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if(!message.member.roles.has("İD")) return message.channel.send(`**bu komutu kullanabilmek için Gerekli Yetkiye sahip olmasınız.**`);
let user = message.mentions.users.first() || client.users.get(args[0]) || message.author  
let member = message.mentions.members.first()
let isim = args.slice(1).join("")
let yas = args.slice(2).join("") 
if (!member) return message.channel.send('**Bir üye etiketlemelisin**')
if (!isim) return message.channel.send('Bir isim yazmalısın ')
if (!yas) return message.channel.send("Bir Yaş Girmelisin"); 
member.setNickname(` ${isim}`)
const kobscode = new Discord.RichEmbed()


.setDescription(`${member} **kişisinin ismi başarıyla değiştirildi.** `)
.setFooter(` Komutu Kullanan: ${message.author.tag}` , `${message.author.avatarURL}`)
.setColor('RANDOM')
message.react('İD') //emoji id
message.channel.send(kobscode).then(m =>m.delete(10000))
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['isim'],
permLevel: 0
}
exports.help = {
name: 'nick',
description: "İsim değiştirmeye ne dersin yakışıklı",
usage: 'nick <yeni nick>'
}