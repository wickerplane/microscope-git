Template.postItem.helpers ({
	ownPost: function() {
		console.log("FUCK ME IN THE ASSHOLE - NICK MANCINI");
		return this.userId === Meteor.userId();
	},
	domain: function() {
		var a = document.createElement('a');
		a.href = this.url;
		return a.hostname;
	}
});