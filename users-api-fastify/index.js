import Fastify from "fastify";
import { usersApi } from "./users.js";

const fastify = Fastify();

fastify.get("/users", function (request, reply) {
  reply.send(usersApi.all());
});

fastify.post("/users/register", function (request, reply) {
  const { email, name } = request.body;

  try {
    const newUser = usersApi.register(email, name);
    reply.send(newUser);
  } catch (e) {
    reply.status(422).send({ error: e.message });
  }
});

// https://www.fastify.io/docs/latest/Reference/Server/#setnotfoundhandler
fastify.setNotFoundHandler((request, reply) => {
  return "Not Found";
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
