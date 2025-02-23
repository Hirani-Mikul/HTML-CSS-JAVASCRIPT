/*
  .......Creating Promises.........
*/

const Promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Not done");
  }, 3000);
});
Promise1.then(
  (val) => {
    console.log(val);
  },
  (val) => {
    console.log(val);
  }
);

// console.log("Asyncronous is not done");
// /*
//   .......Creating a Function with a Promise
// */

let asyncFunction1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Asynchronous Function 1 has resolved");
    }, 5000);
  });
};

asyncFunction1().then((val) => {
  console.log(val);
});

let asyncFunction2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Asynchronous Function 2 has rejected");
    }, 6000);
  });
};

asyncFunction2().then(
  (val) => {},
  (val) => {
    console.log(val);
  }
);

/*
........Reformat the setTimeout function to act as a ........Promise.......
*/
let setTimeoutP = (time) => {
  return new Promise((res, rej) => {
    if (isNaN(time)) {
      setTimeout(() => {
        rej("setTimeoutP is rejected because number is required");
      });
    }
    setTimeout(res, time);
  });
};

// setTimeoutP(7000).then(() => {
//   console.log("setTimeoutPromise Done");
// });

setTimeoutP(7000).then(
  () => {
    console.log("setTimeoutPromise Done");
  },
  (val) => {
    console.log(val);
  }
);

setTimeoutP("word")
  .then(() => {
    console.log("setTimeoutPromise Done");
  })
  .catch((err) => {
    console.log(err);
  });

/*
......Calling static method on Promises........
////////........ALL........../////////
*/

const firstName = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Microsoft");
    }, 5000);
  });
};
const middleName = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Windows");
    }, 1000);
  });
};
const Lastname = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Edge");
    }, 8000);
  });
};

Promise.all([firstName(), middleName(), Lastname()])
  .then((message) => {
    console.log(message);
    console.log(`${message[0]} ${message[1]} ${message[2]}`);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.race([firstName(), middleName(), Lastname()])
  .then((message) => {
    console.log(message);
    // console.log(`${message[0]} ${message[1]} ${message[2]}`);
  })
  .catch((err) => {
    console.log(err);
  });
