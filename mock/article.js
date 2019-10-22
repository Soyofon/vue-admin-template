import Mock from 'mockjs'

const article = Mock.mock({
  'item|30': [
    {
      id: '@id',
      title: '@sentence(10, 20)',
      'status|1': ['published', 'draft', 'deleted'],
      author: 'name',
      display_time: '@datetime',
      pageviews: '@integer(300, 5000)'
    }
  ]
})

export default [
  {
    url: '/article/list',
    type: 'get',
    response: config => {
      const items = article.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
