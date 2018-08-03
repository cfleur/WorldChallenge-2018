var wwd = new WorldWind.WorldWindow("globe-canvas");
wwd.addLayer(new WorldWind.BMNGLandsatLayer());
wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
wwd.addLayer(new WorldWind.AtmosphereLayer());
wwd.addLayer(new WorldWind.StarFieldLayer());

// var geoTiffAddress = "./assets/geotiff/125subset_0_of_S3A_OL_1_EFR____20180719T092929_20180719T093229_20180720T132647_0180_033_307_1800_LN1_O_NT_002.SEN3_C2RCC.tif";
var geoTiffAddress = "./assets/geotiff/Very_small_Tiff_subset_2_of_S3A_OL_1_EFR_20180727T092500_20180727T092800_20180727T113156_0179_034_036_1980_SVL_O_NR_002.SEN3_C2RCC.tif";
// var geoTiffAddress = "./assets/geotiff/15subset_0_of_S3A_OL_1_EFR____20180727T092500_20180727T092800_20180727T113156_0179_034_036_1980_SVL_O_NR_002.SEN3_C2RCC.tif";
// var geoTiffAddress = "./assets/geotiff/subset_0_of_S3A_OL_1_EFR____20180727T092500_20180727T092800_20180727T113156_0179_034_036_1980_SVL_O_NR_002.SEN3_C2RCC.tif";
// var geoTiffAddress = "./assets/geotiff/geotiff-demo.tif";
// var geoTiffAddress = "./assets/geotiff/color_conc_chll.tif";

var geoTiffReader = new WorldWind.GeoTiffReader(geoTiffAddress);
//
// var onImageRead = function (canvas) {
//   document.getElementsByTagName("body")[0].appendChild(canvas);
// };
//
// geoTiffReader.readAsImage(onImageRead);

var onImageRead = function (canvas) {

  var surfaceGeoTiff = new WorldWind.SurfaceImage(
    geoTiffReader.metadata.bbox,
    new WorldWind.ImageSource(canvas)
  );

  var geoTiffLayer = new WorldWind.RenderableLayer("GeoTiff Image");
  wwd.addLayer(geoTiffLayer);
  geoTiffLayer.addRenderable(surfaceGeoTiff);
  wwd.redraw();

  wwd.goTo(new WorldWind.Position(63.69, 23.54, 5400000));
};

geoTiffReader.readAsImage(onImageRead);
