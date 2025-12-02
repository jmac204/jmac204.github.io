// SERVICE WORKER FOR DAILY NOTIFICATIONS AT NOON

const loveReasons = Array.from({length:50},(_,i)=>"Love Reason "+(i+1));

self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",()=>self.clients.claim());

// Fire daily at noon
async function sendNotification(){
  const random=loveReasons[Math.floor(Math.random()*loveReasons.length)];
  self.registration.showNotification("Daily Reason I Love You ❤️",{
    body: random,
    icon: "icon.png"
  });
}

self.addEventListener("periodicsync",event=>{
  if(event.tag==="daily-love") event.waitUntil(sendNotification());
});
