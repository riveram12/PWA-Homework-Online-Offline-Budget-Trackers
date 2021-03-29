let db;
// This line creates a new db request for a "budget" database
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function (event) {
  // using the object store method to createObjectStore called "pending" and set autoIncrement to true
  const db = event.target.result;
  db.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = function (event) {
  db = event.target.result;

  // checking to see if the app is online before reading from db
  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  console.log("Woops! " + event.target.errorCode);
};
