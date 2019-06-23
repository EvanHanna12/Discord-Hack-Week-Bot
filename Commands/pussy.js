exports.run = async (client, message) => {
    if (!message.channel.nsfw) return message.channel.send("🔞 This channel has no NSFW option enabled.");
    const randomPuppy = require('random-puppy');
    var subreddits = [
        'pussy',
        'rearpussy',
        'simps',
        'vagina',
        'MoundofVenus',
        'PerfectPussies',
        'spreading'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub).then(url => {
      message.channel.send({
        embed: {
          color: 0xDF9C9D,
          author: {
            name: client.user.username,
            icon_url: client.user.displayAvatarURL
          },
          image: {
            url: url
          }
        }
      });
    });

  };

module.exports.help = {
    name: "pussy",
    category: "nsfw"
};
