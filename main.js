require.config({
    paths: {
        jquery: 'node_modules/jquery/dist/jquery'
    }
});
 
require(['math','multiply'], function( math, multiply) {
    alert(math.add(1,2) + ' and ' + multiply.multiply(4,5));

});