# Lab 5 - Joseph Haggerty

## Introduction

The purpose of this lab is three-fold:
* Getting experience with MySQL databases, including how to install/set up a database and creating/populating relational tables through the MySQL command line interface
* Interfacing with a MySQL database through a Node.js server
* Gaining more experience in designing an application/website

## Requirements

* jQuery (3.1.1 or later)
* MySQL Community Server
* Node.js
* body-parser
* express
* mysql

## Installation

First, import the schema from the DumpLab5Schema.sql file into your database with the command:

"mysql -u <username> -p < DumpLab5Schema.sql"

The main page, which is the file "index.html," should not be opened directly in a browser. Instead, open a command-line, such as Command Prompt, navigate to the directory containing server.js, and run the command "node server.js" without quotes. Next, open a browser and type the URL "localhost:8080" as the server is set to listen to port 8080. The server will then display the main page and you can begin using the links in the navigation area to the left. Click "HOME" to return to the main page anytime.