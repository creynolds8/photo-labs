# Photolabs

Welcome to PhotoLabs! A project using primarily **React** to learn how React works and the process of building and reusing **Components**.

PhotoLabs was created during the Lighthouse Labs Web Development Immersive program

## Final Product

This is the view of the main page, shown with some photos liked and the corresponding notification inside of navigation bar.

!["Main page with Photo List view"](https://github.com/creynolds8/photo-labs/blob/main/docs/Photo-List.png?raw=true)

This is also the main page, however in this photo the photos are being filtered by topic, in this case animal phots.

!["Main page filtered by topic"](https://github.com/creynolds8/photo-labs/blob/main/docs/Photos-by-Topic.png?raw=true)

When the user clicks on any image that image is displayed in a larger view.

!["Modal view for individual image"](https://github.com/creynolds8/photo-labs/blob/main/docs/Modal-View.png?raw=true)

When displaying the larger view of an image, similar photos are displayed underneath. These photos can also be clicked on to view a larger version of that image.

!["Similar images within modal view"](https://github.com/creynolds8/photo-labs/blob/main/docs/Modal-Similar-Photos.png?raw=true)

In the case of a network or server error, the main components (Navigation Bar and Photo List) are not displayed and an error message component is displayed instead containing information related to the error.

!["Error message displayed in the case of server or network error"](https://github.com/creynolds8/photo-labs/blob/main/docs/Error-Message.png?raw=true)
![]()


## Setup

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
