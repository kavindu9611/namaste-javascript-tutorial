const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolve value!!!");
  }, 10000);
});

async function handlePromise() {
  // Execution of handlePromise is paused here until `p` resolves,
// but the JS engine continues running other tasks.
  const val = await p;
  console.log(val);
  console.log("check");
}

handlePromise();


// The JavaScript engine does NOT literally "pause" or freeze.

// Instead, it suspends the execution of 
// handlePromise only until p is resolved.

// Other tasks (like timers, 
// user events, other async functions, etc.) in the event loop continue running normally.

// So what really happens is:

// handlePromise() starts running.

// It hits await p.

// Since p takes 10 seconds to resolve, handlePromise is paused and 
// control is returned to the event loop.

// After 10 seconds, when p resolves, 
// the engine puts the rest of handlePromise (console.log(val) and console.log("check")) back into the call stack to run.