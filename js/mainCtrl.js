angular.module( 'quoteBook' ).controller( 'mainCtrl', function( $scope, dataService, $cookies ){

  $scope.quotes = dataService.getData();

  $scope.newQuoteText = $cookies.get('test1');
  $scope.newQuoteAuthor = $cookies.get('test2');


  $scope.addQuote = function( val1, val2 ){

    $cookies.put( 'test1', val1 );
    $cookies.put( 'test2', val2 );

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

  // $scope.myCookieVal = $cookies.get('cookie');
  //
  // $scope.setCookie = function(val){
  //   $cookies.put('cookie', val);
  // };

});
