import type { MockResponse } from "mock.macro";

function foo(): MockResponse<Array<{ a: String, b: Number }>> {}
