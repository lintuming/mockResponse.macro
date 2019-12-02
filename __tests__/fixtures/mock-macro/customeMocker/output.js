import _faker from "faker";

function mocker(data) {
  return data;
}

function foo() {
  return Promise.resolve().then(() => ({}));
}
/* 
@MockResponse`
mocker(%%mockData%%)
`
*/


function boo() {
  return mocker(_faker.random.word());
}
/*
@MockResponse`
((data)=>data)(%%mockData%%)
`
*/


function too() {
  return (data => data)(_faker.random.number());
}
