import type { MockResponse } from "mock.macro";
function foo(): MockResponse<{
  list: Array<
    {
      id: Number,
      name: String
    },
    15
  >
}> {}
