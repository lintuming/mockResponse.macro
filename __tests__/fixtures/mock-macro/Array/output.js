import _faker from "faker";

function foo() {
  return Promise.resolve({
    data: [{
      a: _faker.random.word(),
      b: _faker.random.number()
    }],
    code: "200",
    msg: "success"
  });
}
