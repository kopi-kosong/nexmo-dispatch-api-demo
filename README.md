# nexmo-dispatch-api-demo
My playground of coding and demo. 
The demo is based on nexmo dispatch API. 

# Run the App Locally

## Prerequisites
* You have registered an Nexmo Account. If not, please kindly go to https://dashboard.nexmo.com/ to register an account.
* Download the source from git.
* To send Whatsapp, the application is using APAC Sandbox, and a fixed whatsapp ID. It wont work if you use a different ID 

## Prerequisites
Run the following command to install dependencies.

```bash
npm install
```

## Configuring the application

Assign values to the following in dispatchAPIWhatsappFailover.js file:

* apiKey: 'YOUR NEXMO API KEY'

* apiSecret: 'YOUR NEXMO API SECRET'

* applicationId 'YOUR MESSGAING API APP ID'

* privateKey ='YOUR PRIVATE KEY OF THE APP'

* You need to customized API server URL to use APAC Sandbox Server
* A fixed Whatsapp virtual number

## Running the application
```
 node dispatchAPIWhatsappFailover.js
```

 
## Test the Application

1. From your mobile, send a Whatsapp Message to the fixed whatsapp phone number which you confirgured as from number in application.
In this way, you tigger a 24 hour message window with the whatsapp virtual number. During the next 24 hours, nexmo whatsapp API can send text message withou need to follow a template to your mobile. This is very important, otherwise, you wont recieve any message, unless you have approved templates by Whatsapp and send a template to your mobile.

e.g. If you want to use virtual "441234567890" as the whatsapp virutal number to send a message to your mobile 6590110000, then before the test, you need to firstly use 6590110000 to send a text message to "441234567890". 

2. Dont read the whatsapp message and wait for other 10 minutes.

3. You will receive a SMS from your virtual number.

