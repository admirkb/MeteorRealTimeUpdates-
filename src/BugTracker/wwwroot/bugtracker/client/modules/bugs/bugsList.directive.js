(function() {
    'use strict';

    angular
        .module('bugTracker')
        .directive('bugsList', bugsList);

    bugsList.$inject = ['$window'];
    
    function bugsList ($window) {
        // Usage:
        //     <bugsList></bugsList>
        // Creates:
    	// 

    	controller.$inject = ["$scope", "$reactive", "$window"];

        var directive = {
            link: link,
            restrict: 'E',
            templateUrl: 'client/modules/bugs/html/bugs-list.html',
            controllerAs: 'bugsList',
            controller: controller

        };
        return directive;

        function controller($scope, $reactive, $window) {
        	$reactive(this).attach($scope);

        	this.helpers({
        		bugs: () => {
        			return Bugs.find({});
        		}
        	});

        	this.addBug = () => {
        		this.newBug.dateCreated = new Date();
        		Bugs.insert(this.newBug);
        		this.newBug = {};
        	};

        	this.DeleteBug = (bug, key) => {

        		Bugs.remove({ _id: bug._id });
        	}

        	this.EditBug = (bug, key) => {

        		bug.isEditable = true;
        		bug.origProblem = bug.problem;
        		bug.origResponse = bug.response;

        		Bugs.update({ _id: bug._id }, { $set: { isDisabled: true, isEditable: bug.isEditable, editColor: "red" } });

        		bug.isDisabled = false;
        		bug.editColor = "transparent";
        	}

        	this.CancelBug = (bug, key) => {

        		bug.isEditable = false;
        		bug.problem = bug.origProblem;
        		bug.response = bug.origResponse;

        		Bugs.update({ _id: bug._id }, { $set: { isDisabled: false, isEditable: bug.isEditable, editColor: "transparent" } });
        	}

        	this.UpdateBug = (bug, key) => {

        		Bugs.update({ _id: bug._id }, { $set: { isDisabled: false, isEditable: false, problem: bug.problem, response: bug.response, dateResolved: new Date(), editColor: "transparent" } });
        		bug.isDisabled = false;
        		bug.editColor = "transparent";
        	}

        }

        function link(scope, element, attrs) {
        }
    }

})();