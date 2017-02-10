# Lab 3 - Joseph Haggerty

## Introduction

This code will display a webpage that implements basic client-server communication via Node.js. The user enters a seed value (positive integer), chooses a calculation method (factorial or sum of the seed), and sends the request to a local server to do the calculation. The local server is set to listen to port 8080. The server then sends the result back to be displayed on the webpage.

## Requirements

*Node.js
*jQuery

The necessary files to run this webpage are as follows:
*client.js
*jmh463_lab3.html
*jquery-3.1.1.min.js
*server.js

## Installation

Simply place the previously mentioned files into a folder of your choosing and open the .html file with any web browser. All four files must be in the same folder. If you wish the server.js script file to be in a separate directory, then an absolute path must be specified in the code.

## Using the Webpage
Using a command line, such as a Command Prompt, go to the directory containing this lab and run the command "node server.js" without quotes. Upon successful server setup, "Server Running" will be printed to the command line. Next, open up a web browser and type in the URL field "localhost:8080". The server will direct you to the main page, where you can enter your seed (positive integer) and calculation method. Click "Submit" to send the input to the server and it will return the appropriate calculation. If bad input is supplied or the server cannot be reached, an appropriate warning is displayed. When finished, shut the server down in the command line with Ctrl+C or kill the process via a task manager.