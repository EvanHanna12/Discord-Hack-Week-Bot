const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
  
  const rando_lilac_pict = ["https://media1.tenor.com/images/153b2f1bfd3c595c920ce60f1553c5f7/tenor.gif?itemid=10936993", "https://media.giphy.com/media/l0Iy4KUJ0Q4prROOQ/giphy.gif", "https://media.giphy.com/media/RQGT68dpelzJS/giphy.gif"] //put multipe pictures here
  
  let randomized = rando_lilac_pict[Math.floor(Math.random() * rando_lilac_pict.length)]
  
  
  let embed = new Discord.RichEmbed()
  .setColor('blue')
  .setDescription("Go away!")
  .setImage(randomized)
  message.channel.send(embed);
}

module.exports.help = {
  name: "slap",
  category: "Other",
}
