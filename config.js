const fs = require('fs-extra')

if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })

//═══════[Required Variables]════════\\

global.owner = process.env.OWNER_NUMBER.split("94760310266")

global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Sahan:Sahan123456@cluster0.2s8k9t2.mongodb.net/"

global.port= process.env.PORT || 5000

global.email = 'sam@sec.live'

global.github = 'https://github.com/sahanaya2006/prabathLK-PRABATH_MD'

global.location = 'Sultanpur IN'

global.gurl = 'https://instagram.com/' // add your username

global.devs = '94762280384';

global.website = 'https://github.com/sahanaya2006/prabathLK-PRABATH_MD' //wa.me/+94762280384

global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/H062oEI.jpeg'

module.exports = {

  OPENAI_API_KEY:process.env.OPENAI_API_KEY || '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',

  botname: process.env.BOT_NAME || 'PRABATH-MD',

  art: process.env.AUTO_RESTART || 'true',

  sudo: process.env.SUDO || '94762280384',

  alivepic: process.env.ALIVE_IMG || 'https://telegra.ph/file/ad25b2227fa2a1a01b707.jpg',

  alivemsj: process.env.ALIVE_MSJ || '*POWERD BY PRABATH-MD* 🎊',

  ownername:process.env.OWNER_NAME || 'PRABATH',

  sessionName: process.env.SESSION_ID || 'FCut3PIgDMpgbDMRIXQS8LqRUz4koRgvMLza23bBe1A',

  author: process.env.PACK_INFO.split(";")[0] || 'author', 

  auto_read_status : process.env.AUTO_READ_STATUS || 'false',

  packname: process.env.PACK_INFO.split(";")[1] || 'Name',

  autoreaction: process.env.AUTO_REACTION || 'off',

  antibadword : process.env.ANTI_BAD_WORD || 'fuck',

  alwaysonline: process.env.ALWAYS_ONLINE || 'true',

  antifake : process.env.FAKE_COUNTRY_CODE || '',

  readmessage: process.env.READ_MESSAGE || true,

  HANDLERS: process.env.PREFIX || ['.'],

  warncount : process.env.WARN_COUNT || 3,

  disablepm: process.env.DISABLE_PM || "flase",

  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',

  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',

  antilinkaction: process.env.ANTILINK_ACTION || 'remove',

  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || 'sahanprabha206',

  HEROKU_API_KEY: process.env.HEROKU_API_KEY || 'a8149aa3-ba4a-43ba-9278-685a02d2f929',

  BRANCH: 'main',

  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',

  OPENAI_API_KEY: process.env.OPENAI_API_KEY || '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',

  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,

  LANG: process.env.THEME|| 'PRABATH-MD',

  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE

};

let file = require.resolve(__filename)

fs.watchFile(file, () => {

	fs.unwatchFile(file)	
	
	console.log(`Update ${__filename}`)

    delete require.cache[file]

	require(file)

})
