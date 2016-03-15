appServices.factory("magasins",function($rootScope){
  var magasins = [
  {id: 0,
  	class: 'magasin',
  	img: "http://91.68.209.9/bmi/media2.auchan.fr/assets/logo_auchan_new.png",
    name: 'Auchan',
  },
  {id: 23,
  class: 'magasin',
  img: 'http://91.68.209.9/bmi/media2.auchan.fr/assets/logo_auchan_new.png',
  name: 'Carrefour',
  },
  {id: 24,
  class: 'magasin',
  img: 'img/other.svg',
  name: 'Testmagasin3',
  }];
return{
  all:function(argument) {
    return magasins;
  }
}
});
