function View(selectors) {
    this.colorButton = selectors["colorButton"]
    this.board  = selectors["board"]
}

View.prototype = {
    getColorButton: function () {
        return document.querySelector(this.colorButton)
    },
    getBoard: function() {
        return document.querySelectorAll(this.board)
    },
    colorIn: function(cell, color) {
        var board = this.getBoard()
        console.log(board[cell])
        board[cell].style.background = color
    }

}