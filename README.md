
## Kom igång

1. Klona repo.

2. Installera beroenden:

 cd JS-FreakyFasion

 npm install --force


2. Starta servern

```
npm start
```

3. Öppna http://localhost:3000/

Notera att det redan finns HTML-sidor skapade under .\public - du kommer bygga ut dessa enligt instruktioner i uppgiften.

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