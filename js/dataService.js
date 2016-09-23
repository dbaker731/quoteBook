angular.module( 'quoteBook' ).service( 'dataService', function( $cookies ){

  //creating an array of quote objects
  var quotes = [
    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];


  // creating a cookieQuote varibale to hold the cookie of the quotes array
  var cookieQuote = $cookies.getObject('quoteCookie');

  // creating a function to push the quote array to the mainCtrl
  this.getData = function(){
    // running an if statement to check if the cookie exists
    if ( cookieQuote ) {
      //returning the cookie quote array if it exists
      return cookieQuote;
    } else{
      //returning the original array if there are no cookies
      return quotes;
    }
  };

// creating a function to add quotes
  this.addData = function( quote ){
    if( quote.text && quote.author ){
      quotes.push( quote );
      // creating a cookie to store the array
      $cookies.putObject('quoteCookie', quotes);

      // allowing the cookie array to accept new quotes
      if ( cookieQuote ) {
        cookieQuote.push ( quote );
        // updating the cookie to reflect the new quote
        $cookies.putObject('quoteCookie', cookieQuote);
      }

      return true;
    }
    return false;
  };

  // creating a function to delete quotes
  this.removeData = function( quoteText ){
    for (var i = 0; i < quotes.length; i++) {
      if (quotes[i].text.toLowerCase() === quoteText.toLowerCase() ) {
        quotes.splice( i, 1 );
      }
    // deleting from the cookie array
    for (var j = 0; j < cookieQuote.length; j++) {
      if (cookieQuote[j].text.toLowerCase() === quoteText.toLowerCase()) {
        cookieQuote.splice( j, 1 );
        // updating the cookie
        $cookies.putObject('quoteCookie', cookieQuote);
      }
    }

    }
  };


});
