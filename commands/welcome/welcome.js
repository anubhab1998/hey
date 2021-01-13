module.exports = ({
    name: "welcome",
    aliases: ['testwelcome'],
    code: `
    $getServerVar[wmessage]
$title[$getServerVar[wtitle]]
$thumbnail[$getServerVar[wthumbnail]]
$description[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[wdescription];{mention};<@$authorID>];{server};
$serverName];{user(proper)};$username[$authorID]#$discriminator[$authorID]];{server(members)};$membersCount];{username};$username]]
$color[00ffff]

    
    `
});