const Discord = require("discord.js")

const TOKEN = "NDc1NjY5MjU5MTk2ODI1NjAx.Dkibaw.5BdF476RH9k7MF0n0wa9cZ5tEf0";

var bot = new Discord.Client();

var Fortunes = [
    "Yes",
    "No",
    "Maybe",
    "Dont even try"
];

const Prefix = "!";

bot.on ('message' , function(message) {
    console.log(message.content);
});

bot.on("ready" , function() {
        bot.user.setGame("legacy.my-serv.com");
      


});




bot.on("message" , function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(Prefix)) return;

    var args = message.content.substring(Prefix.length).split (" ");

    switch (args[0].toLocaleLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "ip":
            message.channel.sendMessage("legacy.my-serv.com");
            break;

        case "8ball":
            if (args[1]) message.channel.sendMessage(Fortunes[Math.floor(Math.random () * Fortunes.length)]);
            else Message.channel.sendMessage("Can't find your question");
            break;
        case "buycraft":
            var embed = new Discord.RichEmbed()
                .addField("BuyCraft" , "http://network-legacy.buycraft.net/")
                .setColor(0x4CFF59)
            message.channel.sendEmbed(embed);
            break;
        case "forums":
            var embed = new Discord.RichEmbed()
                .addField("Forums" , "http://community-gaming.net/forumdisplay.php?fid=9")
                .setColor(0x0051FF)
            message.channel.sendEmbed(embed);
            break;
        case "website":
            var embed = new Discord.RichEmbed()
                .addField("Website" , "http://mc.community-gaming.net/")
                .setColor(0xFF0013)
            message.channel.sendEmbed(embed);
            break;
        case "myinfo":
            var embed = new Discord.RichEmbed()
                .addField("Username:" , (message.author.username))
                .addField("ID:" , (message.author.id))
                .addField("Tag:" , (message.author.tag))
                .setThumbnail (message.author.avatarURL)
                .setColor (0x14C4D2)
            message.channel.sendEmbed(embed);
            break;
        case "report":
            let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!rUser) return message.channel.send("Couldn't find user");
            let reason = args.join(" ").slice(22);

            let reportEmbed = new Discord.RichEmbed()
            .setDescription("Report")
            .setColor(0x00ECFF)
            .addField("Reported User" , `${rUser} with ID: ${rUser.id}`)
            .addField("Reported By" , `${message.author} with ID : ${message.author.id}`)
            .addField("Time" , message.createdAt)
            .addField("Reason" , reason);

            

            let reportchannel = message.guild.channels.find('name' , "reports");
            if(!reportchannel) return message.channel.send ("Couldn't find reports channel.");
            
            message.delete().catch (O_o=>{});
            reportchannel.send(reportEmbed);
            message.channel.sendMessage("Your report has been received!");
            break;
        case "help":
            message.channel.sendMessage(`${message.guild.roles.find('name' , 'staff')} , ${message.author} need you help! `);
            break;
            

             
        default:
            message.channel.sendMessage("Invalid Command");

    }
});



    

bot.login(TOKEN);