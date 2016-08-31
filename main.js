require.config({
    paths: {
        jquery: 'node_modules/jquery/dist/jquery'
    }
});
 
require(['jquery','math'], function($, math) {
    alert($().jquery);
    alert(math.add(1,2));
});