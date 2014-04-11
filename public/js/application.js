
$(document).ready(function(){
    var domSelectors = {
        colorButton: "#get_color",
        board:  '#color_me > li'
    }
    var client = new Client('POST', '/color')
    var view   = new View(domSelectors)
    var controller = new Controller(client, view)

    controller.listeners()
});