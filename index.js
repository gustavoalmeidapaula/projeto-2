const Author = require('./Author')

const john = new Author('Violetta Fernandes')

const post = john.createPost('Vende-se uma Família', 'Livro de romance infanto-juvenil')

post.addComments('Júlia', 'Muito bom!')
post.addComments('Glória', 'Muito ruim!!!')

console.log(john)
console.log(post)