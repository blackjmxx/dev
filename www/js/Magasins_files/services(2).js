appServices.factory("products",function($rootScope){
  var products = [
    {id: 0,
  	class: 'product',
  	img: 'img/index.svg',
    name: 'Fruit',
  },
  {id: 23,
  class: 'product',
  img: 'img/legumes.svg',
  name: 'Legumes',
  },
    {id: 1,
  	class: 'product',
    img: 'img/patiseri.svg',
      name: 'Pâtisseries',
    },
    {id: 2,
    class: 'product',
    img: 'img/bread.svg',
      name: 'Boulangerie',

    },

    {id: 2,
  	class: 'product',
    img: 'img/milk.svg',
      name: 'Produits Laitiers',

    },

    {id: 3,
  	class: 'product',
    img: 'img/fish.svg',
      name: 'Poissson',

    },
    {id: 7,
    class: 'product',
    img: 'img/Nova-Free-Pack/SVG/SolidIcons/chef-hat.svg',
      name: 'Plats cuisinés',
    },
    {id: 5,
  	class: 'product',
    img: 'img/spice.svg',
      name: 'Ingrédients & Epices',

    },
    {id: 6,
  	class: 'product',
    img: 'img/frozen.svg',
      name: 'Surgelés',
    },
    {id: 4,
    class: 'product',
    img: 'img/Nova-Free-Pack/SVG/SolidIcons/food-steakCopy.svg',
      name: 'Viandes',
    }
    ,
    {id: 8,
  	class: 'product',
    img: 'img/ble.svg',
      name: 'Pates, Riz Céreales',
    },
    {id: 9,
  	class: 'product',
    img: 'img/bonbon.svg',
      name: 'Snaks & Friandises',

    },
    {id: 10,
  	class: 'product',
    img: 'img/drink.svg',
      name: 'Boissons',

    },
    {id: 11,
  	class: 'product',
    img: 'img/menage.svg',
      name: 'Menage & Hygiene',

    },

    {id: 13,
  	class: 'product',
    img: 'img/bio.svg',
      name: 'Bio',

    },
    {id: 14,
  	class: 'product',
    img: 'img/kids.svg',
      name: 'Enfants',

    },
    {id: 15,
  	class: 'product',
    img: 'img/tee.svg',
      name: 'Textiles',

    },
    {id: 16,
  	class: 'product',
    img: 'img/book.svg',
      name: 'Culture/Loisirs',
    },
    {id: 16,
    class: 'product',
    img: 'img/lego.svg',
      name: 'Jouet',
    },
    {id: 17,
  	class: 'product',
    img: 'img/multimedia.svg',
      name: 'Multimedia',

    },{id: 18,
  	class: 'product',
    img: 'img/menu/img.png',
      name: 'Electroménager',

    },{id: 19,
  	class: 'product',
    img: 'img/saw.svg',
      name: 'Brico & Jardin',

    },{id: 20,
  	class: 'product',
    img: 'img/Nova-Free-Pack/SVG/SolidIcons/car-2.svg',
      name: 'Automobiles',

    },
    {id: 21,
  	class: 'product',
    img: 'img/Nova-Free-Pack/SVG/SolidIcons/places-home-4.svg',
      name: 'Maison',

    },
    {id: 22,
  	class: 'product',
    img: 'img/pet.svg',
      name: 'Animaux',
    },
    {id: 23,
    class: 'product',
    img: 'img/Nova-Free-Pack/SVG/SolidIcons/health-medicine-bottle.svg',
      name: 'Para',
    },
    {id: 24,
    class: 'product',
    img: 'img/other.svg',
      name: 'Autres',
    }];
return{
  all:function(argument) {
    return products;
  }
}
})
.factory("CartsProducts", function(){
  var ordersProducts = [];
  var cartsProducts = [];
  var total = function(){
    return ordersProducts.length
  }
  return {
        all: function() {
            return cartsProducts;
        },
        ordersProducts:ordersProducts,
        total:total
    };

});
