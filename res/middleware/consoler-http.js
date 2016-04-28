<script type="text/javascript" src="/socket.io/socket.io.js"></script>
<script type="text/javascript">
(function(window) {
    var socket = io('http://' + document.location.host);
    var previousConsole = window.console || {};
    window.console = {
        log:function(vargs){
            previousConsole.log && previousConsole.log.apply(previousConsole,arguments);
            socket.emit('console','log', Array.from(arguments).join(" "));
        },
        warn:function(vargs){
            previousConsole.warn && previousConsole.warn.apply(previousConsole,arguments);
            socket.emit('console','warn', Array.from(arguments).join(" "));
        },
        error:function(vargs){
            previousConsole.error && previousConsole.error.apply(previousConsole,arguments);
            socket.emit('console','error', Array.from(arguments).join(" "));
        },
        assert:function(assertion ,vargs){
            previousConsole.assert && previousConsole.assert.apply(previousConsole, arguments);
            if(assertion){
                socket.emit('console','assert', Array.from(arguments).join(" "));
            }
        }
    }
})(window);
</script>
