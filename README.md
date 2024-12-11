# Case-Insensitive Query with Regex in MongoDB Returns Unexpected Results

This repository demonstrates a common issue when performing case-insensitive queries in MongoDB using regular expressions. The provided code utilizes a regular expression to find documents where the `name` field contains "John", regardless of case.  However, under certain conditions, the query might yield unexpected outcomes, returning incorrect results or an empty result set when it should have found matching documents.

The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a corrected implementation with explanations.