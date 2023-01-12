import Fastify from "fastify";

const fastify = Fastify();

/**
 * @type {import('fastify').RouteShorthandOptions}
 * @const
 */
const opts = {
  schema: {
    body: {
      type: "object",
      properties: {
        a: { type: "number" },
        b: { type: "number" },
      },
    },
  },
};

fastify.post("/math", opts, function (request, reply) {
  reply.send(request.body.a + request.body.b);
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
