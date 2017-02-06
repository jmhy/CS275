# Lab 2 - Joseph Haggerty

## Introduction

This code will display a basic webpage that allows a user to enter their Weather Underground API key and get weather data in their current area, as per the requirements of Lab 2. A JavaScript script handles the input, querying Weather Underground (via AJAX and jQuery), and formatting the data to be displayed.

## Files

The necessary files to run this webpage are as follows:
*jmh463_lab2.html
*jquery-3.1.1.min.js
*weather.js

## Installation

Simply place the previously mentioned files into a folder of your choosing and open the .html file with any web browser. All three files must be in the same folder.

## Using the Webpage

After opening the webpage in a browser, enter your Weather Underground API key into the textbox and click "Submit." Your zipcode will be located and displayed, followed by a display of hourly forecasted weather data. You can optionally click the "Clear" button to clear the data and the input textbox. If there is an error with fetching the data, such as a bad API key or no Internet connection, then "Error obtaining weather data!" will be displayed. 