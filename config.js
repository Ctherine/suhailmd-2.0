const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : ""447789766146




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  ||SUHAIL_06_47_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDQzLFxuICAgICAgICAyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgNTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDg0LFxuICAgICAgICA5NyxcbiAgICAgICAgOSxcbiAgICAgICAgNzksXG4gICAgICAgIDM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE5LFxuICAgICAgICA0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDY5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMixcbiAgICAgICAgMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgODAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDksXG4gICAgICAgIDEzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDgsXG4gICAgICAgIDExNixcbiAgICAgICAgNjksXG4gICAgICAgIDE0NixcbiAgICAgICAgNzUsXG4gICAgICAgIDQyLFxuICAgICAgICA2NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MixcbiAgICAgICAgMTMyLFxuICAgICAgICA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDcxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAwLFxuICAgICAgICA2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDY4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXc1BJc0RNaks1VjhpQ3RTdS9sSUhTYUsxQld1aXhGQ0lKQmhiWElLb3gwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ0Nzc4OTc2NjE0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0UwRkRCM0NGNjI0QTA1MDFDMjBEQjBBQTYyMTM4REVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxMzk0MDIxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlV3WmM4R2J1VFNHTGVzaXVuazAtYmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTRiMmNiMmUtMTliZS00MzY4LWIzNTYtZmU3NzlkNWI0ZjM4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcyLFxuICAgICAgMTkwLFxuICAgICAgMTA5LFxuICAgICAgMTg5LFxuICAgICAgMTkwLFxuICAgICAgOTAsXG4gICAgICA3MCxcbiAgICAgIDEyLFxuICAgICAgNzksXG4gICAgICA3NSxcbiAgICAgIDk1LFxuICAgICAgMTc0LFxuICAgICAgMjUzLFxuICAgICAgMjE0LFxuICAgICAgMjQxLFxuICAgICAgNSxcbiAgICAgIDIwMCxcbiAgICAgIDEzMixcbiAgICAgIDIzOSxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OCxcbiAgICAgIDU4LFxuICAgICAgNjQsXG4gICAgICAxMDQsXG4gICAgICAxMzYsXG4gICAgICAyMzcsXG4gICAgICAxMDIsXG4gICAgICAxMTAsXG4gICAgICAyMjMsXG4gICAgICAxNjYsXG4gICAgICAxNjIsXG4gICAgICAzOCxcbiAgICAgIDU5LFxuICAgICAgMjQ5LFxuICAgICAgMTQsXG4gICAgICAxNDUsXG4gICAgICA5OSxcbiAgICAgIDE5MSxcbiAgICAgIDI0LFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVEUTEzVEVLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0NDc3ODk3NjYxNDY6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NjY3Nzk2ODA2MDU0Mzo0OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNWGgrOThHRU4zenk3a0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJhR0dsd3h0ZDl0aTMyYVg2aEhkMENTVGZ0c0ZrYVdsMnZPRjR3cWEwbkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT1E3NjVyTnRMSTQvRlJRQmdlajd3WHJtbXhjUmhQR1lUbDliMEVwU3dCeU8yR294NWlGaVR5cE0zZWxJWHNRNG84S2d3TlIrMk9aYkkxTUM2cnBXQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOVkvelN6T09ZSEFyZUx1NGIrcEtNalkzL0pWYVdieHBQVGRNNlBTOW55UHRIWWxjK0EzUlArblVLRE9hdWpiRkY2aVBxNnNLT3dqT2tVbjJ0Nm5VQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDQ3Nzg5NzY2MTQ2OjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEzOTQwMTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLbVpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUttWi5qc29uIjogIntcImtleURhdGFcIjpcImdQVUpxMTJ4NXZHKzFSdnpkV2V2cTdWVlRRL2pCRVU0RDU4NXZRZTgzeXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgxMTg2OTg5MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Romeo-md",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
