const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey: 'you api',
  apiSecret: 'you secret!',
  applicationId: 'your appliation id',
  privateKey: 'full directory of your private.key',
},{host:'sanbox URL',port:80},{debug:true})


nexmo.dispatch.create("failover", [
{
    "from":  { "type": "whatsapp", "number": "virtual number" },
    "to":   { "type": "whatsapp", "number": "your mobile" },
    "message": {
     "content": {
      "type": "text",
      "text": "Test from George's dispatch API"
    }
    },
    "failover":{
      "expiry_time": 600,
      "condition_status": "read"
    }
  },

{

    "from": {"type": "sms", "number": "dispatch1"},
    "to": { "type": "sms", "number": "your mobile"},

"message": {

"content": {

"type": "text",

"text": "This is SMS #2 sent from the Dispatch API"

}

}

}],

(err, data) => {

if (err) {

console.log('logging after error !!!'),
console.log(err)
} else {

console.log(data.dispatch_uuid);

}

}

)

