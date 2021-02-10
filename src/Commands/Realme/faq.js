const Permissions = require('../../data/Permissions');
module.exports.commandInfo = {
  trigger: 'faq',
  usage: 'faq [@mention(s)]',
  aliases: [],
  name: 'faq',
  description: 'Frequently Asked Questions',
  permissionsNeeded: Permissions.User,
};

const Config = require('../../Config');
const { MessageEmbed } = require('discord.js');

module.exports.handler = async function SendGuideUrl(message, client, data) {
  const content = message.content.toLowerCase();
  
  if (content.startsWith(`${Config.commandPrefix}faq`)) {
    const embed = new MessageEmbed()
      .setTitle('FAQs')
      .setColor(Config.colors.primary)
      .setDescription(
        "Need a question answered? Check here first."
      )
      .setURL(Config.resources.urls.guideUrl)
      .setFooter(`By Gamr13 and MrJeeves/davwheat`, '')
	  .addField([
	  {
		name: '1) I installed a custom ROM but I am bootlooping / stuck on the boot animation.',
		value:
		'Boot to recovery and format data.',
	  },
	  {
		name: 'How do I create a backup?',
		value:
		'Boot to recovery, select Backup, select **every** partition, and swipe. We strongly recommend copying the Fox / TWRP folder to a PC for safe keeping afterwards.',
	  },
	  {
		name: 'My phone in TWRP does not show up on PC when I plug it in'
		value:
		'Go to the home screen of TWRP, tap Mount and tap Disable MTP, then Enable MTP.',
	  },
	  {
		name: 'How do I update a custom ROM or Realme UI safely?',
		value:
		'1) Make a backup\n2) Install the latest zip or ozip\n3) When successful, tap Wipe Cache / Dalvik.\n4) If you are on a custom ROM, you may need to flash Magisk or Google Apps (GApps) again.',
	  },
	  {
		name: 'How do I backup my apps and app data if I want to change ROMs or back to Realme UI?',
		value:
		'You can use Migrate from the Google Play Store, once you open the app, it will give you instructions, you need root access for Migrate.',
	  },
	  {
		name: '(SafetyNet) How do I access my bank apps or other apps that block me from using them when rooted?',
		value: 
		'Type r/magisk to find out.',
	  },
	  {
		name: 'How do I force 90Hz in apps in Realme UI?',
		value: 
		'run this command in ADB (You need to do this every reboot): `su -c service call SurfaceFlinger 1035 i32 0`',
	  },
	  {
		name: 'How do I theme apps?',
		value: 
		'Use Swift Installer (Requires root)',
	  },
	  {
		name: 'Which devices get support for how long?',
		value:
		'The Realme X series and Realme Pro series of devices will get 2 years of support, this includes 2 major versions of Android (e.g. 9 - 11). Non-Pro or Non-X models will only get 1 year of support, this includes 1 major Android update (e.g 10 -11)',
	  },
	  {
		name: 'Should I debloat Realme UI?',
		value: 'It is not recommended to debloat Realme UI as it can break a lot of functions of it, and in some cases you wont be able to boot into Realme UI until you factory reset through recovery mode.',
	  },
	  {
		name: 'How do I force reboot my device?',
		value: 'Hold the volume up and power buttons.',
	  },
	  ]),
      .addField(
        'Get stuck?',
        `Just pop us a message in <#${Config.resources.channelIds.realme_x_series}> and we'll help you as best we can.`,
        false
      );
	 .setFooter(`${Config.resources.emojis.stopwatch.icon} Calculating...`);
  
let pings = '';

    if (message.mentions.members.length > 0) {
      pings = 'Hey ';

      Array.from(message.mentions.members.keys()).forEach((userId) => {
        pings += `<@${userId}> `;
      });
    }

    // Send the embed to the same channel as the message
    await reply.edit({
      content: `${Config.resources.emojis.success.code} Done! ${pings}`,
      embed: embed,
    });

    setTimeout(async () => {
      embed.setFooter(
        `${Config.resources.emojis.stopwatch.icon} Message generated in ${reply.createdAt - message.createdAt}ms`
      );
      await reply.edit({ embed: embed });
    }, 250);

    // handled
    return true;
  }

  // not handled
  return false;
};