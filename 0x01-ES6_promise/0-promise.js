// 0-promise.js

function getResponseFromAPI() {
  // Simulate asynchronous behavior with a short delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ message: "API response" });
    }, 1000);
  });
}

export default getResponseFromAPI;

