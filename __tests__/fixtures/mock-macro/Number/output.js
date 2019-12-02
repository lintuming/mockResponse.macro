import _faker from "faker";

function foo() {
  return Promise.resolve({
    data: _faker.random.number(),
    code: "200",
    msg: "success"
  });
}
