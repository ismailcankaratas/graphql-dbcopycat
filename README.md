# Dbcopycat usage example with Graphql
Here is an example of apollographql working with dbcopycat

## Import

```js
import database from "./data/db.json" assert {type: "json"};
import dbcopycat from "dbcopycat";
```

## Create Operation
```js
createBook: (parent, { data }) => {
    const book = dbcopycat.add("books", data);
    return book;
}
```

## Fetch Operation
```js
Query: {
    books: () => database.books,
},
```
