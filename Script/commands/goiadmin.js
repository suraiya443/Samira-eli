module.exports.config = {
 name: "goiadmin",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗖𝗵𝗮𝘁 𝗕𝗼𝘁",
 description: "Bot will rep ng tag admin or rep ng tagbot ",
 commandCategory: "Other",
 usages: "",
 cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
 if (event.senderID !== "100091449860035") {
 var aid = ["100091449860035"];
 for (const id of aid) {
 if ( Object.keys(event.mentions) == id) {
 var msg = ["যেভাবে মেনশন দিতাচত ,দেখে মনে হচ্ছে, তোর gf আমার বসকে দিয়া দিবি 😑🔪", "বস এখন ব্যস্ত আছে 🥲, কিছু বলতে হলে ইনবক্সে মেসেজ দিয়া রাখো ", "বস এক আবালে আপনারে মেনশন দিছে 😑🤦‍♂️", "মেনশন না দিয়ে আপনার ভাঙ্গাচুর বন্ধুবীকে আমার বস এর হাতে তুলে দেন 🫴🏾🔪😊", "Hasibur বস এক বলদে আপনাকে মেনশন দিচ্ছে 😪🥱", "বস Hasibur এখন আমার সাথে মিটিং এ ব্যস্ত আছে 🥲, কিছু বলতে হলে ইনবক্স এ গিয়ে বলেন 🔪🙂" ];
 return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
 }
 }}
};
module.exports.run = async function({}) {
 }
