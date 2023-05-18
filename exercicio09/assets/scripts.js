let booksList = [
    {
        title: "A Menina que Roubava Livros",
        author: "Markus Zusak",
        status: "Disponível"
    },
    {
        title: "O Pequeno Príncipe",
        author: "Antoine de Saint-Exupéry",
        status: "Emprestado"
    },
    {
        title: "1984",
        author: "George Orwell",
        status: "Disponível"
    },
    {
        title: "O Nome da Rosa",
        author: "Umberto Eco",
        status: "Emprestado"
    },
    {
        title: "A Revolução dos Bichos",
        author: "George Orwell",
        status: "Disponível"
    },
    {
        title: "A Arte da Guerra",
        author: "Sun Tzu",
        status: "Disponível"
    },
    {
        title: "O Hobbit",
        author: "J.R.R. Tolkien",
        status: "Emprestado"
    },
    {
        title: "O Senhor dos Anéis: A Sociedade do Anel",
        author: "J.R.R. Tolkien",
        status: "Disponível"
    },
    {
        title: "O Grande Gatsby",
        author: "F. Scott Fitzgerald",
        status: "Emprestado"
    },
    {
        title: "Cem Anos de Solidão",
        author: "Gabriel Garcia Márquez",
        status: "Disponível"
    }
];

// 1) Selecionar a ul com id="books-list" e armazenar em uma const

// 2) Percorrer com forEach o vetor de objetos booksList (que contem uma lista de livros)
// e para cada livro inserir um li na ul com as informações do livro

// 3.1) Selecionar o select com id="status-filter" e armazenar em uma const
// 3.2) Selecionar o ul id=filtered-books-list e armazenar em uma const

// 4) Adicionar com addEnventListener o evento change no select

// 5) Criar a função que será executada quando o evento change for disparado,
// a mesma percorrerá o vetor de objetos booksList para inserir no id=filtered-books-list
// os livros filtrados pelo status selecionado no select, por exemplo,
// se o status selecionado for "Disponível" então serão inseridos no id=filtered-books-list os livros
// que possuem status "Disponível"
