import type { MockResponse } from "mock.macro";


function foo():MockResponse<{
  id:Number,
  name:String
},false>{}

function boo():MockResponse<{
  id:Number,
  name:String
}>{
  return Promise.resolve({
    id:1234,
    name:'Nambe'
  })
}

function boo():MockResponse<{
  id:Number,
  name:String
},false>{
  return Promise.resolve({
    id:1234,
    name:'Nambe'
  })
}