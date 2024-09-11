require('dotenv').config()
const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

async function sendMessage() {
    const message = await twilio.messages.create({
        body: 'Hello, this is a test message using Twilio with Node.js',
        from: 'your_twilio_trial_phone_number',
        to: process.env.PHONE_NUMBER,
        mediaUrl: ['media link']
    })

    console.log(message)
}

async function makeCall() {
    const call = await twilio.calls.create({
        // url: 'link to a .mp3 file or TwiML .xml file',
        // method: 'get',
        twiml: `
            <Response>
                <Say>Hello, this is a text-to-speech message</Say>
                <Pause length='3'></Pause>
                <Say>Thank you for waiting</Say>
            </Response>
        `,
        from: 'your_twilio_trial_phone_number',
        to: process.env.PHONE_NUMBER
    })

    console.log(call)
}

//sendMessage()
//makeCall()