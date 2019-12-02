import type { MockResponse } from "mock.macro";

function foo(): MockResponse<
  Array<
    {
      id: Number
    },
    0
  >
> {}
