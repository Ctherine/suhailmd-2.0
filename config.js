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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "447789751820";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_02_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDM1LFxuICAgICAgICA0NixcbiAgICAgICAgNTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzLFxuICAgICAgICAyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI0LFxuICAgICAgICA3OCxcbiAgICAgICAgODAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxODIsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDY2LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyLFxuICAgICAgICA5OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQxLFxuICAgICAgICA3NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDgzLFxuICAgICAgICAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI2LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDg0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4LFxuICAgICAgICA1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDUzLFxuICAgICAgICAyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY5LFxuICAgICAgICAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDkyLFxuICAgICAgICA0OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyLFxuICAgICAgICA2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyLFxuICAgICAgICA1OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMixcbiAgICAgICAgMjE5LFxuICAgICAgICA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDUsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDg1LFxuICAgICAgICA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA4LFxuICAgICAgICA3OSxcbiAgICAgICAgODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA5OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NixcbiAgICAgICAgNzAsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDYxLFxuICAgICAgICA0NixcbiAgICAgICAgMTY3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyLFxuICAgICAgICA2MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDYyLFxuICAgICAgICA5NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSHVORkRUSFE1UTRaZzYvMDNTNWhQSE5IMUZJazV3eStmV2ttVkxEM25Xbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYjNUSFRSbEFRcldIMjBGT19OaXFFUVwiLFxuICBcInBob25lSWRcIjogXCI3NDc4NmFkMS1hNjlmLTQ5ZDEtYTA1Ni1iNzg1OWExYjk2ZGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYyLFxuICAgICAgMTQxLFxuICAgICAgMTMyLFxuICAgICAgMjM4LFxuICAgICAgOTIsXG4gICAgICA0OCxcbiAgICAgIDE4LFxuICAgICAgMTQ4LFxuICAgICAgMjI2LFxuICAgICAgOTMsXG4gICAgICA4MSxcbiAgICAgIDE2NCxcbiAgICAgIDIzMixcbiAgICAgIDEyMCxcbiAgICAgIDI0LFxuICAgICAgMCxcbiAgICAgIDc2LFxuICAgICAgNTksXG4gICAgICA0MSxcbiAgICAgIDExMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDcsXG4gICAgICAxNzgsXG4gICAgICAxMSxcbiAgICAgIDEwMixcbiAgICAgIDkyLFxuICAgICAgMjAsXG4gICAgICA2NCxcbiAgICAgIDM4LFxuICAgICAgMTQsXG4gICAgICAyMTcsXG4gICAgICAzMCxcbiAgICAgIDIxOCxcbiAgICAgIDEwMyxcbiAgICAgIDIwLFxuICAgICAgMTMxLFxuICAgICAgNDMsXG4gICAgICAxNDksXG4gICAgICA1NSxcbiAgICAgIDE3MCxcbiAgICAgIDExMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSM0E0RzJQUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDQ3Nzg5NzUxODIwOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTU5NDIxMzQ2MjIwMzoyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMcTIyTElGRU9xRXo3a0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlB4bHk5bzJCMXdleE9MSHZzM2lld3N4VlkzWGl4TVZ3S2txeGVMajlnbGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ1ZLY0tlMTBLSktPUjdyOE8vckZKamJ6MzRISTJMK3BqSHhoSnNIUEwrZGRtYkJ6MGt6RTlkemlwcitkYWdxVmZJQU1xTDBQYytVam9pcllVWHZ0QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicjlOYTQ5TzJsa2RjZkllSE90YnZ4czAvMTdoV213eElnQllxZUVIeXVtNW1xWllDeWo4eFBER3ZnUEFkNEk0NmJLb1FKU0ZrYmo3RjB1OGJOcjJUaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDQ3Nzg5NzUxODIwOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE0NDUzNTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJcGhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlwaC5qc29uIjogIntcImtleURhdGFcIjpcIksxWThuREUveTdibTJIK085SWxkNTNINEpub0ZRdEdiVzJaTUtNSXNwN0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ0ODQ4MzY0MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMTQ0NTI1NTI1MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Romeo md",


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
