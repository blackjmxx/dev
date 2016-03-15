angular.module('cadynoApp.services',[])
.factory("listCourseManagerServices",function($rootScope){
})
.factory("products",function($rootScope){

  var products = [{
    id: 0,
  	class: 'product',
  	img: 'img/menu/img.png',
      name: 'Fruit/Legumes',

    },
    id: 1,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Pâtisseries',

    },
    id: 2,
    class: 'product',
    img: 'img/menu/img.png',
      name: 'Boulangerie',

    },

    id: 2,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Produits Laitiers',

    },

    id: 3,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Poissson',

    },

    id: 4,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Viandes',

    },
    id: 5,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Ingrédients & Epices',

    },

    id: 6,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Surgelés',

    },

    id: 7,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Plats cuisinés',

    },
    id: 8,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Pates, Riz Céreales',

    },
    id: 9,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Snaks & Friandises',

    },
    id: 10,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Boissons',

    },
    id: 11,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Menage & Hygiene',

    },
    id: 12,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Animaux',

    },
    id: 13,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Bio',

    },
    id: 14,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Enfants',

    },
    id: 15,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Textiles',

    },
    id: 16,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Culture/Loisirs',

    },
    id: 17,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Multimedia',

    },id: 18,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Electroménager',

    },id: 19,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Brico & Jardin',

    },id: 20,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Automobiles',

    },
    id: 21,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Maison',

    },
    id: 22,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Animaux',
    },
    id: 23,
    class: 'product',
    img: 'img/menu/img.png',
      name: 'Para',
    },
    id: 24,
    class: 'product',
    img: 'img/menu/img.png',
      name: 'Autres',
    },
  }];

return{
  all:function(argument) {
    return products;
  }
}

});
