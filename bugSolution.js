```javascript
const query = { name: { $regex: /John/i } }; // Correct way to use regex for case-insensitive search

// ... other code ...

const result = await collection.findOne(query);
console.log(result);
```
The correct way to perform case-insensitive searches is to explicitly use the `$regex` operator within the query object, including the case-insensitive flag.  The previous example was missing the `$regex` operator which caused the query to perform an exact case-sensitive search.