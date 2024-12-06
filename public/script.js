 // Fetch all books
function handleGetAllBooks() {
  fetch('http://localhost:3000/api/books')
    .then(res => res.json())
    .then(data => {
      if (data.length > 0) {
        const booksHtml = data.map(book => `
          <div>
            <strong>Title:</strong> ${book.title}<br>
            <strong>Author:</strong> ${book.author}<br>
            <strong>Genre:</strong> ${book.genre}<br>
            <strong>Year:</strong> ${book.year}<br><br>
          </div>
        `).join('');
        document.getElementById('allBooksResult').innerHTML = booksHtml;
      } else {
        document.getElementById('allBooksResult').innerText = 'No books found.';
      }
    })
    .catch(err => {
      document.getElementById('allBooksResult').innerText = 'Error fetching books.';
      console.error(err);
    });
}
 
 // Fetch book by ID
function handleGetBook() {
  const bookId = document.getElementById('getBookId').value;
  fetch(`http://localhost:3000/api/books/${bookId}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('getBookResult').innerText = JSON.stringify(data, null, 2);
    })
    .catch(err => {
      document.getElementById('getBookResult').innerText = 'Error fetching book';
    });
}

// Create a new book
function handleCreateBook() {
  const title = document.getElementById('createBookTitle').value;
  const author = document.getElementById('createBookAuthor').value;
  const genre = document.getElementById('createBookGenre').value;
  const year = document.getElementById('createBookYear').value;
  const book = { title, author, genre, year };

  fetch('http://localhost:3000/api/books', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book)
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('createBookResult').innerText = JSON.stringify(data, null, 2);
  })
  .catch(err => {
    document.getElementById('createBookResult').innerText = 'Error creating book';
  });
}

// Update an existing book
function handleUpdateBook() {
  const bookId = document.getElementById('updateBookId').value;
  const title = document.getElementById('updateBookTitle').value;
  const author = document.getElementById('updateBookAuthor').value;
  const genre = document.getElementById('updateBookGenre').value;
  const year = document.getElementById('updateBookYear').value;
  const book = { title, author, genre, year };

  fetch(`http://localhost:3000/api/books/${bookId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book)
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('updateBookResult').innerText = JSON.stringify(data, null, 2);
  })
  .catch(err => {
    document.getElementById('updateBookResult').innerText = 'Error updating book';
  });
}

// Delete a book by ID
function handleDeleteBook() {
  const bookId = document.getElementById('deleteBookId').value;
  fetch(`http://localhost:3000/api/books/${bookId}`, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('deleteBookResult').innerText = JSON.stringify(data, null, 2);
  })
  .catch(err => {
    document.getElementById('deleteBookResult').innerText = 'Error deleting book';
  });
}