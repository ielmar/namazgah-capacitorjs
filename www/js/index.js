/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
//        document.addEventListener('DOMContentLoaded', this.fastclick, false);
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		// hide splashscreen if document is ready
        $( document ).ready(function() {
			setTimeout(function(){
				navigator.splashscreen.hide();
			},1500);
		});
		
        var mescidler = '[{"ad": "Hava Limanı – Xanım Fatimə Zəhra məscidi","sekil": "locations/mescidler/hava-limani-fatmeyi-zehra-mescidi.jpg","latitude": "40.273368","longitude": "49.313796"},{"ad": "Şamaxı rayonu Ərəbşalbaş kəndi","sekil": "locations/mescidler/samaxi-mescidi.jpg","latitude": "40.6235768","longitude": "48.6374073","description": "Dəstəmazxana - Var, Təharətxana - Var, 20 nəfər camaat namazı qılına bilər. Qadınlar üçün yer ayrılmayıb."},{"ad": "Qobustan","sekil": "locations/mescidler/Qobustan.jpg","latitude": "40.085991","longitude": "49.411413","description": "Dəstəmazxana - Var, Təharətxana - Var, 50 nəfər camaat namazı qılına bilər. Qadınlar üçün yer ayrılmayıb."},{"ad": "Quba","sekil": "locations/mescidler/quba-cume-mescidi.jpg","latitude": "41.3631894","longitude": "48.5099172","description": "Dəstəmazxana - Var, Təharətxana - Var, 50 nəfər camaat namazı qılına bilər. Qadınlar üçün yer ayrılmayıb."},{"ad": "Beş Barmaq","sekil": "locations/mescidler/5Barmaq.jpg","latitude": "40.9194032","longitude": "49.1047211","description": "Dəstəmazxana - Var, Təharətxana - Var, 30 nəfər camaat namazı qılına bilər. Qadınlar üçün yer ayrılmayıb."},{"ad": "İçərişəhər Cümə məscidi","sekil": "locations/mescidler/iceriseher-cume-mescidi.JPG","latitude": "40.365401","longitude": "49.835666","description": "Dəstəmazxana - Həyətdə Təharətxana - Həyətdə Camaat namazı qılına bilər. Qadınlar üçün yer ayrılmayıb."},{"ad": "Əjdərbəy məscidi","sekil": "locations/mescidler/ejderbey-mescidi.JPG","latitude": "40.3858234","longitude": "49.8372618","description": "Dəstəmazxana - Həyətdə Təharətxana - Həyətdə Camaat namazı qılına bilər. Qadınlar üçün yer ayrılmayıb."},{"ad": "Ləzgi məscidi","sekil": "locations/mescidler/lezgi-mescidi.JPG","latitude": "40.365571","longitude": "49.836161","description": "Dəstəmazxana - Həyətdə Təharətxana - Həyətdə Camaat namazı qılına bilər. Qadınlar üçün yer ayrılmayıb."}]';
		
        var locations = '[{"ad": "Avtovağzal Kompleksi","sekil": "locations/namazgahlar/avtovagzal.jpg","latitude": "40.245887","longitude": "49.475074","description": "Dəstəmazxana - Tualet Təharətxana - Tualet  1-ci mərtəbədə yerləşir. Qadınlar üçün yer ayrılmayıb."},{"ad": "Başkent 3-cü mkr. dairəsi.","sekil": "locations/namazgahlar/baskent.jpg","latitude": "40.242350","longitude": "49.484942","description": "Dəstəmazxana - var, Təharətxana - Tualet 15 nəfər camaat namazı qılına bilər.  Qadınlar üçün yer ayrılmayıb ancaq, kişilər olmayan zaman qıla bilərlər."},{"ad": "Mado Nərimanov","sekil": "locations/namazgahlar/mado-nerimanov.jpg","latitude": "40.248999","longitude": "49.521062","description": "Dəstəmazxana - Tualet Təharətxana - Tualet 30 nəfər camaat namazı qılına bilər. 3-cü mərtəbədə yerləşir. Qadınlar üçün yer ayrılmayıb."}, {"ad": "Mado Torqovıy.","sekil": "locations/namazgahlar/mado-torgoviy.jpg","latitude": "40.221837","longitude": "49.501852","description": "Dəstəmazxana - var, Təharətxana - Tualet 4 nəfər camaat namazı qılına bilər. Zirzəmidə yerləşir. Qadınlar üçün yer ayrılmayıb."},{"ad": "Mado Nərimanov","sekil": "locations/namazgahlar/mado-nerimanov.jpg","latitude": "40.242624","longitude": "49.521749","description": "Dəstəmazxana - Tualet Təharətxana - Tualet 30 nəfər camaat namazı qılına bilər. 3-cü mərtəbədə yerləşir. Qadınlar üçün yer ayrılmayıb."},{"ad": "Metropark T. M.","sekil": "locations/namazgahlar/metropark.jpg","latitude": "40.241224","longitude": "49.521962","description": "Dəstəmazxana - var, Təharətxana - Tualet 15 nəfər camaat namazı qılına bilər. 1-ci mərtəbədə yerləşir. Qadınlar üçün yer var."},{"ad": "Öz Süt restoranı","sekil": "locations/namazgahlar/ozsut.jpg","latitude": "40.246418","longitude": "49.511010","description": "Dəstəmazxana - Tualet Təharətxana - Tualet 5 nəfər camaat namazı qılına bilər. Mətbəxə yaxın yerdə yerləşir. Ofisantdan soruşmaq olar. Qadınlar üçün yer ayrılmayıb."},{"ad": "Tərgül T. M.","sekil": "locations/namazgahlar/tergul-ticaret-merkezi.jpg","latitude": "40.250608","longitude": "49.502268","description": "Dəstəmazxana - Tualet Təharətxana - Tualet 7 nəfər camaat namazı qılına bilər. 2-ci mərtəbədə yerləşir. Qadınlar üçün yer pərdə ilə ayrılıb."},{"ad": "Olimpik Star","sekil": "locations/namazgahlar/olimpik-star.jpg","latitude": "40.244652","longitude": "49.495289","description": "Dəstəmazxana - Tualet Təharətxana - Tualet 8 nəfər camaat namazı qılına bilər. 1-ci mərtəbədə restoranın yanından çölə çıxan zaman solda yerləşir. Qapını kilidlə bağlamaqla qadınlar da qılabilər."},{"ad": "Badamdar Maşın bazarı","sekil": "locations/namazgahlar/masin-bazari.jpg","latitude": "40.213791","longitude": "49.475386","description": "Dəstəmazxana – Yandakı avto yuyucuda almaq olar Təharətxana - yoxdur 7 nəfər camaat namazı qılına bilər."},{"ad": "50 Qəpik Kafe – 28 May","sekil": "locations/namazgahlar/kafe-50-qepik.jpg","latitude": "40.225402","longitude": "49.504154","description": "Dəstəmazxana - Tualet Təharətxana - Tualet 5 nəfər camaat namazı qılına bilər."},{"ad": "Borş Kafe – 28 May","sekil": "locations/namazgahlar/kafe-borsh.jpg","latitude": "40.225327","longitude": "49.504552","description": "Dəstəmazxana - Tualet Təharətxana - Tualet 6 nəfər camaat namazı qılına bilər."},{"ad": "Dafne by Dalida Restoranı","sekil": "locations/namazgahlar/dafne-by-dalida.jpg","latitude": "40.222826","longitude": "49.503344","description": "Dəstəmazxana və Təharətxana - yoxdur 20 nəfər camaat namazı qılına bilər. Namaz otağı zirzəmidə - mənfi ikinci mərtəbədə yerləşir."},{"ad": "Urfa Restoran","sekil": "locations/namazgahlar/urfa.jpg","latitude": "40.231889","longitude": "49.572535","description": "Dəstəmazxana – var, ikinci mətrəbədə yerləşir Təharətxana - Tualet 6 nəfər camaat namazı qılına bilər."},{"ad": "Atrium","sekil": "locations/namazgahlar/atrium.jpg","latitude": "40.253080","longitude": "49.504609","description": " Dəstəmazxana – var, Təharətxana - Tualet 3 – cü mərtəbədə yerləşir 6 nəfərcamaat namazı qılına bilər."}]';
                
        app.locationsObject = JSON.parse(mescidler);
		
		console.log(app.locationsObject);
        
        // attach fastlick
        FastClick.attach(document.body);
        
//        function onBtnClicked() {
//            map.showDialog();
//        }
        
        // check if city selected
        app.checkCity();
        
        var starting = {
            latitude: 0,
            longitude: 0
        };
        
        var watchID = null;
        var options = { maximumAge: 1000*60*10, timeout: 60*1000*2, enableHighAccuracy: true };
        
        // get current position
        watchID = navigator.geolocation.watchPosition(
            function(position){
                starting.latitude = position.coords.latitude;
                starting.longitude = position.coords.longitude;
                
                // clear watch 
                navigator.geolocation.clearWatch(watchID);
            },
            function(error){
                console.log('code: ' + error.code + '\n' +
                      'message: ' + error.message + '\n');
                watchID = navigator.geolocation.watchPosition(
                    function(position){
                        starting.latitude = position.coords.latitude;
                        starting.longitude = position.coords.longitude; 
                        
                        // clear watch 
                        navigator.geolocation.clearWatch(watchID);
                    },
                    function(error){
                        console.log('code: ' + error.code + '\n' +
                              'message: ' + error.message + '\n');
                    },
                options
                );                                  
            }, 
            options
        );
        
        app.starting = starting;
        
          // insert map template to content tag
          var mapdiv = document.getElementById('map-template').innerHTML;
          $('body').append(mapdiv);
          
          // set height to the div
          $('#map_canvas').css('height',$(window).height()-$('nav').height());
        
        // create map
		var currentLocation = new plugin.google.maps.LatLng(starting.latitude,starting.longitude);
        var mapDiv = document.getElementById('map_canvas');
        var map = plugin.google.maps.Map.getMap(mapDiv, {
			'camera': {
			  'latLng': currentLocation,
//			  'zoom': 17
			}
		  });
        map.addEventListener(plugin.google.maps.event.MAP_READY, app.onMapReady);
        
        window.addEventListener("popstate", function(e) {

            // URL location
            var location = document.location;

            // state
            var state = e.state;
            console.log(state+' '+location);

        });
    },
    getNamazgahLists: function(){
        $('#map_canvas').css('display','none');
        $('content').css('display','block');
        
        // close map
        plugin.google.maps.Map.isAvailable(function(isAvailable, message) {
            if (isAvailable) {
                var map = plugin.google.maps.Map.getMap();
                map.clear();
//                map.closeDialog();
            } else {
                console.log(message);
            }
        });
        
        // insert namazgahlist template
        var namazgahList = document.getElementById('namazgahList-template').innerHTML;
        $('body content').html(namazgahList);
                
        var sortLists = [];
        
        for(var i = 0, cnt = app.locationsObject.length; i < cnt; i++)
        {
            var val = app.locationsObject[i];
            var ending = {latitude: 0,longitude: 0};
            ending.latitude = parseFloat(val.latitude);
            ending.longitude = parseFloat(val.longitude);
                    
            var starting = app.starting;
            var distance = app.calculateDistance(app.starting, ending);

            var code = '<li data-no="'+i+'" data-ad="'+val.ad+'" data-sekil="'+val.sekil+'" data-description="'+val.description+'" data-distance="'+distance+'" data-latitude="'+val.latitude+'" data-longitude="'+val.longitude+'" class="collection-item avatar"><img src="'+val.sekil+'" alt="'+val.ad+'" class="circle"><span class="title">'+val.ad+'</span><p> '+distance+' km</p></li>';
            
            sortLists[i] = {distance: distance, code: code};  
        }

//        $.each(app.locationsObject, function(i, val){
//            var ending = {latitude: 0,longitude: 0};
//            ending.latitude = parseFloat(val.latitude);
//            ending.longitude = parseFloat(val.longitude);
//                    
//            var starting = app.starting;
//            var distance = app.calculateDistance(app.starting, ending);
//
//            var code = '<li data-no="'+i+'" data-ad="'+val.ad+'" data-sekil="'+val.sekil+'" data-description="'+val.description+'" data-distance="'+distance+'" data-latitude="'+val.latitude+'" data-longitude="'+val.longitude+'" class="collection-item avatar"><img src="'+val.sekil+'" alt="'+val.ad+'" class="circle"><span class="title">'+val.ad+'</span><p> '+distance+' km</p></li>';
//            
//            sortLists[i] = {distance: distance, code: code};
//        });
        
        var lis = '';
        
        sortLists.sort(app.SortLowToHigh);
        
        for(var i = 0, cnt = sortLists.length; i < cnt; i++)
        {
            lis += sortLists[i].code;
        }
        
//        $.each(sortLists, function(i, obj){
//            lis += obj.code;
//        });
        
        
        // change list items inside namazgah-list ul
        $(".namazgah-list ul.collection").html(lis);
        
//        $('.namazgah-list').css('display','block');
        $('.namazgah-list').css('height',$(window).height()-$('nav').height());
        
        window.location.hash='namazgahlar';
        window.history.pushState({page:'namazgahlar'}, "Namazgahlar", "namazgahlar");
    
    },
    onMapReady:function(map) {        
      // Show the map dialog when the button is clicked.
      var button = document.getElementById("showMap");
      button.addEventListener("click", function() {

          $('#map_canvas').css('display','block');
          $('content').css('display','none');
          
          plugin.google.maps.Map.isAvailable(function(isAvailable, message) {
			  // if map is not available, create it
              if (!isAvailable) {
                  var map = plugin.google.maps.Map.getMap();
                  map.setClickable(true);
              } else {
				  // map is available already
                  //console.log(message+' xerite var');
              }
          });
          
            var yourLocation = null;
            map.getMyLocation(function(location) {
                yourLocation = location.latLng;

                map.addMarker({
                    "position": yourLocation,
                    icon: 'blue',
                    "title": "Olduğum yer"
                  }, function(marker) {
                    if(!marker.isVisible())
                        marker.showInfoWindow();
                  });
				
                  map.moveCamera({
//                    "target": yourLocation,
                    "zoom": 17
                  });
				
//				addMarkers: function(data, callback) {
//				  var markers = [];
//				  function onMarkerAdded(marker) {
//					markers.push(marker);
//					if (markers.length === data.length) {
//					  callback(markers);
//					}
//				  }
//				  data.forEach(function(markerOptions) {
//					map.addMarker(markerOptions, onMarkerAdded);
//				  });
//				}
				
//                $.each(app.locationsObject, function(i, val){
//                    var markerPosition = new plugin.google.maps.LatLng(val.latitude,val.longitude);
//
//                    map.addMarker({
//                        "position": markerPosition,
//                        "title": val.ad
//                    }, function(marker) {
//                        marker.showInfoWindow();
//                    });  
//                });

            });

      }, false);
        
    },
    checkCity: function() {
        // try to get city from localStorage
        var city = window.localStorage.getItem('selectedCity');
        
        // check if city is not empty. empty means first time opening program
        if(!city)
        {
            var citySelect = document.getElementById('citySelect-template').innerHTML;
            var div = document.createElement("div");
            div.innerHTML = citySelect;
            document.body.appendChild(div);

            
            // set city to the selected one when clicked on. Plus, set latitude and longitude
            // then reload the page
            function selectCity(){
                window.localStorage.setItem('selectedCity',document.querySelector(".city").getAttribute("city-name"));
                window.localStorage.setItem('latitude',document.querySelector(".city").getAttribute('city-latitude'));
                window.localStorage.setItem('longitude',document.querySelector(".city").getAttribute('city-longitude'));
                window.location.reload();
            }
            var anchor = document.getElementById('baki');
            if(anchor.addEventListener) // DOM method
                anchor.addEventListener('click', selectCity, false);
        }
        // selectedCity exists in localStorage
        else
        {
            // insert nav template to body
            var nav = document.getElementById('nav-template').innerHTML;
            $('body').append(nav);
            
            // insert index template to content tag
            var index = document.getElementById('index-template').innerHTML;
            $('body content').html(index);
            
            // attach sideNav
            $('.button-collapse').on('click', function(){
                if($('.side-nav').css('left')=='0px')
                {
                      plugin.google.maps.Map.isAvailable(function(isAvailable, message) {
                        if (isAvailable) {
                            var map = plugin.google.maps.Map.getMap();
                            map.setClickable(true);
                        } else {
                          console.log(message);
                        }
                      });
                }
                else
                {
                      plugin.google.maps.Map.isAvailable(function(isAvailable, message) {
                        if (isAvailable) {
                            var map = plugin.google.maps.Map.getMap();
                            map.setClickable(false);
                        } else {
                          console.log(message);
                        }
                      });
                }
            });
            $('.button-collapse').sideNav({
                menuWidth: 300,
                edge: 'left',
                closeOnClick: true
            });
            
//            $('.modal-trigger').leanModal();
            
            $(document).on('click', '.showNamazgah', function(){
                app.getNamazgahLists();
            });
            
            $(document).on('click', ".namazgah-list .collection li", function(){
                // close map 
                plugin.google.maps.Map.isAvailable(function(isAvailable, message) {
                    if (isAvailable) {
                        var map = plugin.google.maps.Map.getMap();
                        map.clear();
                        map.closeDialog();
                    } else {
                        console.log(message);
                    }
                });
                
                var index = document.getElementById('namazgah-template').innerHTML;
                $('.namazgah-list').html(index);
                $('.namazgah-list .card-image img').attr('src', $(this).attr('data-sekil'));
                $('.namazgah-list .card-title').html($(this).attr('data-ad'));
                $('.namazgah-list .card-content p').html($(this).attr('data-description'));
                $('.namazgah-list .card-action a').attr('data-latitude',$(this).attr('data-latitude'));
                $('.namazgah-list .card-action a').attr('data-longitude',$(this).attr('data-longitude'));
                
                window.location.hash='namazgahlar-'+$(this).attr('data-no');
            });
            
            $(document).on('backbutton', function(e){
                e.preventDefault();
                app.manageBackButton();
            });
            
            $('.showTimes').on('click', function(){
                app.showTimes(city);                
            });
            
            $('.dropdown-button').dropdown({
                  inDuration: 300,
                  outDuration: 225,
                  constrain_width: false, // Does not change width of dropdown to that of the activator
                  hover: false, // Activate on hover
                  gutter: 0, // Spacing from edge
                  belowOrigin: true, // Displays dropdown below the button
                  alignment: 'left' // Displays dropdown with edge aligned to the left of button
                }
              );
            
            app.showTimes(city);
			
//			// every second get date and time
//			var timer = setInterval(function () {
//				// get date. date is checked every second
//				app.writeDate();
//
//				// get time. time is renewed every second
//				app.writeIslamicDate();
//			}, 1000);
        }
    },
    manageBackButton: function()
    {
        if(window.location.href.indexOf('namazgahlar')!=-1)
        {
            var index = document.getElementById('index-template').innerHTML;
            $('body content').html(index);

            app.getNamazgahLists();
        }
    },
    showTimes: function(city){
        var index = document.getElementById('index-template').innerHTML;
        $('body content').html(index);
        
        $('#map_canvas').css('display','none');
        $('content').css('display','block');
        
        // close map
        plugin.google.maps.Map.isAvailable(function(isAvailable, message) {
            if (isAvailable) {
                var map = plugin.google.maps.Map.getMap();
                map.closeDialog();
            } else {
                console.log(message);
            }
        });
        
        // Get Gregorian and Hijri dates and show
        app.writeIslamicDate();
        app.writeDate();

        app.showDua();

        // get prayer times and show appropriately
        app.showNextSalahTime(city);
        
        // show hash. it's used to manage back button
        window.location.hash='times';
    },
    SortLowToHigh:function(a, b) {
        return a.distance-b.distance;
    },
    toRad:function(value) {
	  var RADIANT_CONSTANT = 0.0174532925199433;
	  return (value * RADIANT_CONSTANT);
	},
	calculateDistance:function(starting, ending) {
	  var KM_RATIO = 6371;
	  try {      
	    var dLat = app.toRad(ending.latitude - starting.latitude);
	    var dLon = app.toRad(ending.longitude - starting.longitude);
	    var lat1Rad = app.toRad(starting.latitude);
	    var lat2Rad = app.toRad(ending.latitude);
	    
	    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
	            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1Rad) * Math.cos(lat2Rad);
	    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	    var d = KM_RATIO * c;
	    return Math.round(d*10)/10;
	  } catch(e) {
	    return -1;
	  }
	},
    onError: function(error) {
        console.log('onError navigator code: '    + error.code    + '\n message: ' + error.message + '\n');
    },
    showDua: function(){
                var gununduasi = [
            "Allah Rəsulu sallallahu aleyhi və səlləm Hz.İbrahimə endirilən on səhifədən bunları nəql edir: /n/r-“Ağıl sahibinin müəyyən saatları olmalıdır: Vaxtının bir qismini Rəbbinə dua və niyaza, bir qismini Uca Allahın sənət və qüdrətini təfəkkürə, bir qismini keçmişdə etdiklərini düşünməyə və gələcəkdə edəcəklərini planlaşdırmağa, bir qismini də halal yoldan məişət ehtiyaclarını təmin etməyə ayırmalıdır.”/n/r(Əbu Nuaym, Xilyə, I,167, İbn Əsir, əl-Kamil,I,124)",
            "Bişri Hafiz həzrətləri buyurur ki:/n/r- “İnsanlar Allahın əzəmətini haqqı ilə təfəkkür etsələr, Ona qarşı üsyan edə bilməz, günah edə bilməzdilər.”/n/r(İbn Kəsir, I,448, Əli İmran-190 ayəsinin təfsiri)",
            "Məgər onlar başlarının üstündəki göyə baxıb onu necə yaratdığımızı, necə bəzədiyimizi və orada heç bir yarıq olmadığını görmürlərmi?! Eləcə də yeri necə döşədiyimizi (hamarlayıb düzəltdiyimizi), orada möhkəm duran dağlar yaratdığımızı, hər cür gözəl növdən (meyvə) yetişdirdiyimizi görmürlərmi?! (Bütün bunlar Rəbbinə tərəf) dönüb qayıdan hər bir bəndə üçün ibrət dərsi və öyüd-nəsihət olsun deyə etdik. Qaf, 6-8",
            "(Ya Peyğəmbər!) Məgər Allahın göydən yağış yağdırdığını, onu yer üzündəki bulaqlara axıtdığını, sonra onunla növbənöv əkin yetişdirdiyini görmürsənmi?! Sonra o (əkin) quruyar, sən onu saralmış görərsən. Sonra da (Allah) onu çör-çöpə döndərər. Həqiqətən, bunda ağıl sahibləri üçün ibrətlər vardır! (Zümər-21)",
            "Yeddi göyü (bir-birinin üstündə) qat-qat yaradan da Odur. (Ey insan!) Sən Rəhmanın yaratdığında heç bir uyğunsuzluq görməzsən. Bir gözünü qaldırıb (səmaya) bax, heç orada bir yarıq (çatdaq, nöqsan) görə bilərsənmi?! Sonra gözünü qaldırıb iki dəfə bax. Göz orada (axtardığını tapmayıb) zəif, yorğun düşərək yenə də sənə tərəf qayıdacaqdır! And olsun ki, Biz dünya səmasını (yerə ən yaxın olan göyü) qəndillərlə (ulduzlarla) bəzədik. Mülk 3-5",
            "Həqiqətən, göylərin və yerin yaradılmasında, gecə ilə gündüzün bir-birini əvəz etməsində, içərisində insanlar üçün mənfəətli şeylər olan gəmilərin dənizlərdə üzməsində, quruyan yer üzünü Allahın göydən yağmur yağdıraraq yenidən diriltməsində, cins-cins heyvanları onun hər tərəfə yaymasında, göylə yer arasında ram edilmiş küləyin və buludların bir səmtdən başqa səmtə döndərilməsində, (Allahın hikmət və qüdrətinə dəlalət edən) əlamətlər vardır. Bəqərə-164",
            "(Ey İnsanlar!) Məgər Allahın göylərdə və yerdə olanları (günəşi, ayı, ulduzları və buludları; meyvələri, bitkiləri, dənizləri, çayları və gölləri) sizə ram etdiyini (sizin istifadənizə verdiyini), aşkar (görmə, eşitmə, sağlamlıq) və gizli (əql, şüur, fəhm, elm və i. a.) nemətləri sizə bolluca ehsan etdiyini görmürsünüzmü? İnsanlar içərisində eləsi də vardır ki, nə bir elmi, nə bir doğru yol göstərən rəhbəri, nə də bir nurani (ilahi) kitabı olmadan Allah barəsində mübahisə edər. Loğman-20",
            "O Allah ki, sizin üçün yer üzünü döşədi, göyü isə tavan yaratdı, göydən yağmur endirdi və onun vasitəsilə sizin üçün müxtəlif meyvələrdən ruzilər yetişdirdi. İndi siz də Allaha (Onun heç bir oxşarı və bənzəri olmadığını) bilə-bilə şəriklər qoşmayın! Bəqərə-22",
            "Yeri (Yer kürəsini) sizə ram edən Odur. Onun qoynunda gəzin, (Allahın) ruzisindən yeyin. Axır dönüş də Onadır! Mülk-15",
            "Məgər Biz yeri həm dirilərə, həm də ölülərə məskən etmədikmi?(Yerin altında ölülər yatar, üstündə dirilər gəzib-dolanar) Mürsəlat 25-26",
            "(Yer üzündə zəiflikləri ucbatından) ruzisini daşıya (əldə edə) bilməyən neçə-neçə canlılar vardır. Onların da, sizin də ruzinizi Allah verir. O, (hər şeyi) eşidəndir, biləndir. (Sizə dininizə görə bir məşəqqət üz verdiyi zaman məişət çətinliklərindən qorxub başqa ölkələrə hicrət etməkdən çəkinməyin. Allah orada da ruzinizi verəcəkdir. O sizi heç vaxt darda qoymaz!) Ənkəbut-60",
            "Məgər dəvəyə baxmırlar ki, necə yaradılmışdır? Göyə (baxmırlar ki) necə ucaldılmışdır? Dağlara (baxmırlar ki) necə dikəldilmişdir? Və yerə (baxmırlar ki) necə döşədilmişdir? (Ya Peyğəmbər! Mənim bəndələrimə) öyüd-nəsihət ver. Sən ancaq öyüd-nəsihət verənsən! Ğaşiyə 17-21",
            "Şübhəsiz ki, davarda (sağmal heyvanlarda) da sizin üçün bir ibrət vardır. Biz onların qarınlarındakı qanla ifrazat arasında olan təmiz südü sizə içirdirik. O, içənlərin boğazından rahat keçər. (Qanın və ifrazatın dadı, qoxusu və rəngi əsla südə qarışmaz. Əksinə, südə elə bir tam verərik ki, o, içənlərə xoş gələr). Nəhl-66",
            "Rəbbin bal arısına belə vəhy (təlqin) etdi: “Dağlarda, ağaclarda və (insanların) qurduqları çardaqlarda (evlərin damında, üzümlüklərdə) özünə evlər tik (pətəklər sal); Sonra bütün meyvələrdən ye və Rəbbinin sənə göstərdiyi yolla rahat (asanlıqla) get! (Və ya: “Rəbbinin yollarını itaətlə tut!”) (O arıların) qarınlarından insanlar üçün şəfa olan müxtəlif rəngli (ağ, sarı, qırmızı) bal çıxar. Şübhəsiz ki, bunda düşünüb dərk edənlər üçün bir ibrət vardır! Nəhl-68-69",
            "Allah gördüyünüz göyləri dirəksiz yaratmış (yaxud O, göyləri görə bildiyiniz bir dirək olmadan xəlq etmiş), sizi yırğalamasın (atıb-tutmasın) deyə, yerdə möhkəm durmuş dağlar bərqərar etmiş və ora (yer üzünə) cürbəcür heyvanlar səpələmişdir. Biz göydən yağış yağdırdıq və (onunla) yerdə növbənöv gözəl (bitkilər, meyvələr) yetişdirdik. Loğman-10",
            "Biz göyləri, yeri və onların arasında olanları oyun-oyuncaq (əyləncə) yaratmadıq! Biz onları yalnız haqq olaraq yaratdıq, lakin onların (Məkkə müşriklərinin) əksəriyyəti (bunu) bilməz! Duxan 38-39",
            "Ey insan! Səni kərim olan Rəbbinə qarşı aldadan (və ya: məğrur edən) nədir? O Rəbbin ki, səni (yoxdan) yaratdı, düzəldib qaydaya (insan şəklinə) saldı. Sənə Özü istədiyi surətdə biçim verdi. İnfitar-6-8",
            "Biz, həqiqətən, insanı tərtəmiz (süzülmüş) palçıqdan yaratdıq. (Biz Adəmi torpaqdan, Adəm övladını isə süzülmüş xalis palçıqdan – nütfədən xəlq etdik). Sonra onu (Adəm övladını) nütfə halında möhkəm bir yerdə (ana bətnində) yerləşdirdik. Sonra nütfəni laxtalanmış qana çevirdik, sonra laxtalanmış qanı bir parça ət etdik, sonra o bir parça əti sümüklərə döndərdik, sonra sümükləri ətlə örtdük və daha sonra onu bambaşqa (yeni) bir məxluqat olaraq yaratdıq. Yaradanların ən gözəli olan Allah nə qədər (uca, nə qədər) uludur! (Belə bir yaradılışdan) sonra siz mütləq öləcəksiniz! Sonra siz qiyamət günü yenidən dirildiləcəksiniz! Muminin 12-16",
            "Məgər insan elə güman edir ki, (qiyamət günü) onun sümüklərini bir yerə yığa bilməyəcəyik?! Bəli, Biz onun barmaqlarını da (barmaq sümüklərini də, barmaqlarının uclarını da) düzəltməyə qadirik! Qiyamə 3-4",
            "Ölüm (ölüm bihuşluğu), həqiqətən, gələcəkdir. (Ey insan!) Bu sənin qorxub qaçdığın (cürbəcür vasitələrlə canını qurtarmaq istədiyin) şeydir! (Öləndən sonra yenidən dirilmək üçün) sur çalınacaqdır. Bu vəd olunmuş gündür (əzab günüdür)! Qaf 19-20",
            "Həqiqətən, Biz yağışı bol yağdırdıq. Sonra yeri gözəl yaratdıq (yaxşı yardıq), Belə ki, orada dən (dənli bitkilər) göyərtdik; Üzüm və yonca; Zeytun və xurma (bağları); (Ağacları bir-birinə) sarmaşan bağçalar; (Növbənöv) meyvələr və ot (ələf) yetişdirdik. (Bütün bunlar) sizin və heyvanlarınızın istifadəsi üçündür! Əbəsə 25-32",
            "Biz sizi (yoxdan) yaratdıq. Məgər (qiyamət günü yenidən dirildiləcəyinizi) təsdiq etməzmisiniz? Bəs (bətnlərə) axıtdığınız nütfəyə nə deyirsiniz? Ondan (insan) yaradan sizsiniz, yoxsa Biz?! Vaqia-57-59",
            "Bəs əkdiyiniz (toxuma) nə deyirsiniz? Onu bitirən sizsiniz, yoxsa Biz?! Əgər Biz istəsəydik, onu bir saman çöpünə döndərər, siz də mat-məəttəl qalıb: “Biz ziyana uğramış, Bəlkə, (hələ ruzidən də) məhrum olmuş kimsələrik!” (deyərdiniz). Vaqia, 63-67",
            "Bəs içdiyiniz suya nə deyirsiniz? Onu buluddan endirən sizsiniz, yoxsa Biz?! Əgər istəsəydik, onu acı (bir su) edərdik. Elə isə niyə (Allahın nemətlərinə) şükür etmirsiniz? Vaqia, 68-70 ",
            "Bəs (yaş ağacdan) yandırdığınız oda nə deyirsiniz? Onun ağacını yaradan sizsiniz, yoxsa Biz? Biz onu (sizi cəhənnəm odu ilə qorxutmaqdan ötrü) ibrət dərsi və səhrada olan müsafirlərin faydalanması üçün yaratdıq. Vaqia, 71-73",
            "Məgər onlar yer üzünü gəzib özlərindən əvvəlkilərin aqibətinin necə olduğunu görmürlərmi? Onlar (Ad, Səmud tayfaları) bunlardan daha qüvvətli idilər. Onlar (əkinçilik məqsədilə) torpağı qazıb altını üstünə çevirmiş və yer üzünü bunlardan daha çox abad etmişdilər. Peyğəmbərləri onlara açıq-aşkar möcüzələr gətirmişdilər. Allah onlara zülm etmirdi, onlar özləri özlərinə zülm edirdilər. Rum-9", 
            "Sizin üçün onlarla ünsiyyət edəsiniz deyə, öz cinsinizdən zövcələr xəlq etməsi, aranızda (dostluq) sevgi və mərhəmət yaratması da Onun qüdrət əlamətlərindəndir. Həqiqətən, bunda (bu yaradılışda) düşünən bir qövm üçün ibrətlər vardır! Rum-21"
        ];
        
        var randomNumber = Math.floor(Math.random() * (gununduasi.length+1)) + 1;
        
        document.querySelectorAll(".dua")[0].innerHTML = gununduasi[randomNumber];
        
    },
    // Used in Hijri calendar
    gmod:function(n,m){
        return ((n%m)+m)%m;
    },
    // Hijri calendar calculations
    kuwaiticalendar:function(adjust){
        var today = new Date();
        if(adjust) {
            adjustmili = 1000*60*60*24*adjust; 
            todaymili = today.getTime()+adjustmili;
            today = new Date(todaymili);
        }
        day = today.getDate();
        month = today.getMonth();
        year = today.getFullYear();
        m = month+1;
        y = year;
        if(m<3) {
            y -= 1;
            m += 12;
        }

        a = Math.floor(y/100.);
        b = 2-a+Math.floor(a/4.);
        if(y<1583) b = 0;
        if(y==1582) {
            if(m>10)  b = -10;
            if(m==10) {
                b = 0;
                if(day>4) b = -10;
            }
        }

        jd = Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+day+b-1524;

        b = 0;
        if(jd>2299160){
            a = Math.floor((jd-1867216.25)/36524.25);
            b = 1+a-Math.floor(a/4.);
        }
        bb = jd+b+1524;
        cc = Math.floor((bb-122.1)/365.25);
        dd = Math.floor(365.25*cc);
        ee = Math.floor((bb-dd)/30.6001);
        day =(bb-dd)-Math.floor(30.6001*ee);
        month = ee-1;
        if(ee>13) {
            cc += 1;
            month = ee-13;
        }
        year = cc-4716;

        if(adjust) {
            wd = app.gmod(jd+1-adjust,7)+1;
        } else {
            wd = app.gmod(jd+1,7)+1;
        }

        iyear = 10631./30.;
        epochastro = 1948084;
        epochcivil = 1948085;

        shift1 = 8.01/60.;

        z = jd-epochastro;
        cyc = Math.floor(z/10631.);
        z = z-10631*cyc;
        j = Math.floor((z-shift1)/iyear);
        iy = 30*cyc+j;
        z = z-Math.floor(j*iyear+shift1);
        im = Math.floor((z+28.5001)/29.5);
        if(im==13) im = 12;
        id = z-Math.floor(29.5001*im-29);

        var myRes = new Array(8);

        myRes[0] = day; //calculated day (CE)
        myRes[1] = month-1; //calculated month (CE)
        myRes[2] = year; //calculated year (CE)
        myRes[3] = jd-1; //julian day number
        myRes[4] = wd-1; //weekday number
        myRes[5] = id; //islamic date
        myRes[6] = im-1; //islamic month
        myRes[7] = iy; //islamic year

        return myRes;
    },
    // used for writing Islamic dare
    writeIslamicDate:function(adjustment) {
        var wdNames = new Array("Əhəd","İsnəyn","Sulasə","Ərbəə","Həmis","Cumuə","Səbt");
        var iMonthNames = new Array("Məhərrəm","Səfər","Rəbiüləvvəl","Rəbiülaxır","Cəmadiyələvvəl","Cəmadiyəlaxır","Rəcəb","Şaban","Ramazan","Şəvval","Zilqədə","Zilhiccə");
        var iDate = app.kuwaiticalendar(adjustment);
        var outputIslamicDate = iDate[5] + " " + iMonthNames[iDate[6]] + " " + iDate[7];
        document.getElementById('hijri').innerHTML = outputIslamicDate;
    },
    // used for writing current date
    writeDate:function(){
        var days = new Array("B.","B.e.","Ç.a.","Ç.","C.a.","C.","Ş.");
        var months = new Array("Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr");
        var today = new Date();
        weekday = today.getDay();
        day = today.getDate();
        month = today.getMonth();
        year = today.getFullYear();
        var outputDate = days[weekday] + ", " +day + " " + months[month] + " " + year;
        document.getElementById('gregorian').innerHTML = outputDate;
    },
    // used for writing salah names
    showNextSalahTime:function(city){
        // attach praytimes
        app.praytimes = new PrayTimes('MWL');
        var datetime = new Date();
        var times = app.praytimes.getTimes(datetime, [window.localStorage.getItem('latitude'), window.localStorage.getItem('longitude')], +4);
        // salah names
        var salahnames = [];
        salahnames['fajr']= 'Fəcr',
        salahnames['dhuhr']='Zöhr',
        salahnames['asr']='Əsr',
        salahnames['maghrib']='Məğrib',
        salahnames['isha']='İşa';
        var salahnamesarray = ['fajr','dhuhr','asr','maghrib','isha'],
            salaharray = [],
            salahitr = 0,
            nextSalah = false,
            currentSalah = false,
            novbetiNamaz = '',
            novbetiNamazaQalir = '',
            novbetiNamazVaxti = '';
        var slide = document.querySelectorAll(".times")[0].innerHTML;
        for(var x in times) {
            console.log(times[x]);
            if(salahnamesarray.indexOf(x)!= -1)
            {
                // split times hours
                var splittedtime = times[x].split(':');
                // get time difference to next prayer
                var salahDateTime = new Date(datetime.getFullYear()+'-'+(datetime.getMonth()+1)+'-'+datetime.getDate()+' '+splittedtime[0]+':'+splittedtime[1]+':00');
                var difference1 = salahDateTime.getTime()-datetime.getTime();
                var hh = Math.floor(difference1 / 1000 / 60 / 60);
                difference1 -= hh * 1000 * 60 * 60;
                var mm = Math.floor(difference1 / 1000 / 60)+1;
                difference1 -= mm * 1000 * 60;
                
                console.log('datetime.getHours() '+datetime.getHours()+': parseInt(splittedtime[0]) '+parseInt(splittedtime[0])+': datetime.getMinutes() '+datetime.getMinutes()+': parseInt(splittedtime[1])'+parseInt(splittedtime[1])+'nextSalah: '+nextSalah);

                // if hours are equal
                if(datetime.getHours() == parseInt(splittedtime[0]))
                {
                    // minute should be smaller than next prayer minute
                    if(datetime.getMinutes() < parseInt(splittedtime[1]))
                    {
                        slide += '<li class="collection-item active light-green darken-2"><span>' + salahnames[x] + '</span><span class="right">' + splittedtime[0] + ':' + splittedtime[1] + '</span></li>';    
                        currentSalah = true;
                    }
                    // minute is greater than next prayer minute. show normal way
                    else
                    {
                        slide += '<li class="collection-item"><span>' + salahnames[x] + '</span><span class="right">' + splittedtime[0] + ':' + splittedtime[1] + '</span></li>';
                    }
                }
                else
                // get the next prayer time and add class
                // hour should be either equal or smaller than next prayer hour.
                // if hours are equal, minute should be smaller than next prayer minute
                // if current hour is smaller than next prayer time, it's the next prayer
                if(
//                    (
//                        (datetime.getHours() == parseInt(splittedtime[0]) && datetime.getMinutes() < parseInt(splittedtime[1]))
//                  || 
//                     (
                         datetime.getHours() < parseInt(splittedtime[0])
//                     )
//                    )
                   && !nextSalah && !currentSalah){
                    console.log('novbeti');
                    nextSalah = true;
                    slide += '<li class="collection-item active light-green darken-2"><span>' + salahnames[x] + '</span><span class="right">' + splittedtime[0] + ':' + splittedtime[1] + '</span></li>';

                    // set next prayer time and time left
                    novbetiNamaz = salahnames[x];
                    novbetiNamazVaxti = splittedtime[0] + ':' + splittedtime[1];
                    novbetiNamazaQalir = '-' + hh + ':' + mm;

                }
                else{
                    console.log('namaz vaxti');
                    slide += '<li class="collection-item"><span>' + salahnames[x] + '</span><span class="right">' + splittedtime[0] + ':' + splittedtime[1] + '</span></li>';
                }
            }
        }

        // apppend the slider pages to the div
        var slideGroup = document.querySelectorAll(".times")[0];
        slideGroup.innerHTML = slide;
        
        console.log('novbeti '+novbetiNamaz+': qalir '+novbetiNamazaQalir+': vaxti '+novbetiNamazVaxti);

        document.querySelectorAll(".novbetiNamaz")[0].innerHTML = novbetiNamaz;
        document.querySelectorAll(".novbetiNamazaQalir")[0].innerHTML = novbetiNamazaQalir;
        document.querySelectorAll(".novbetiNamazVaxti")[0].innerHTML = novbetiNamazVaxti;
    },
};  