JS-FreakyFashion Overview JS-FreakyFashion is a frontend project for a fashion/clothing store built with plain JavaScript, HTML, and CSS. This project demonstrates dynamic DOM manipulation, event handling, and responsive design to provide a simple shopping experience.

Features Display a catalog of clothing items with images, names, prices, and descriptions.

Add items to a shopping cart using JavaScript.

Update and view the cart with total price calculation.

Responsive layout using CSS and Bootstrap.

Interactive UI with buttons and form validations.

Technologies Used HTML5

CSS3 (Bootstrap for styling)

JavaScript (Vanilla JS)

Responsive Web Design

Project Structure css Kopiera Redigera JS-FreakyFashion/ ├── index.html ├── css/ │ └── styles.css ├── js/ │ └── main.js ├── images/ │ └── (product images) └── README.md How to Run Clone the repository:

## Kom igång

1. Klona repo.

2. Installera beroenden:

 cd JS-FreakyFasion

 npm install --force


2. Starta servern

```
npm start
```

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

Open the index.html file in your web browser.

Browse and interact with the clothing catalog and shopping cart.
To add new product use AAA-22-RR RegEx

Future Improvements Add backend integration for persistent data storage.

Implement user authentication.

Add checkout functionality.

Improve accessibility and UI/UX design.

Author Developed by Khattab Alshami as part of a learning and personal development project.

## Webb-API

Applikationen exponerar följande webb-API:

``` 
GET /api/products
GET /api/products/:id
POST /api/products
DELETE /api/products/:id
GET /api/search?q={searchTerm}
``` 

Du anropar dessa från webbläsaren med hjälp av Fetch API:et.

Se .\routes\api\products.js för detaljer.
