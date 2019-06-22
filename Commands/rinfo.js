var moment = require("moment");

module.exports.run = async (client, message, args) => {

  var amount = message.content.split(" ").slice(1).join(" ");
   if (!amount) return message.channel.send(`You have not scored a role.`);

   let role = message.guild.roles.find("name", `${amount}`)
   if (!role) return message.channel.send(`The marked role name can not be found, do not mention it.`);

   var moment = require("moment");

   message.channel.send(`Here is the different information of role **${role.name}**`, {
       embed: {
           color: 0xDF9C9D,
           author: {
               name: client.user.username,
               icon_url: client.user.displayAvatarURL
           },
           fields: [{
                   name: "• Name:",
                   value: `${role.name}`
               }, {
                   name: "• ID:",
                   value: `${role.id}`
               }, {
                   name: "• Color:",
                   value: `${role.hexColor}`
               }, {
                   name: "• Created at:",
                   value: moment(role.createdAt).format("LL")
               }, {
                   name: "• Person having the role:",
                   value: role.members.size
               }
           ]
       }
   })
}

module.exports.help = {
    name: "rinfo",
    category: "utiles"
}
