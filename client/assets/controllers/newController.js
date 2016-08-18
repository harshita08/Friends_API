(function(){

	angular
		.module("myApp")
		.controller("newCtrl", newController);

		newController.$inject = ['friendFactory', '$location', '$routeParams'];

		function newController(friendFactory, $location, $routeParams){
			var vm = this;
			vm.addFriend = addFriend;
			vm.allFriends = [];
			vm.newFriend = {};
			vm.oneFriend = {};
			vm.updateFriend = {};
			vm.setFriends = setFriends;
			vm.getOneFriend = getOneFriend;
			vm.setOneFriend = setOneFriend;
			vm.deleteFriend = deleteFriend;
			vm.displayFriends = displayFriends;
			vm.editFriend = editFriend;

			if($routeParams.id){
				getOneFriend($routeParams.id);
			}

			// method being called automatically when the controller loads
			friendFactory.getFriends(function(data){
				vm.allFriends = data;
			})

			function addFriend(){
				friendFactory.addFriends(vm.newFriend, setFriends);
			}

			function setFriends(data){
				vm.newFriend = {};
				$location.url('/display');
			}	

			function getOneFriend(index){
				friendFactory.getOneFriend(index, setOneFriend);		
			}

			function setOneFriend(friend){
				vm.oneFriend = friend;
			}

			function deleteFriend(index){
				friendFactory.deleteFriend(index, displayFriends);
			}
			function displayFriends(data){
				vm.allFriends = data;
			}
			function editFriend(index){
				friendFactory.editFriend(index, vm.updateFriend, function(data){
					vm.allFriends = data;
					$location.url('/display');
				});
			}

		}
})();
