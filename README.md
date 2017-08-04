<b>Learn how to use IFTTT service with micro:bit</b>
https://youtu.be/OlgpsWtcKig

I created an Android app to listen to the micro:bit bluetooth event service (event value 88 and event id 8888) and use the IFTTT (If This Then That) service (ifttt.com) to send an alert to Telegram messenger. The reed switch sensor connected to micro:bit on Pin 0 and monitor the analog value. If value is more than 3 (the door is opened), send the bluetooth event service to Android app.

You need to register the Webhook service from IFTTT and create a new applet.
- For "This": Choose Webhook service, get the key and replace <change_with_your_IFTTT_key> with your key.
  Create the event name and replace <<IFTTT_event> with yours.
- For "That": Choose Telegram service and action "Send message" 


	if (value == 88) {
		$.ajax({
			url: 'https://maker.ifttt.com/trigger/<IFTTT_event>/with/key/<change_with_your_IFTTT_key>',
			type: 'POST',
			success: function(response) {
				console.log(response);
				document.getElementById('info').heading = response;
		    },
		    error: function(error) {
				console.log(error);
				document.getElementById('info').heading = error;
		    }
		});
	}
	

Complete Source code:
https://github.com/ferrygun/micro-bit-IFTTT

Microsoft Makecode:
https://github.com/ferrygun/micro-bit-IFTTT/blob/master/sensor.js
(generate .hex file and drag to micro:bit)

Android .APK:
https://github.com/ferrygun/micro-bit-IFTTT/blob/master/android-debug.apk

Platform:
Samsung J7 Android 6


