require.config({
    paths: {
        jquery: 'node_modules/jquery/dist/jquery'
    }
});
 
require(['jquery','math','multiply'], function($, math, multiply) {
    alert(math.add(1,2) + ' and ' + multiply.multiply(2,3));

});