$( document ).ready( function ( e ) {
	$( "#run-first" ).click( function ( e ) {
		animateAll( "#box-first", 1 );
	} );

	$( "#run-second" ).click( function ( e ) {
		animateOneByOne( "#box-second", "GOMTI" );
	} );
} );

// Animate all the leters in the DIV
animateAll = function ( c, n ) {
	if ( n == 25 ) return false;
	$( c ).css( "font-family", "Raleway-f" + n );
	$( c ).css( "opacity", ( n * ( 100 / 12 ) ) / 100 );
	setTimeout( function () {
		animateAll( c, n + 1 );
	}, 44 );
};

// Append & Animate the letter One-by-One
animateOneByOne = function ( c, t ) {
	as = t.split( "" );
	$( c ).html( "" );
	for ( var a in as ) {
		$( c ).append( "<span id='bh-" + a + "'>" + as[ a ] + "</span>" );
		$( '#bh-' + a ).css( "opacity", 0 );
		setTimeout( animateAll, a * 1000, "#bh-" + a, 1 );
		console.log( as[ a ] );
	}
};
