// 1.方式一: 手动的切换不同的环境(不推荐)
// const BASE_URL = 'http://coderwhy.org/dev'
// const BASE_NAME = 'coderwhy'

// const BASE_URL = 'http://coderwhy.org/prod'
// const BASE_NAME = 'kobe'

// const BASE_URL = 'http://coderwhy.org/test'
// const BASE_NAME = 'james'

// 2.根据process.env.NODE_ENV区分
// 开发环境: development
// 生成环境: production
// 测试环境: test

// let BASE_URL = ''
// let BASE_NAME = ''

// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://coderwhy.org/dev'
//   BASE_NAME = 'coderwhy'
// } else if (process.env.NODE_ENV === 'production') {
//   BASE_URL = 'http://coderwhy.org/prod'
//   BASE_NAME = 'kobe'
// } else {
//   BASE_URL = 'http://coderwhy.org/test'
//   BASE_NAME = 'james'
// }

// export { BASE_URL, BASE_NAME }
