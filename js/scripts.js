function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
	var self = this;
	this.$element = $('<button>');
	this.$element.text(this.text);
	$('body').append(this.$element);
	this.$element.click(function() {
		alert(self.text);

	});
}

}


var btn1 = new Button();
var btn2 = new Button("Goodbye");
var btn3 = new Button("Dzień dobry");
var btn4 = new Button("Do zobaczenia");

btn1.create();
btn2.create();
btn3.create();
btn4.create();

