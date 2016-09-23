angular.module( 'quoteBook' ).controller( 'mainCtrl', function( $scope, dataService ){

  $scope.quotes = dataService.getData();

  $scope.addQuote = function( val1, val2 ){

    var newQuote = {
      text: $scope.newQuoteText,
      author: $scope.newQuoteAuthor
    };

    if (dataService.addData( newQuote ) ) {
      $scope.newQuoteText = '';
      $scope.newQuoteAuthor = '';
    }

  };

  $scope.deleteQuote = function( deleteText ){
    dataService.removeData( deleteText );
  };

  $scope.clearCookies = function(){

  };

});
