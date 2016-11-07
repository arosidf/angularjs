app.controller('MainController',['$scope', function($scope){
	$scope.title='Belajar AngularJs';

	$scope.book={
		title: 'Belajar AngularJs Bersama Ocete',
		author : 'Rosid Febriansyah',
		price : 80000,
		pubdate : new Date('2015','09','01')
		};

	$scope.lists=[
		{
		title: 'Belajar AngularJs Bersama Rosid Febriansyah',
		author : 'Rosid Febriansyah',
		price : 80000,
		pubdate : new Date('2015','09','09'),
		likes : 0
		},
		{
		title: 'Belajar Ruby',
		author : 'Penulis Satu',
		price : 65000,
		pubdate : new Date('2015','10','09'),
		likes : 0
		},
		{
		title: 'Belajar Ruby on Rails',
		author : 'Penulis Dua',
		price : 90000,
		pubdate : new Date('2015','11','09'),
		likes : 0
		}
	];

	$scope.logToConsole=function(index){
		var list=$scope.lists[index];
		console.log(list);
	};

	$scope.likes=function(index){
		$scope.lists[index].likes+=1;
	};

	$scope.title='';
	$scope.log=function(){
		console.log($scope.title);
	};

	// Directives
	$scope.dunia="Dunia Indonesia";
	

	//Others
	$scope.customers = [
		{ name:'Rosid', city:'Dekeng' },
		{ name:'Riz', city:'Cinere' },
		{ name:'Luts', city:'Cibedug' }
	];
}]);