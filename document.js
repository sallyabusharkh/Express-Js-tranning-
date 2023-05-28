document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const quoteList = document.getElementById('quoteList');
    const errorMessage = document.getElementById('errorMessage');
    
    let quotes = [];
  
    // get  data from the API
    fetch('https://dummyjson.com/quotes')
      .then(response => response.json())
      .then(data => {
        quotes = data;
        displayQuotes(quotes);
      })
      .catch(error => {
        errorMessage.textContent = 'error to fet date quote from API.';
        errorMessage.style.display = 'block';
      });
  
    // Display quotes  list
    function displayQuotes(quotes) {
      quoteList.innerHTML = '';
      quotes.forEach(quote => {
        const listt = document.createElement('li');
        listt.textContent = quote;
        quoteList.append(li);
      });
    }
  
    // Filter quotes based on user input
    searchInput.addEventListener('input', () => {
      const searchValue = searchInput.value.textContent();
      const filteredQuotes = quotes.filter(quote => quote.textContent().includes(searchValue));
      displayQuotes(filteredQuotes);
    });
  });
  