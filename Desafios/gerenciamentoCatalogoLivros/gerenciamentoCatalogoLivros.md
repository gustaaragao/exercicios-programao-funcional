# Desafio: Gerenciamento de Catálogo de Livros

# Descrição: 
Neste problema, os alunos serão desafiados a criar um programa em JavaScript para gerenciar um catálogo de livros. Eles precisarão implementar a manipulação de **listas** e **registros** para armazenar informações sobre os livros, cuidando sempre do conceito de **Imutabilidade** visto em sala.


# Tarefas:

1. **Definição de Registro**: Crie um registro chamado Livro com os seguintes campos:  
● titulo: Título do livro (string)  
● autor: Nome do autor do livro (string)  
● ano: Ano de publicação do livro (número inteiro)  
● genero: Gênero do livro (string)  

2. **Criação de Catálogo**: Crie uma lista chamada catalogo que irá armazenar instâncias de livros.

3. **Adição de Livros**: Implemente uma função adicionarLivro(titulo, autor, ano, genero) que cria um novo registro Livro com os valores passados como argumentos e o adiciona ao catalogo.    

4. **Listagem de Livros**: Crie uma função listarLivros() que percorre o catalogo e exibe os detalhes de cada livro (título, autor, ano e gênero) no console.  

5. **Busca por Gênero**: Implemente uma função buscarPorGenero(genero) que recebe um gênero como argumento e retorna uma lista contendo todos os livros do catálogo que pertencem ao gênero especificado.  

6. **Remoção de Livros**: Crie uma função removerLivro(titulo) que recebe o título de um livro como argumento e remove o livro correspondente do catalogo.

# Desafios Adicionais (Opcionais):

1. **Ordenação**: Implemente uma função para ordenar os livros no catalogo por ano de publicação, do mais antigo ao mais recente.  

2. **Contagem de Livros por Gênero**: Crie uma função que retorna a contagem de livros para cada gênero presente no catálogo.  

3. **Edição de Livros**: Permita a edição dos detalhes de um livro, como autor, ano de publicação ou gênero.  