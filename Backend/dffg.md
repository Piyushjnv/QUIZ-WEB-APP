# Error Handling(Pro)techniques in Node.js
Vignesh Nagarajan
<br>




Learn advanced error handling techniques in Node.js to enhance the reliability and stability of your applications.



## Error handling in Node.js like a Pro
In Node.js, you can handle errors using various techniques and approaches. Error handling is a crucial aspect of any Node.js application. Properly managing errors can significantly enhance the stability, reliability, and maintainability of your codebase. In this blog post, we will explore various best practices and techniques for error handling in Node.js, empowering you to handle errors like a seasoned Node.js developer.

There are several advanced error handling techniques and best practices you can employ in Node.js. These techniques allow for more granular control over error handling, enhanced error reporting, and improved code maintainability. Here are some advanced error handling techniques in Node.js:

Error Middleware <br>
Domain Module <br>
Error Handling Frameworks <br>
Error Propagation<br>
Graceful Shutdown  <br>
Error Monitoring and Reporting  <br>
Circuit Breaker Pattern  <br>
Backpressure Handling <br>
Automatic Retry <br>
Logging and Analytics  <br>
1. Error Middleware:
Error middleware functions in frameworks like Express allow you to handle errors that occur during request processing. These functions are executed when an error is passed to next(). Here's a step-by-step breakdown:

Step 1: Define the error middleware function with four parameters: err, req, res, and next. <br>
```js
app.use((err, req, res, next) => {
  // Handle the error
});
```
<br>
<b>Step 2:</b> Handle the error within the error middleware function. You can access the error message, status code, and other relevant details to craft an appropriate error response.


```js
app.use((err, req, res, next) => {
  // Handle the error
  res.status(err.status || 500).json({ error: err.message });
});
```
<br>
Example Program 1: Basic Error Middleware

```js
app.get('/users/:id', (req, res, next) => {
  const userId = req.params.id; <br>
if (userId === 'admin') {
    const error = new Error('Access denied');
    error.status = 403;
    next(error);
  } else {
    // Handle the regular flow
  }
});
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});
```

In this example, when a user with ID “admin” is requested, we create a custom error object and pass it to next(). The error middleware function catches the error and sends a proper JSON response with a status code of 403 (Forbidden).

Example Program 2: Asynchronous Error Middleware

```js
app.get('/data', async (req, res, next) => {
  try {
    const data = await fetchData();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});
```

In this example, an asynchronous route handler fetches data. If an error occurs during the asynchronous operation, it is caught using a try-catch block, and the error is passed to next(). The error middleware function handles the error and sends an appropriate response.

### 2. Domain Module:
The domain module, deprecated as of Node.js v14, provides an alternative approach to handling errors. It allows you to encapsulate the execution context of a group of related operations and handle errors that occur within that context. Here's an overview of using the domain module:

Step 1: Create a domain object using domain.create().

```js
const domain = require('domain');
const myDomain = domain.create();
```

Step 2: Add the code you want to run within the domain using myDomain.run().

myDomain.run(() => {
  // Your code here
});
Step 3: Handle errors within the domain using myDomain.on('error', callback)

myDomain.on('error', (error) => {
  // Handle the error
});
Example Program 1: Using Domain with Synchronous Code

const domain = require('domain');

const myDomain = domain.create();
myDomain.on('error', (error) => {
  console.error('An error occurred:', error);
});
myDomain.run(() => {
  const result = someFunction(); // A function that may throw an error
  console.log(result);
});
In this example, the code within the myDomain.run() block is executed within the domain. If an error occurs, the error event listener defined by myDomain.on('error') catches and handles the error.

Example Program 2: Using Domain with Asynchronous Code

const domain = require('domain');

const myDomain = domain.create();
myDomain.on('error', (error) => {
  console.error('An error occurred:', error);
});
myDomain.run(() => {
  fetchData()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      throw error;
    });
});
In this example, the code within the myDomain.run() block includes asynchronous code using Promises. If an error occurs during the Promise chain, the error is caught and thrown within the domain, allowing it to be handled by the error event listener.

Please note that the domain module is deprecated, and its use is discouraged in favor of other error handling techniques like async/await and Promises.

3. Error Handling Frameworks:
Several error handling frameworks and libraries in the Node.js ecosystem provide advanced error handling capabilities. Let’s explore two popular examples: Boom and Youch.

Example Program 1: Error Handling with Boom

```js
const express = require('express');
const boom = require('@hapi/boom');

const app = express();
app.get('/users/:id', (req, res, next) => {
  const userId = req.params.id;
  if (userId === 'admin') {
    next(boom.forbidden('Access denied'));
  } else {
    // Handle the regular flow
  }
});
app.use((err, req, res, next) => {
  if (!err.isBoom) {
    next(err);
    return;
  }
  const { output } = err;
  res.status(output.statusCode).json({ error: output.payload });
});
```

In this example, the boom.forbidden() method from the Boom library is used to create a Forbidden error. When the user ID is "admin," the error is passed to the error middleware function. The error middleware checks if the error is a Boom error and sends a formatted JSON response.

Example Program 2: Error Handling with Youch

```js
const express = require('express');
const youch = require('youch');

const app = express();
app.get('/users/:id', (req, res, next) => {
  const userId = req.params.id;
  if (userId === 'admin') {
    const error = new Error('Access denied');
    next(error);
  } else {
    // Handle the regular flow
  }
});
app.use((err, req, res, next) => {
  const youchInstance = new youch(err, req);
  youchInstance.toJSON().then((errorJSON) => {
    res.status(500).json(errorJSON);
  });
});
```

In this example, when the user ID is “admin,” an error is created and passed to the error middleware function. The Youch library is used to format the error stack trace and other information into a JSON response.

4. Error Propagation
Proper error propagation ensures that errors are caught and handled at the appropriate level in your application. Errors can be propagated by throwing them in synchronous code or returning rejected Promises in asynchronous code. Let’s explore this topic further:

Step 1: Throwing Errors (Synchronous)

In synchronous code, you can throw an error using the throw statement. The error will propagate up the call stack until it is caught by a try-catch block.

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error);
}
```
In this example, the divide function throws an error when attempting to divide by zero. The error is caught in the try-catch block and handled accordingly.

Step 2: Rejected Promises (Asynchronous)

In asynchronous code that uses Promises, you can propagate errors by returning a rejected Promise using the Promise.reject() method.
```js
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      reject(new Error('Data fetch failed'));
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
  ```
In this example, the fetchData function returns a Promise that is intentionally rejected after a delay. The error is caught using the catch method on the Promise chain and handled accordingly.

5. Graceful Shutdown
Implementing a graceful shutdown mechanism in your application allows you to handle errors during the shutdown process. This involves properly closing database connections, releasing resources, and notifying external services before terminating the application. Let’s see the steps involved:

Step 1: Handle Termination Signals

Write on Medium
Listen for termination signals like SIGINT (Ctrl+C) and SIGTERM, and perform cleanup tasks before exiting the application.
```js
process.on('SIGINT', () => {
  // Cleanup tasks before exiting
  console.log('Gracefully shutting down...');
  // Close database connections, release resources, etc.
  process.exit(0); // Exit with success code
});
```
Step 2: Register Cleanup Handlers

Register cleanup handlers to ensure proper cleanup even in unexpected error scenarios.
```js
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Cleanup tasks before exiting
  // Close database connections, release resources, etc.
  process.exit(1); // Exit with error code
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Promise Rejection:', reason);
  // Cleanup tasks before exiting
  // Close database connections, release resources, etc.
  process.exit(1); // Exit with error code
});
```
In this example, we handle uncaught exceptions and unhandled promise rejections and perform cleanup tasks before exiting the application.

6. Error Monitoring and Reporting
Integrating error monitoring and reporting tools into your application helps track, analyze, and report errors that occur in your production environment. Let’s explore the steps involved:

Step 1: Choose an Error Monitoring Service

Choose an error monitoring service/tool such as Sentry, Bugsnag, or Rollbar.

Step 2: Install and Configure the Error Monitoring Service

Install the error monitoring library for the chosen service and configure it with your API keys or project-specific settings.

Step 3: Integrate Error Monitoring in Your Application

Integrate the error monitoring library into your application to report errors.
```js
const express = require('express');
const app = express();

// Error monitoring library initialization
const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'YOUR_DSN_HERE' });
app.get('/', (req, res) => {
  // Some code that may throw an error
  throw new Error('Error occurred!');
});
// Error handler middleware
app.use((err, req, res, next) => {
  Sentry.captureException(err); // Report the error to Sentry
  res.status(500).json({ error: 'Something went wrong' });
});
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```
In this example, we use the Sentry error monitoring service. We initialize it with the provided DSN (Data Source Name) and capture exceptions using Sentry.captureException() within the error handling middleware.

7. Circuit Breaker Pattern
The circuit breaker pattern helps manage failures and prevent cascading failures in distributed systems. By wrapping remote service calls in a circuit breaker, you can handle errors, provide fallback responses, and avoid overwhelming the system. Let’s explore the steps involved:

Step 1: Choose a Circuit Breaker Library

Choose a circuit breaker library like opossum or brakes to implement the circuit breaker pattern.

Step 2: Wrap Remote Service Calls

Wrap remote service calls in a circuit breaker to handle errors and provide fallback responses.
```js
const CircuitBreaker = require('opossum');

const options = {
  errorThresholdPercentage: 50,
  timeout: 3000,
  resetTimeout: 30000,
};
const breaker = new CircuitBreaker(remoteServiceCall, options);
breaker.fallback(() => {
  return 'Fallback response';
});
app.get('/', (req, res) => {
  breaker.fire()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Service unavailable' });
    });
});
```
In this example, we use the opossum library to implement the circuit breaker pattern. We define a fallback response and handle errors when making a remote service call.

8. Backpressure Handling
Backpressure handling is crucial when dealing with high-volume streams or asynchronous operations. Implementing backpressure mechanisms prevents overload and enables better error handling. Here are the steps involved:

Step 1: Use Backpressure-Aware Streams

Utilize backpressure-aware streams like the Readable and Writable streams in Node.js. These streams handle flow control automatically.

Step 2: Pause and Resume Streams

Pause and resume streams to control the flow of data. Pause the readable stream when the writable stream is not ready to consume data.
```js
const fs = require('fs');

const readableStream = fs.createReadStream('largeFile.txt');
const writableStream = fs.createWriteStream('output.txt');
writableStream.on('drain', () => {
  readableStream.resume();
});
readableStream.on('data', (chunk) => {
  if (!writableStream.write(chunk)) {
    readableStream.pause();
  }
});
```
In this example, the readable stream reads data from a large file, and the writable stream writes data to an output file.

9. Automatic Retry
Automatic retry is a technique where failed operations, such as network requests, are automatically retried with an exponential backoff strategy. It helps handle transient errors and recover automatically. Let’s explore the steps involved:

Step 1: Choose a Retry Library

Choose a retry library like async-retry or implement your own retry logic.

Step 2: Define Retry Options

Define the retry options, including the number of retry attempts, backoff strategy, and conditions for retrying.

const retry = require('async-retry');

const retryOptions = {
  retries: 3,
  minTimeout: 1000,
  maxTimeout: 5000,
  onRetry: (error) => {
    console.error('Retrying due to error:', error);
  },
};
Step 3: Retry the Operation

Wrap the operation that may fail in a retry function, passing in the retry options.

retry(async () => {
  // Operation that may fail
  await fetchSomeData();
}, retryOptions)
  .then((result) => {
    console.log('Operation succeeded:', result);
  })
  .catch((error) => {
    console.error('Operation failed after retries:', error);
  });
In this example, the async-retry library is used to automatically retry the fetchSomeData() operation with the specified retry options.

10. Logging and Analytics
Logging errors and collecting analytics is crucial for troubleshooting and debugging purposes. Proper logging strategies provide visibility into errors and help track application performance. Let’s explore the steps involved:

Step 1: Choose a Logging Library or Service

Choose a logging library like Winston or a logging service like ELK Stack (Elasticsearch, Logstash, Kibana) or Splunk.

Step 2: Configure the Logging System

Configure the logging system with appropriate transports, such as console logging or file logging, and set log levels.

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'application.log' }),
  ],
});
Step 3: Log Errors and Relevant Information

Log errors, stack traces, and other relevant information in your application code.

```js
try {
  // Code that may throw an error
} catch (error) {
  logger.error('An error occurred:', error);
}
```

Example Program 1: Logging Errors to Console
```js
const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.simple(),
  transports: [new winston.transports.Console()],
});
try {
  // Code that may throw an error
  throw new Error('Something went wrong');
} catch (error) {
  logger.error('An error occurred:', error);
}
```
In this example, we use the Winston logging library to log the error to the console with an error log level.

### Example Program 2: Logging Errors to File

```js
const winston = require('winston');

const logger = winston.createLogger({ ,<br>
  level: 'error', <br>
  format: winston.format.simple(), <br>
  transports: [new winston.transports.File({ filename: <br>'application.log' })],
}); <br>
try {
  // Code that may throw an error
  throw new Error('Something went wrong');
} catch (error) {
  logger.error('An error occurred:', error);
} 
```
In this example, we configure the Winston logger to log errors to a file named application.log.

Conclusion
Error handling in Node.js is a critical aspect of building robust and reliable applications. By following best practices such as using try-catch blocks, creating custom error classes, handling asynchronous errors, and implementing error logging and reporting, you can effectively manage and recover from errors in your codebase.

Remember to always provide clear error messages to users, implement proper error propagation, and regularly test and review your error handling mechanisms. A well-designed error handling strategy enhances the stability and usability of your Node.js applications, leading to better user experiences and more efficient debugging.

Inthis blog post, we’ve only scratched the surface of error handling in Node.js. By diving deeper into these techniques and continuously exploring additional resources, you can refine your error handling skills and become a Node.js developer who can handle errors like a pro.

**`app djhbfjjdff fdhfhf h ffffhgfg hrhr`**