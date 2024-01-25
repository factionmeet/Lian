var map = new AMap.Map('map', {
  zoom: 5.29,
  viewMode: '3D',
  pitch: 48,
  center: [104.780269, 34.955403],
  view:'3D',
  mapStyle:'amap://styles/midnight',
});
var styleJson = [
  {
    "featureType": "land",
    "elementType": "geometry",
    "stylers": {
      "color": "#3b6db4" //将地图的背景色调整为蓝色，可以替换为其他的颜色值
    }
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": {
      "color": "#2a91eb" //将水域的填充颜色调整为蓝色，可以替换为其他的颜色值
    }
  },
  {
    "featureType": "green",
    "elementType": "geometry",
    "stylers": {
      "color": "#1d8ad2" //将绿地的颜色调整为蓝色，可以替换为其他的颜色值
    }
  },
  {
    "featureType": "highway",
    "elementType": "geometry.stroke",
    "stylers": {
      "color": "#3689fb" //将高速公路的描边颜色调整为蓝色，可以替换为其他的颜色值
    }
  },
  {
    "featureType": "arterial",
    "elementType": "geometry.stroke",
    "stylers": {
      "color": "#2590e6" //将城市主要道路的描边颜色调整为蓝色，可以替换为其他的颜色值
    }
  },
  {
    "featureType": "subway",
    "elementType": "geometry.stroke",
    "stylers": {
      "color": "#1993fc" //将地铁的描边颜色调整为蓝色，可以替换为其他的颜色值
    }
  },
  {
    "featureType": "poi",
    "elementType": "all",
    "stylers": {
      "visibility": "off" //将兴趣点隐藏
    }
  }
];
map.setMapStyle({styleJson: styleJson});
var loca = new Loca.Container({
  map,
});

// 呼吸点
var scatter = new Loca.ScatterLayer({
  loca,
  zIndex: 10,
  opacity: 0.6,
  visible: true,
  zooms: [2, 22],
});

var pointGeo = new Loca.GeoJSONSource({
  url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/pulselink-china-city-point.json',
});
scatter.setSource(pointGeo);
scatter.setStyle({
  unit: 'midnight',
  size: [100000, 100000],
  borderWidth: 0,
  texture: 'https://a.amap.com/Loca/static/loca-v2/demos/images/breath_red.png',
  duration: 2000,
  animate: true,
});
loca.add(scatter);

// 弧线
var pulseLink = new Loca.PulseLinkLayer({
  // loca,
  zIndex: 10,
  opacity: 1,
  visible: true,
  zooms: [2, 22],
  depth: true,
});

var geo = new Loca.GeoJSONSource({
  url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/data-line-out.json',
});

pulseLink.setSource(geo);
pulseLink.setStyle({
  unit: 'midnight',
  dash: [40000, 0, 40000, 0],
  lineWidth: function () {
    return [20000, 1000];
  },
  height: function (index, feat) {
    return feat.distance / 3 + 10;
  },
  // altitude: 1000,
  smoothSteps: 30,
  speed: function (index, prop) {
    return 1000 + Math.random() * 200000;
  },
  flowLength: 100000,
  lineColors: function (index, feat) {
    return ['rgb(255,228,105)', 'rgb(255,164,105)', 'rgba(1, 34, 249,1)'];
  },
  maxHeightScale: 0.3, // 弧顶位置比例
  headColor: 'rgba(255, 255, 0, 1)',
  trailColor: 'rgba(255, 255,0,0)',
});
loca.add(pulseLink);
loca.animate.start();


// 点击事件处理
var clickInfo = new AMap.Marker({
  anchor: 'bottom-center',
  position: [116.396923, 39.918203, 0],
});
clickInfo.setMap(map);
clickInfo.hide();
map.on("click", function (e) {
  var feat = pulseLink.queryFeature(e.pixel.toArray());

  if (feat) {
    clickInfo.show();
    var props = feat.properties;
    clickInfo.setPosition(feat.coordinates[1]);
    clickInfo.setContent(
      '<div style="text-align: center; height: 20px; width: 150px; color:#fff; font-size: 14px;">' +
      '速率: ' + feat.properties['ratio'] +
      '</div>'
    );
  } else {
    clickInfo.hide();
  }
});

/*var dat = new Loca.Dat();
dat.addLayer(pulseLink);*/
