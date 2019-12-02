import _faker from "faker";

function foo() {
  return Promise.resolve({
    data: {
      id: _faker.random.number(),
      name: _faker.random.word(),
      metadata: null,
      parant: {
        id: _faker.random.number(),
        name: _faker.random.word()
      }
    },
    code: "200",
    msg: "success"
  });
}

function boo() {
  return Promise.resolve({
    data: {
      id: _faker.random.number(),
      name: _faker.random.word(),
      data: {
        id: _faker.random.number(),
        user: _faker.random.word(),
        list: [_faker.random.number(), _faker.random.number(), _faker.random.number(), _faker.random.number(), _faker.random.number()]
      }
    },
    code: "200",
    msg: "success"
  });
}
