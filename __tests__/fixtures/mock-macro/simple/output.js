import _faker from "faker";

function foo() {
  return Promise.resolve({
    data: {
      id: _faker.random.number(),
      name: _faker.random.word()
    },
    code: "200",
    msg: "success"
  });
}
