# Photolabs

Welcome to PhotoLabs! A project using primarily **React** to learn how React works and the process of building and reusing **Components**.

PhotoLabs was created during the Lighthouse Labs Web Development Immersive program

## Final Product:

This is the view of the main page, shown with some photos liked and the corresponding notification inside of navigation bar.

!["Main page with Photo List view"](https://github.com/creynolds8/photo-labs/blob/main/docs/Photo-List.png?raw=true)

This is also the main page, however in this case the photos are being filtered by topic, in this case animal photos.

!["Main page filtered by topic"](https://github.com/creynolds8/photo-labs/blob/main/docs/Photos-by-Topic.png?raw=true)

When the user clicks on any image that image is displayed in a larger view.

!["Modal view for individual image"](https://github.com/creynolds8/photo-labs/blob/main/docs/Modal-View.png?raw=true)

When displaying the larger view of an image, similar photos are displayed underneath. These photos can also be clicked on to view a larger version of that image.

!["Similar images within modal view"](https://github.com/creynolds8/photo-labs/blob/main/docs/Modal-Similar-Photos.png?raw=true)

In the case of a network or server error, the main components (Navigation Bar and Photo List) are not displayed and an error message component is displayed instead containing information related to the error.

!["Error message displayed in the case of server or network error"](https://github.com/creynolds8/photo-labs/blob/main/docs/Error-Message.png?raw=true)
![]()


## Setup:

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

### [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

### [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
## Dependencies:
- ## Frontend:
  - React
  - React-dom
  - React-scripts
  - Web-vitals
  - Testing libraries can also be installed for functionality testing

- ## Backend:
  - Body-parser
  - Cors
  - Dotenv
  - Express
  - Helmet
  - Postgres
  - Socket.io
  - Websocket

## Extra Features:

- Within the modal view, a user can click on any of the similar images that are displayed to open up a modal view for that photo. I implemented this for a better user experience so the user can navigate directly to the larger view of that image rather than having to go back to the main page and look through all images to find the image they are looking for.

- Error Handling:
  - I chose to implement some cases of error handling in the event of issues with a users network or a server connection error. Since this project is run on two localhost ports these network errors can be simulated by shutting down the backend server and attempting to continue to use the frontend of the application.
  - The initial loading of topic and photo data is done with a **fetch** call. If the response to either of those calls is a bad response, an error is thrown and caught then dispatch is used to set that error within the global state being managed by the reducer function. If an error occurs, the main components are not rendered and in their place an error message component is displayed as shown in the image above.
  - When filtering by topic, a **fetch** call is also used so this is handled the same way as an error that occurs during the initial load. I made sure to implement this in the event a user was able to load the main page but then got disconnected before trying to filter by photo topic.
  - If a user is disconnected and then tries to load a modal view of a photo, the photos would not load because the photo URLs would not be able to fetched from their respective endpoints. This error is handled using the onError attribute within the image tag for the primary image which uses a callback to call the dispatch function and sets the error object in the same way as the above error handling.

## Questions and Concerns

If you have any questions or concerns please feel free contact me through Discord.

Discord Username: ```cameron_reynolds8```