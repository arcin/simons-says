function Controller(client, view) {
    this.client = client
    this.view   = view
}

Controller.prototype = {
    try: function(){
        this.client.request().done(this.onSuccess.bind(this)).fail(this.onFail)
    },
    onSuccess: function(data){
        this.view.colorIn(data.cell, data.color)
    },  
    onFail: function(serverResponse){
        console.log(serverResponse)
    },
    listeners: function(){
        var colorButton = this.view.getColorButton()
        colorButton.addEventListener('click', this.try.bind(this), false)
    }
}