import type { MockResponse } from "mock.macro";

function foo(): MockResponse<{ id: number, name: string }> {}
