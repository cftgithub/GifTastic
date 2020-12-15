# GifTastic GIPHY Sports
A dynamic web page "Powered by GIPHY". [Click for Demo](https://cftgithub.github.io/GifTastic/)

## Purpose: 
To create an entertaining interactive webpage using GIPHY API.

## Features:
* Category buttons allowing users to click on pre-selected categories to display gifs.
* An input section allowing users to add additional categories.
* A Rating filter to control the highest rating to be displayed.
* 5 random gifs are displayed each time a category button is clicked. Each click will add images to the page. Previously displayed images will not be overwritten.
* The title and rating of each gif is displayed below the gif image.
* Clicking the image will change the image from "still" to "animate", and vice versa.
* Mobile responsive.

## How It's Done:
* An API key is necessary to access GIPHY API database. You can get your free key at [Giphy Developers](https://developers.giphy.com/).
* To create category buttons, an array is created to hold the name of each category.
* A form field allows users to input the name of a new category and click "Submit" button or hit enter to add the new category name to the array. The form field will be emptied after each submit. Array.push() method is used to add the new category name to the array. 
* A for-loop is used to append each string in the array as a button.
* Clicking on a category button will call GIPHY API database. You can set your call to search for different endpoints such as for a specific number of endpoints, trending endpoints or random endpoints. A random endpoint was selected for this project.
* Each button click will return 5 still images of random gifs. Each additional clicks will add new images to the beginning of the existing images.
* Each image will have a "still" and "animate" property. Clicking on the image will change the property and alternate between "still" and "animate".
* GIPHY provides a title and rating for most gifs in the database. If the information is available, it will be displayed below the image.
* An input box is available for the user to enter the highest rating to filter for, if desired. Possible ratings are G, PG, PG-13 and R. Entering "PG" in the input field will return gifs that are rated G or PG only.

## Challenges:
1. GIPHY image sizes are varied (different height and width), this creates a messy feel when displayed on the page. 
1. Each endpoint has different parameters. I wanted each call to return 5 gifs but the random endpoint only returns one gif at a time. The search endpoint will allow me to determine the number of gifs to return but the gifs returned from each category are the same for each call (boring). 

## Resolutions:
1. To create a clean webpage, the image, title and rating are displayed on responsive cards with pre-determined widths, creating an organized grid which is also responsive to different viewports.
1. To resolve the issue with endpoints not meeting my criteria, I decided to use the random endpoint and modified each button click to request 5 API calls simultaneously. 

## Technologies:
* GIPHY API
* jQuery
* JavaScript
* Bootstrap
* HTML
* CSS
