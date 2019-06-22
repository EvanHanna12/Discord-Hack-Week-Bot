const Discord = require('discord.js');

module.exports.run= (client, message,args)=>{
  
  let helpembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setTitle("Showing help commands")
  .addField('``serverinfo`` shows you information related to server youre in','\nUsage: w!serverinfo')
  .addField('``info`` shows you information of user','\nUsage: w!info')
  .addField('``stats`` shows you stats of your computer','\nUsage: w!stats')
  .addField('``poll`` creates poll for voting','\nUsage: w!poll')
  .addField('``rps`` play rock paper scissors with me~','\nUsage: w!rps')
  .addField('``lock`` locks down the channel for [min,hrs,secs]','  \nUsage: w!lock')
  
  .setFooter('Commands');
  message.channel.send(helpembed);
}
