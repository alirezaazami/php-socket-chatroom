function start_socket(){
    let url="ws://"+local_variable.websocket_url;
    url=UpdateQueryStringParameter(url,'session_id',local_variable.session_id);
    console.log('socket started');
    return new WebSocket(url);
}


function UpdateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
        return uri + separator + key + "=" + value;
    }
}