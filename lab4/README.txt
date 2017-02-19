# Lab 4 - Joseph Haggerty

## Introduction

The purpose of this lab is three-fold:
*Allowing for multiple pages with a mixture of static and dynamically generated content.
*Beginning to apply good software design principles by segmenting logic into their own modules.
*Getting experience from playing with Node.js emitters.

This lab integrates content from both labs 2 and 3, which involved getting hourly weather forecasts and providing a basic calculation service, respectively. 

## Requirements

*Node.js
*jQuery

The necessary files to run this webpage are as follows:
*banner.png
*calculator.js
*client.js
*index.html
*jquery-3.1.1.min.js
*key.txt [in parent directory]
*server.js
*weather.js

## Installation
The main page, which is the file "index.html," should not be opened directly in a browser. Instead, open a command-line, such as Command Prompt, navigate to the directory containing server.js, and run the command "node server.js" without quotes. Next, open a browser and type the URL "localhost:8080" as the server is set to listen to port 8080. The server will then display index.html as the main page and you can begin using the links in the navigation area to the left to try out the calculation and weather services. The "HOME" link goes back to the main page.