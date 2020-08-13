# express-actions
Build a modified version of a actions that proxies its inputs from request parameters, and proxies its exits through the response.

main idea is:

```javascript
const express = require('express');
const expressActions = require('express-actions');

const app = express();
const port = 3000;

app.use(expressActions({
    app,
    folders: {
        actions: 'actions',
        helpers: 'helpers',
    },
}));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

```

```javascript
module.exports = {

    method: 'GET',

    path: '/',

    validations: {},

    handlers: [cors()],

    fn: (req, res, next) => {
        res.send('Hello world!');
    },
};
```
