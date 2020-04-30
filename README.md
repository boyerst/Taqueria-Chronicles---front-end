                 
                                      **WIRE FRAMES**


https://github.com/boyerst/Taqueria-Chronicles---front-end/issues/1







                            **TAQUERIA CHRONICLES - User Story**

* Upon launching, the user is sent to a single page React application

* The user is given an option to either log in or register

* User can keep track of their favorite Taquerias in Chicago by storing them in the app's database

* User will be able to add a Taqueria by using the CREATE(/taquerias) route
  
  * There will be a link on the main INDEX(/taquerias) page that will reveal a modal showing all inputs for the user to add a Taqueria

  * User will be able to enter these values for each Taqueria: Name, Address, Rating, Recommendations

* After entering information into the app database, the user will be able to view their posts:
  
  * From the main INDEX(/taquerias) route: each Taqueria will live on a 'card' on the main page


* If the user wishes to, they will also have the ability to alter the information they have entered into the database.

* They can do this by clicking on one of two different buttons that both live on the Taqueria cards on the main page:
  
  * Update button: by using the UPDATE(/taquerias/id) route, the user can update any previously entered information regarding a Taqueria

    * Clicking this button will reveal a modal that displays editable inputs that give the user freedom to alter any information that they wish

  * Delete button: by using the DELETE(/taqueria/id) route, the user may delete any previously entered Taqueria 'cards'

    * Clicking this button will instantly delete the targeted Taquerias

* The user will be able to logout anytime via a 'logout link' on the top of the page


STRETCH:
Import star icons for rating system


