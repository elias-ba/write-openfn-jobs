get(
  "https://jsonplaceholder.typicode.com/users",
  {
    headers: { "content-type": "application/json" },
  },
  (state) => {
    return state;
  }
);
