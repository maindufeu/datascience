var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_areas_geoestadisticas_estatales0 = new ol.format.GeoJSON();
var features_areas_geoestadisticas_estatales0 = format_areas_geoestadisticas_estatales0.readFeatures(json_areas_geoestadisticas_estatales0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areas_geoestadisticas_estatales0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_areas_geoestadisticas_estatales0.addFeatures(features_areas_geoestadisticas_estatales0);var lyr_areas_geoestadisticas_estatales0 = new ol.layer.Vector({
                source:jsonSource_areas_geoestadisticas_estatales0, 
                style: style_areas_geoestadisticas_estatales0,
                title: 'areas_geoestadisticas_estatales<br />\
        <img src="styles/legend/areas_geoestadisticas_estatales0_0.png" />  9573 - 66165 <br />\
        <img src="styles/legend/areas_geoestadisticas_estatales0_1.png" />  66165 - 165931 <br />\
        <img src="styles/legend/areas_geoestadisticas_estatales0_2.png" />  165931 - 324889 <br />\
        <img src="styles/legend/areas_geoestadisticas_estatales0_3.png" />  324889 - 561008 <br />\
        <img src="styles/legend/areas_geoestadisticas_estatales0_4.png" />  561008 - 726586 <br />'
            });

lyr_areas_geoestadisticas_estatales0.setVisible(true);
var layersList = [baseLayer,lyr_areas_geoestadisticas_estatales0];
lyr_areas_geoestadisticas_estatales0.set('fieldAliases', {'CVE_ENT': 'CVE_ENT', 'NOM_ENT': 'NOM_ENT', 'afiliados_PAN': 'afiliados_PAN', 'afiliados_Nueva_Alianza': 'afiliados_Nueva_Alianza', 'afiliados_PT': 'afiliados_PT', 'afiliados_Movimiento_Ciudadano': 'afiliados_Movimiento_Ciudadano', 'afiliados_Morena': 'afiliados_Morena', 'afiliados_PVEM': 'afiliados_PVEM', 'afiliados_PRD': 'afiliados_PRD', 'afiliados_PRI': 'afiliados_PRI', });
lyr_areas_geoestadisticas_estatales0.set('fieldImages', {'CVE_ENT': 'TextEdit', 'NOM_ENT': 'TextEdit', 'afiliados_PAN': 'TextEdit', 'afiliados_Nueva_Alianza': 'TextEdit', 'afiliados_PT': 'TextEdit', 'afiliados_Movimiento_Ciudadano': 'TextEdit', 'afiliados_Morena': 'TextEdit', 'afiliados_PVEM': 'TextEdit', 'afiliados_PRD': 'TextEdit', 'afiliados_PRI': 'TextEdit', });
lyr_areas_geoestadisticas_estatales0.set('fieldLabels', {'CVE_ENT': 'no label', 'NOM_ENT': 'inline label', 'afiliados_PAN': 'inline label', 'afiliados_Nueva_Alianza': 'inline label', 'afiliados_PT': 'inline label', 'afiliados_Movimiento_Ciudadano': 'inline label', 'afiliados_Morena': 'inline label', 'afiliados_PVEM': 'inline label', 'afiliados_PRD': 'inline label', 'afiliados_PRI': 'inline label', });
lyr_areas_geoestadisticas_estatales0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});