var size = 0;
var ranges_areas_geoestadisticas_estatales0 = [[2024.000000, 5271.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(232,255,255,1.0)'})
    })]],
[5271.000000, 10338.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(117,202,204,1.0)'})
    })]],
[10338.000000, 16017.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(12,157,160,1.0)'})
    })]],
[16017.000000, 36053.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(27,196,208,1.0)'})
    })]],
[36053.000000, 58514.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,244,248,1.0)'})
    })]]];
var styleCache_areas_geoestadisticas_estatales0={}
var style_areas_geoestadisticas_estatales0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("afiliados_Nueva_Alianza");
    var labelText = "";
    var key = "";
    size = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    if ("" !== null) {
        labelText = String("");
    } else {
        labelText = ""
    }
    var style = ranges_areas_geoestadisticas_estatales0[0][2];
    for (i = 0; i < ranges_areas_geoestadisticas_estatales0.length; i++){
        var range = ranges_areas_geoestadisticas_estatales0[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    key = value + "_" + labelText
    if (!styleCache_areas_geoestadisticas_estatales0[key]){
        var text = new ol.style.Text({
                font: '16.9px \'.SF NS Text\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_areas_geoestadisticas_estatales0[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_areas_geoestadisticas_estatales0[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};