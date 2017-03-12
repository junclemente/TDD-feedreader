# Test Driven Development (TDD) Using Jasmine

## Using Jasmine to test Feed Reader app - Udacity.com

This repository contains my code for the *Feed Reader Testing* project for the Front-End Nanodegree program at [Udacity.com](http://www.udacity.com "Udacity").

### How to use
To use and explore the Feed Reader app, you must download or clone this repository on to your hard drive. Once that is completed, open up the `index.html` file in your favorite modern browser. Use your favorite IDE or text editor to view and explore the files in this repository. 

In this particular application, there are three main files to pay attention to:

* `index.html` : which is opened in the browser to view the application

* `js/app.js` : which contains the main javascript code that allows this application to run

* `jasmine/spec/feedreader.js` : which contains the code for the unit tests for this application

### About this app
This application uses *Jasmine* and *Jasmine-jQuery* to perform unit testing on the Feed Reader application. *Jasmine* is a stand-alone library that you can add to your project and *Jasmine-jQuery* is an add-on library to *Jasmine* to be able to use jQuery in testing. More information can be found in their repositories:

*  [Jasmine](https://jasmine.github.io/index.html 'Jasmine')

*  [Jasmine-jQuery](https://github.com/velesin/jasmine-jquery 'Jasmine-jQuery')

### TODO

#### Future Tests
##### Clicking on a link in the menu:
Three tests have been added to ensure functionality that have to do with the sidebar menu. 

1. should expect for the proper link to open up and display in the main window.
2. should expect for the sidebar menu to automatically close.
3. should only be able to click a link in the menu when it is open. 

##### Future features
1. A future feature will be added to make the web page aware of the user's local time and will change the color scheme based on that time. A daytime color scheme is the one currently shown with a light background and darker text. A nighttime color scheme will need to be added. The daytime color scheme will be the default color scheme between 6am and 6pm during the users local time. The nighttime color scheme will be the default between 6pm and 6am. Testing will check (or force) the local time and make sure the color and background color match the corresponding color scheme (nighttime / daytime). One test will check for the nighttime scheme and another test will check for the daytime scheme. 
2. A button will be added to allow the user to toggle the color scheme from night to dark and vice versa. Testing will check to determine if clicking the button will change the color scheme and that clicking it again will change the color scheme back. 

