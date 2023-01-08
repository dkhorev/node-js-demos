import Fastify from "fastify";

const fastify = Fastify({
  logger: false,
});

// Declare a route
fastify.get("/", function (request, reply) {
  reply.send("Hello World");
});

// Declare a route
fastify.get("/bye", function (request, reply) {
  reply.send("Bye!");
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
