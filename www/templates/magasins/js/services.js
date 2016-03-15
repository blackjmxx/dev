appServices.factory("magasins",function($rootScope){
  var magasins = [
  {id: 0,
  	class: 'magasin',
  	img: "http://media2.auchan.fr/assets/logo_auchan_new.png",
    name: 'Auchan',
    nb:18,
    venues:[{departement:"95",address:"22 rue du pieuré"},{departement:"88",address:"22 rue du pieuré"},{departement:"22",address:"22 rue du pieuré"},{departement:"78",address:"22 rue du pieuré"}]
  },
  {id: 23,
  class: 'magasin',
  img: '../../../img/carrefour-logo.png',
  name: 'Carrefour',
  nb:14,
  venues:[{departement:"95",address:"22 rue du pieuré"},{departement:"88",address:"22 rue du pieuré"},{departement:"22",address:"22 rue du pieuré"},{departement:"78",address:"22 rue du pieuré"}]
  },
  {id: 24,
  class: 'magasin',
  img: '../../../img/logo_monoprix.png',
  name: 'Monoprix',
  nb:3,
  venues:[{departement:"95",address:"22 rue du pieuré"},{departement:"88",address:"22 rue du pieuré"},{departement:"22",address:"22 rue du pieuré"},{departement:"78",address:"22 rue du pieuré"}]
  }];
return{
  all:function(argument) {
    return magasins;
  }
}
});
