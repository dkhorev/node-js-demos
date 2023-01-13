const data = [
  { id: 1, name: "John Doe", email: "john@test.com" },
  { id: 2, name: "Alice Doe", email: "alice@test.com" },
];

exports.usersDB = {
  // Return all users
  all: function (req, res) {
    return data;
  },

  // Register a new user
  register: function (email, name) {
    if (this.exists(email)) {
      throw new Error("User already exists");
    }

    const nextId = data.length + 1;
    const user = { id: nextId, name, email };
    data.push({ id: nextId, name, email });

    return user;
  },

  // Check if a user exists
  exists: function (email) {
    return data.some((user) => user.email === email);
  },
};
