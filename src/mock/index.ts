import Mock from "mockjs"

let data = Mock.mock({
  "access_token|1-50":/[a-z0-9A-Z]/
})
Mock.mock(/api\/login/, 'post', () => {
  return data
})