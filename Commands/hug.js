//here.

const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
  
  let user = message.mentions.users.first()
  const random_hug_img = ["https://cdn.discordapp.com/attachments/535027866459701268/540522110695636992/hugs.png", "https://media1.tenor.com/images/c6e1e22512ebf5a1a4fd481cb91e9259/tenor.gif?itemid=9214649", "https://media1.tenor.com/images/05f20a739d4d329786cdc1ed31f975bd/tenor.gif?itemid=4184944", "https://media.giphy.com/media/t0K54lpOGUmlO/giphy.gif", "https://media.giphy.com/media/7THxd1beOYjF6/giphy.gif"]
  
  const randomized = random_hug_img[Math.floor(Math.random() * random_hug_img.length)]
  
  let act = 'You have been hugged by '
  if(!user)
  {
    let embed = new Discord.RichEmbed()
  .setColor('blue')
  .setDescription(`:purple_heart: Hugs you`)
  .setImage(randomized)
  message.channel.send(embed);
  }
  
  else if(user.id === '538726771038879753')
  {
    let embed = new Discord.RichEmbed()
  .setColor('blue')
  .setDescription(`:purple_heart: Awww... you're so sweet!`)
  .setImage(randomized)
  message.channel.send(embed);
  }
  
  else
  {
  let embed = new Discord.RichEmbed()
  .setColor('blue')
  .setDescription(`:purple_heart: ${user.username}#${user.discriminator} ${act}${message.author.tag}`)
  .setImage(randomized)
  message.channel.send(embed);
  }
}

module.exports.help = {
  name: "hug"
}
