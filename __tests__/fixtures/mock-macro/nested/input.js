import type { MockResponse } from "mock.macro";

function foo(): MockResponse<{
  id: Number,
  name: String,
  metadata: null,
  parant: {
    id: Number,
    name: String
  }
}> {}

function boo(): MockResponse<{
  id: Number,
  name: String,
  data: {
    id: Number,
    user: String,
    list: Array<Number, 5>
  }
}> {}
