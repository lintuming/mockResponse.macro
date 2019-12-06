import type { MockResponse } from "mock.macro";

function foo(): MockResponse<
  {
    id: number,
    name: string,
    noop: undefined,
    boo: boolean,
    nul: null
  },
  false
> {}

//upperCase
function boo(): MockResponse<
  {
    id: Number,
    name: String,
    boo: Boolean,
    nul: Null
  },
  false
> {}
