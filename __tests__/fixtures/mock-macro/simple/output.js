import _faker from "faker";

function foo() {
  return Promise.resolve({
    data: {
      id: _faker.random.number(),
      name: _faker.random.word(),
      noop: void 0,
      boo: _faker.random.boolean(),
      nul: null
    },
    code: "200",
    msg: "success"
  });
} //upperCase


function boo() {
  return Promise.resolve({
    data: {
      id: _faker.random.number(),
      name: _faker.random.word(),
      boo: _faker.random.boolean(),
      nul: null
    },
    code: "200",
    msg: "success"
  });
}
