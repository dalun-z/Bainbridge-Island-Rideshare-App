# Bainbridge-Island-Rideshare-App

**Team member: Andrew Rose, Dalun Zhang, Jireh Radilla Zarate, Joe Lindbeck, Justin Erickson, Thuan Nguyen**

**Proposed Project Start Date: 01/10/2022**

**Proposed Project Expected End Date: 12/01/2022**

**Client: The City of Bainbridge Island**

**Client Contact: Mark Epstein**

**Client Contact Email: (mepstein@bainbridgewa.gov)**



## Background

### Purpose

Facilitate carpooling between residents of Bainbridge Island by providing a non-commercial platform for residents to list and find carpool opportunities. User experience will be further enhanced by matching commuters.

### Description

The Bainbridge Island Carpool project is to build a rideshare app for the residents on Bainbridge Island. The rideshare app is similar to Waze or SmartRideShare, mainly for residents who need a ride (e.g. to school, to a pub) to find other residents that have a ride to give. Client also wants the app to have a ride-hailing function for a City-sponsored shuttle.


## For developers

### SUPER HELPFUL LINK : https://reactnative.dev/docs/getting-started !!!


### Setting up the development enviornmnet on your local machine
- Download & Install Node.Js from website (the LTS version)
- Run 'npm -v' on your terminal to check the version of your npm and node.js version
- To install expo on your pc
```
npm install -g expo-cli
```

### Routines to setup repo on your machine:
```
git clone $ThisRepoURL$
cd BICRideshare
npm start 
```

**if not working, error message says 'Unable to find expo in this project - have you run yarn / npm install yet?'
PLEASE ignore the error message and DO NOT try to troubleshoot it yourself, it will just make it worse
PLEASE follow the steps below:**
```
npm install expo
npm install
/*Then pray*/
npm start
/*It should work now*/
```

https://www.youtube.com/watch?v=0-S5a0eXPoc&t=581s (Video produced by "Programming with Mosh", contents of how to build an app with React Native. Please take some time to take a look at it if you have question.)

https://www.youtube.com/watch?v=J_Clau1bYco (Video produced by "ProgrammingKnowledge2", contents of how to config GitHub on Windows, if you have problem doing that, please watch this.)

### Setup Navigation between the screen

- To install & setup navigation
```
npm install @react-navigation/native @react-navigation/native-stack

```
- To install Dependencies
```
expo install react-native-screens react-native-safe-area-context
```
(https://reactnative.dev/docs/navigation) Read the React Native documentation if you have any question.

### **PLEASE** create your branch before you start working on the project

https://medium.com/@jonathanmines/the-ultimate-github-collaboration-guide-df816e98fb67 (Collaboration guide)

### 'assets' folder store all the images and videos of the app

### To run your project, navigate to the directory and run one of the following npm commands.
- cd BICridershare
- npm start   # you can open IOS, Android, or web from here, or run them directly with the commands below.
- npm run android
- npm run ios   # requires an IOS device or macOS for access to an IOS simulator
- npm run web



