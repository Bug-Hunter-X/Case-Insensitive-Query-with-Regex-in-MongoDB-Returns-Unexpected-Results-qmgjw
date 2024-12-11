```javascript
const query = { name: /John/i }; // Case-insensitive search

// ... other code ...

const result = await collection.findOne(query);
console.log(result);
```