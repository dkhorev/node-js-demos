const data = [
  { id: 1, name: "John Doe", email: "john@test.com" },
  { id: 2, name: "Alice Doe", email: "alice@test.com" },
];

exports.usersApi = {
  all: function (req, res) {
    return data;
  },

  register: function (email, name) {
    const nextId = data.length + 1;
    data.push({ id: nextId, name, email });

    return data.find((user) => user.id === nextId);
  },
};
