/*
@MockGlobal`
Promise.resolve().then(()=>%%mockData%%)
`
*/
import type { MockResponse } from "mock.macro";

function mocker(data) {
  return data;
}
function foo(): MockResponse<Object> {}

/* 
@MockResponse`
mocker(%%mockData%%)
`
*/
function boo(): MockResponse<String> {}

/*
@MockResponse`
((data)=>data)(%%mockData%%)
`
*/
function too(): MockResponse<Number> {}
