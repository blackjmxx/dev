
            var key = "f1484f3b-34be-43d1-a446-ce3e6599a037"; // Your unique development key
            var cid = "16101"; // The community id

            micello.maps.init(key,mapInit);

            function  mapInit()  {
				var  mapControl  =  new  micello.maps.MapControl('mapElement');
				var  mapDataObject  =  mapControl.getMapData();
				
				// Optionally instantiate the Directory plugin 
				var Directory = new micello.maps.Directory;
				mapControl.initMapPlugin(Directory);
				Directory.DirectoryInit();
				// End of optional code for Directory plugin

				mapDataObject.loadCommunity(cid);
            }