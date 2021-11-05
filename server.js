/*
	Hello! Interested in offering me a position at your company?
	Drop me an email at: jamesrbdev@gmail.com 
*/

//——————————————————————————————————————————————————————————————————//
// INFORMATION                                                      //
//——————————————————————————————————————————————————————————————————//

// Contributors: James Boehme

// Handles everything back-end, all in one place.

//——————————————————————————————————————————————————————————————————//
// FUNCTIONS                                                        //
//——————————————————————————————————————————————————————————————————//

// Get readline module.
const readline = require('readline').createInterface({input: process.stdin, output: process.stdout});

// Create an Express app/
const express = require("express");
const app     = express();

// Log errors.
process.on('uncaughtException', function (err) {
	console.log('Uncaught exception: ' + err.stack); // Log the error.
	shutdown(); // Shut down the server.
});

// Use the Express-static middleware.
app.use(express.static("public"));

// Start the server listening for requests.
let server = app.listen(process.env.PORT || 3000, () => console.log("SERVER OPEN ON PORT " + (process.env.PORT || 3000)));

// Shuts down the server.
function shutdown() {
	if (!server || server.closing) {
		console.log("Shutdown forced.");
		process.exit(42);
	} else {
		console.log('Shutting down...');
		// Close server.
		server.close(() => {
			// Close process with success.
			console.log("Server shut down.");
			process.exit(0);
		});

		// Handle timeouts.
		setTimeout(() => {
			console.log("Shutdown timed out.");
			process.exit(0);
		}, 1000);
	}
}

// Console input handling.
readline.on('line', (input) => {
	switch (input) {
		case "shutdown": case "exit": case "close": case "stop": // Shuts down the server.
			shutdown();
			break;
		case "forcekill": case "kill": case "forcestop": case "forceclose": // Force kills the server.
			process.exit(0);
		default: // Unrecognized command.
			console.log("Unrecognized command.");
	}
});

// Shutdown signals.
process.on("SIGTERM", shutdown);
process.on("SIGINT",  shutdown);