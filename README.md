# Documentation

## Description
This widget allows you to send a pre-filled HTML email from your phone. It will let you choose which native app to use and open an email object in that application.

## Typical usage scenario
*	A user uses the contact button in a hybrid app, which should create a predefined e-mail with rich formatting.

## Features and limitations
*	The e-mail can be send using the mobile app of your choice (both iOS and Android).
*	The To, CC, Subject and Body field can be filled in.

## Configuration
1.	Create an email entity, containing at least To, CC, Subject and Body attributes.
2.	Create a forward-screen, which takes an email object as page parameter, containing the widget in the data view.
3.	Configure the widget to pass the correct attribute values.
