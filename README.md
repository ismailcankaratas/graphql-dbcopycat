# Dbcopycat usage example with Graphql
Here is an example of apollographql working with dbcopycat

## Clone

```bash
git clone https://github.com/ismailcankaratas/graphql-dbcopycat.git
cd graphql-dbcopycat
npm install
npm run start
```

# How to use?
## Import

```js
import database from "./data/db.json" assert {type: "json"};
import dbcopycat from "dbcopycat";
```

## Create Operation
```js
Mutation: {
    createBook: (parent, { data }) => {
        const book = dbcopycat.add("books", data);
        return book;
    }
},
```

## Fetch Operation
```js
Query: {
    books: () => database.books,
},
```
