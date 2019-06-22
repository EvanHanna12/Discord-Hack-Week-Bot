const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
  
  let user = message.mentions.users.first()
  let act = 'You have been kissing by '
  if(!user)
  {
    let embed = new Discord.RichEmbed()
  .setColor('blue')
  .setDescription(`:purple_heart: Yay. *kissing*`)
  .setImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/1a7af996-3f2e-440c-bdda-88de43154a23/dbppyd4-513a1b75-e838-4d82-b52f-a2e05ef2f527.png")
  message.channel.send(embed);
  }
  
  else if(user.id === '538726771038879753')
  {
    let embed = new Discord.RichEmbed()
  .setColor('blue')
  .setDescription(`:purple_heart: *kissing*`)
  .setImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/1a7af996-3f2e-440c-bdda-88de43154a23/dbppyd4-513a1b75-e838-4d82-b52f-a2e05ef2f527.png")
  message.channel.send(embed);
  }
  
  else
  {
  let embed = new Discord.RichEmbed()
  .setColor('blue')
  .setDescription(`:purple_heart: ${user.username}#${user.discriminator} ${act}${message.author.tag}`)
  .setImage("")
  message.channel.send(embed);
  }
}

module.exports.help = {
  name: "kiss",
  category: "Other",
}
