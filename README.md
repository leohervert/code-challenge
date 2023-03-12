## React Code Challenge ##

### Part-01 - TV Shows list
As a user I want to see a list of existent TV Shows.
I should be able to favorite or unfavorite a TV Show, and filter the list handled by input text.
Also, I should be able to filter the favorited shows by clicking the View Favorites button.

### Acceptance Criteria
* Screen01.png should be the first when the App opens
* 
* This screen should have the same specs as the screenshots provided.	
* The shows list should be imported from a JSON file (see Technical Details).
* Clicking on the favorite icon should instantly favorite the show.
* React State should be used in order to add/remove favorites.
* When removing a show from favorites, a confirmation alert or prompt should be shown to confirm removal.
* CSS (css, sass, or less) should be utilized, including flexbox.
* Utilize React Hooks (useEffect, useState)
* At least three components should be built:
	* App
	* Filter
	* List


### Part-02 - Details Screen ##
As a user I should be able to view the details from a TV Show.

Acceptance Criteria
* This screen should have the same identity as the list screen (screen01), but the layout is up to you
* Clicking the show text should open a modal
* The modal's title should be the TV Show's name
* The screen should have:
	*	Poster {image.original}
	*	Summary {summary}
	*	IMDB link {externals.imdb}
	*	Any other information you find revelant
* When the user clicks on IMDb link, then the TV Show page (https://www.imdb.com/title/:id) should be opened in a new tab
* When there is no IMDb id, then the link should not be visible
* The modal should have a button/text to save or delete the TV show from favorites.
* When the TV Show is not favorited, then a favorite icon/text should be used
* When the TV Show is saved, then a remove from favorite icon/text should be used


### Part-03 - Extra
As a user, I would like to have my favorites stored for the next time I visit the application.
  #### Acceptance Criteria
*	A Save button should be created at the bottom  of the list
*	Clicking Save should add to a txt or JSON file the selected favorites
*	When re-opening/reloading the app, favorited elements should load
*	Preferred method for saving - utilizing actions/reducers

  #### Technical Details:
*	Language: HTML5, CSS (sass/less preferred), Javascript (preferably es6)
*	Frameworks/libraries: React / Redux
*	API: http://www.tvmaze.com/api
*	API call example: http://api.tvmaze.com/shows

	#### Notes
*	This assessment must be delivered within 3 days, you can send the project or give read rights to a repo, your choice.
*	You can use whatever third party library you want to accomplish these requirements.
*	Please provide a COMMENTS file, explaining:
	*	Main architecture decisions you've made and a quick explanation of why.
	*	List of third party libraries and why you chose each one.
	*	What in your code could be improved if you had more time.
	*	Good styling for proper design and UX is highly valued.
	*	Mention anything that was asked but not delivered and why, and any additional comments.
