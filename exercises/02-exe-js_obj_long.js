const user = {
    name: 'Nick',
    id: 7
};

const user2 = {
    name: 'Analfabeto',
    id: 2,
    books: []
}

const book1 = {
    title: 'The Catcher in the Rye',
    author: 'J.D Salinger',
    isbn: '0316769487',
    category: 'Classic Literature'
};

const book2 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '0446310786',
    category: 'Classic Literature'
};

const book3 = {
    title: 'Bla bla bla',
    author: 'James Anderson',
    isbn: '0446310723486',
    category: 'Classic Literature'
};

const book4 = {
    title: 'The Good Parts',
    author: 'Douglas Crockford',
    isbn: '0446310723486',
    category: 'Javascript Literature'
};

const book5 = {
    title: 'The Definitive Guide',
    author: 'David Flanagan',
    isbn: '0446310723486',
    category: 'Javascript Literature'
};

const book6 = {
    title: 'High Performance of Javascript',
    author: 'Nicholas C. Zakas',
    isbn: '0446310723486',
    category: 'Javascript Literature'
};

user.books = [];

const library = [];

library.push(user, user2);


library[0].books.push(book3);

user2.books.push(book6, book3);


for (const key in library) console.log(library[key]);