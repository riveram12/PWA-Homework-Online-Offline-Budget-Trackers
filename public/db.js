let db;
// This line creates a new db request for a "budget" database
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function (event) {
  // using the object store method to createObjectStore called "pending" and set autoIncrement to true
  const db = event.target.result;
  db.createObjectStore("pending", { autoIncrement: true });
};
