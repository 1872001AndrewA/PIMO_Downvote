var app = angular.module("myModule", [])
		.controller("myController" , function($scope){
									
	var members =[
		{name: "John Smith", comment: "Komentar 1", Upvotes : 4, Downvotes: 1, clicked: 0},
		{name: "John Doe", comment: "Komentar lainnya", Upvotes : 3, Downvotes: 5, clicked: 0},
		{name: "John Parker", comment: "Data komentar disimpan di variabel dulu", Upvotes : 7, Downvotes: 0, clicked: 0},
	];				

	$scope.members = members;
	
	$scope.incrementDown = function(member){
		if (member.clicked == 0){
			member.Downvotes++;
			member.clicked = 1;
		} else {
			member.Downvotes--;
			member.clicked = 0;
		}
	}
});	