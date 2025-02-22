# Node.js HTTP Server Hang

This repository demonstrates a common error in Node.js HTTP servers: forgetting to call `res.end()`.

## The Problem

The `bug.js` file contains a simple HTTP server.  However, it omits the crucial `res.end()` call after writing the response. This causes the server to hang, as the client doesn't receive a proper response termination signal.

## The Solution

The `bugSolution.js` file corrects this by adding `res.end()`, ensuring the response is properly closed.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Make a request to `http://localhost:3000/`.  Observe that the server appears to hang.
4. Run `node bugSolution.js`. 
5. Make another request. You'll see the response and the server behaves as expected.

This simple example highlights the importance of properly closing HTTP responses in Node.js to prevent unexpected server behavior and maintain responsiveness.