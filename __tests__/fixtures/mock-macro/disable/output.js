import _faker from "faker";

function foo() {}

function boo() {
  return Promise.resolve({
    data: {
      id: _faker.random.number(),
      name: _faker.random.word()
    },
    code: "200",
    msg: "success"
  });
  return Promise.resolve({
    id: 1234,
    name: 'Nambe'
  });
}

function boo() {
  return Promise.resolve({
    id: 1234,
    name: 'Nambe'
  });
}
