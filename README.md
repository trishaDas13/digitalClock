# digitalClock

## Hoisting Link: https://trishadas13.github.io/digitalClock/
<hr>
<h2> 🟡 HTML code explanation: </h2>
Main Container (div class="main"): This container holds the clock display and the buttons to switch between 12-hour and 24-hour clock formats.

Time Containers (div class="times"): Inside the main container, there are three time containers for hours, minutes, and seconds, each containing:

A h1 element with a class (e.g., "hour") to display the corresponding time value.
A p element to label the time unit (e.g., "Hour," "Minute," "Second").
AM/PM Indicator (div class="ampm"): This empty container seems to be a placeholder for displaying the AM or PM indicator, which is commonly used with 12-hour clocks.

Buttons Container (div class="btns"): This container holds two buttons for switching between clock formats.

Button 1: The first button is labeled "12-hour-clock," indicating that clicking it might change the clock format to a 12-hour clock.

Button 2: The second button is labeled "24-hour-clock," suggesting that clicking it could change the clock format to a 24-hour clock.
<hr>
<h2> 🟡 CSS code explanation: </h2>
Font Import: The code imports the 'Playpen Sans' font from Google Fonts.

Universal Reset: The code resets the margin, padding, and box-sizing for all HTML elements to ensure consistent styling.

Body Styles: The body element has a background image applied, which is set to cover the entire viewport. The content is centered both vertically and horizontally using flexbox.

Main Container: The .main class styles a container that is 75vh in width. It uses flexbox to create a space between the child elements, aligning them vertically and horizontally.

Container Styles: The .container class is applied inside the main container, styling the content inside it. It uses flexbox to create space between its children.

Times Styles: The .times class is used to position elements relatively within it.

Heading Styles: The h1 elements have a fixed width, padding, and a semi-transparent background color.

Times Paragraph Styles: The p elements inside the .times class are absolutely positioned to appear at the bottom of the parent h1. They have a colored background and are styled with white text.

Button Styles: The button elements are styled with a background color, border, border radius, text color, and other properties to give them a distinct look. They have styles for active, hover, and focus states.

Button Hover Styles: When buttons are hovered, the background color and border color are adjusted.

Buttons Container: The .btns class is used to style a container for buttons. It's a flex container that arranges its children with space between them.

AM/PM Styles: The .ampm class is applied to an element styled with a background color, padding, border-radius, and margin. It appears to be used for an AM/PM indicator.
<hr>
<h2> 🟡 Javascript code explanation: </h2>

It selects various elements on the web page and stores them in variables:

hour, minute, and second: Represent elements where the hour, minute, and second of the time will be displayed.
ampm: Represents an element that displays "AM" or "PM" in the 12-hour format.
btn: Represents an array of button elements used for toggling between the clock formats.
flag: A boolean variable that tracks whether the 12-hour or 24-hour format is selected.
It defines two functions, clock12 and clock24, which are responsible for updating the time displayed on the clock in their respective formats.

Inside the clock12 function, it:

Gets the current date and time using the Date object.
Extracts the current hour, minute, and second from the date object.
Converts the hour to a 12-hour format, sets "AM" or "PM" accordingly, and handles midnight (12:00 AM).
Formats the time values with leading zeros.
Updates the hour, minute, second, and ampm elements with the new time values.
Inside the clock24 function, it:

Gets the current date and time using the Date object.
Extracts the current hour, minute, and second from the date object.
Formats the time values with leading zeros.
Updates the hour, minute, and second elements with the new time values.
It adds event listeners to the buttons:

The first button (btn[0]) is for the 12-hour format. When clicked, it sets the flag to true and uses setInterval to call the clock12 function every second (1000 milliseconds).
The second button (btn[1]) is for the 24-hour format. When clicked, it sets the flag to false and uses setInterval to call the clock24 function every second (1000 milliseconds).
<hr>
<h2> 🟡 Summary: </h2>
In summary, the HTML code sets up a clock display with separate sections for hours, minutes, and seconds, along with buttons to toggle between 12-hour and 24-hour clock formats. The AM/PM indicator is present but appears to be a placeholder in this code.
In summary, this code allows users to switch between a 12-hour and a 24-hour clock format, and it continuously updates and displays the current time accordingly. The flag variable determines which clock format to use, and the setInterval function updates the time every second.
<hr>
<h2> 🟡 UI: </h2>

![image](https://github.com/trishaDas13/digitalClock/assets/126088849/b28d0a2a-d36f-43d0-b2b8-d176ea913700)
