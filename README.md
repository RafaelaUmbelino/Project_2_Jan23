## Project Name

<br>

## Description

Restaurant Diary and Wishlist - Save your favorites and create a wishlist of the restaurants you want to visit.

<br>

## User Stories

- **homepage** - the home page has the sign up and login links, plus a link to the private pages for the Favorites List and Wishlist and a search bar for restaurants
- **sign up** - signup with your e-mail, password and name (for display purposes)
- **login** - login with your e-mail and password, and redirects to home page
- **logout** - logout from your account
- **wishlist** - shows all the restaurants you added to your wishlist, sorted by higher preference, plus a sorting menu, and "add to favorites" (for places you have visited) and "delete" buttons for each restaurant
- **favorite list** - shows all the restaurants you selected as favorites, sorted by higher personal rating, plus a sorting meny, and "delete" buttons for each restaurant
- **restaurant details** - each restaurant displayed on the wishlist and favorites list opens to a page with more details on the restaurant
- **404** - render a page that informs the user something went wrong on the client side
- **500** - render a page that informs the user something went wrong on the server side

<br>

## Server Routes (Back-end):

| **Method** | **Route**                            | **Description**                                                         | Request - Body      |
| ---------- | ------------------------------------ | ----------------------------------------------------------------------- | ------------------- |
| `GET`      | `/`                                  | Main page route. Renders home `index` view.                             |                     |
| `GET`      | `/login`                             | Renders `login` form view.                                              |                     |
| `POST`     | `/login`                             | Sends Login form data to the server.                                    | { email, password } |
| `GET`      | `/signup`                            | Renders `signup` form view.                                             |                     |
| `POST`     | `/signup`                            | Sends Sign Up info to the server and creates user in the DB.            | { email, password } |
| `POST`     | `/signout`                           | Logs out from the session.                                              |                     |
| `GET`      | `/404`                               | render 404 page.                                                        |                     |
| `GET`      | `/500`                               | render 500 page.                                                        |                     |
| `GET`      | `/restaurants/details/:restaurantid` | Renders `restaurant-details` view for the particular restaurant.        |
| `POST`     | `/user/favorites/:restaurantid`      | Creates the object inside `favorites database`                          |
| `POST`     | `/user/wishlist/:restaurantid`       | Creates the object inside `wishlist database`                           |
| `GET`      | `/user/favorites`                    | Private route. Render the `favorites` view.                             |
| `DELETE`   | `/user/favorites/:restaurantId`      | Private route. Deletes the specific restaurant from the favorites list. |
| `GET`      | `/user/wishlist`                     | Private route. Render the `wishlist` view.                              |
| `DELETE`   | `/user/wishlit/:restaurantId`        | Private route. Deletes the specific restaurant from the wishlist        |
| `POST`     | `/user/favorites/:restaurantid`      | Adds the specific restaurant to the `favorites database`                |

## Models

User model

```javascript
{
  userId: String,
  name: String,
  email: String,
  password: String,
  favorites: [RestaurantId],
  wishlist: [RestaurantId],
}

```

Restaurants model

````javascript
{
  restaurantId: String,
  name: String,
  location: String,
  images: [String],
  ratings: Number,
  openingHours: [String],
  menu: [String],
  priceRange: (...),
  foodRestrictions: [String],
  link: String,
  tags: [String],
  preference: String,
}

```review
{
}

````

<br>

## API's

Google Maps API

<br>

## Packages

<br>

## Backlog

<br>

## Links

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/RafaelaUmbelino/Project_2_Jan23)

[Deploy Link](https://piteu.cyclic.app/)

<br>

### Slides

### Contributors

Alexandre Álvaro - [`<github-username>`](https://github.com/AleAlvo) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/alexandre-alvaro/)

Rafaela Umbelino - [`<github-username>`](https://github.com/RafaelaUmbelino) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/rafaela-umbelino/)
