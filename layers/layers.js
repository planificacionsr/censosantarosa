var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Hogaresdepersonassolas_1 = new ol.format.GeoJSON();
var features_Hogaresdepersonassolas_1 = format_Hogaresdepersonassolas_1.readFeatures(json_Hogaresdepersonassolas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hogaresdepersonassolas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hogaresdepersonassolas_1.addFeatures(features_Hogaresdepersonassolas_1);
var lyr_Hogaresdepersonassolas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hogaresdepersonassolas_1, 
                style: style_Hogaresdepersonassolas_1,
                popuplayertitle: 'Hogares de personas solas (%)',
                interactive: true,
    title: 'Hogares de personas solas (%)<br />\
    <img src="styles/legend/Hogaresdepersonassolas_1_0.png" /> 10,4 - 15,9<br />\
    <img src="styles/legend/Hogaresdepersonassolas_1_1.png" /> 15,9 - 17,2<br />\
    <img src="styles/legend/Hogaresdepersonassolas_1_2.png" /> 17,2 - 18,8<br />\
    <img src="styles/legend/Hogaresdepersonassolas_1_3.png" /> 18,8 - 21<br />\
    <img src="styles/legend/Hogaresdepersonassolas_1_4.png" /> 21 - 24,7<br />' });
var format_Hogaresconhijosmonoparentales_2 = new ol.format.GeoJSON();
var features_Hogaresconhijosmonoparentales_2 = format_Hogaresconhijosmonoparentales_2.readFeatures(json_Hogaresconhijosmonoparentales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hogaresconhijosmonoparentales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hogaresconhijosmonoparentales_2.addFeatures(features_Hogaresconhijosmonoparentales_2);
var lyr_Hogaresconhijosmonoparentales_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hogaresconhijosmonoparentales_2, 
                style: style_Hogaresconhijosmonoparentales_2,
                popuplayertitle: 'Hogares con hijos monoparentales (%)',
                interactive: true,
    title: 'Hogares con hijos monoparentales (%)<br />\
    <img src="styles/legend/Hogaresconhijosmonoparentales_2_0.png" /> 11,5 - 18<br />\
    <img src="styles/legend/Hogaresconhijosmonoparentales_2_1.png" /> 18 - 19,5<br />\
    <img src="styles/legend/Hogaresconhijosmonoparentales_2_2.png" /> 19,5 - 21,2<br />\
    <img src="styles/legend/Hogaresconhijosmonoparentales_2_3.png" /> 21,2 - 24,1<br />\
    <img src="styles/legend/Hogaresconhijosmonoparentales_2_4.png" /> 24,1 - 29<br />' });
var format_Hogaresdeparejasconhijos_3 = new ol.format.GeoJSON();
var features_Hogaresdeparejasconhijos_3 = format_Hogaresdeparejasconhijos_3.readFeatures(json_Hogaresdeparejasconhijos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hogaresdeparejasconhijos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hogaresdeparejasconhijos_3.addFeatures(features_Hogaresdeparejasconhijos_3);
var lyr_Hogaresdeparejasconhijos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hogaresdeparejasconhijos_3, 
                style: style_Hogaresdeparejasconhijos_3,
                popuplayertitle: 'Hogares de parejas con hijos (%)',
                interactive: true,
    title: 'Hogares de parejas con hijos (%)<br />\
    <img src="styles/legend/Hogaresdeparejasconhijos_3_0.png" /> 38,2 - 40<br />\
    <img src="styles/legend/Hogaresdeparejasconhijos_3_1.png" /> 40 - 44,2<br />\
    <img src="styles/legend/Hogaresdeparejasconhijos_3_2.png" /> 44,2 - 47,2<br />\
    <img src="styles/legend/Hogaresdeparejasconhijos_3_3.png" /> 47,2 - 50,8<br />\
    <img src="styles/legend/Hogaresdeparejasconhijos_3_4.png" /> 50,8 - 55,7<br />' });
var format_Hogaresnipropietariosniinquilinos_4 = new ol.format.GeoJSON();
var features_Hogaresnipropietariosniinquilinos_4 = format_Hogaresnipropietariosniinquilinos_4.readFeatures(json_Hogaresnipropietariosniinquilinos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hogaresnipropietariosniinquilinos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hogaresnipropietariosniinquilinos_4.addFeatures(features_Hogaresnipropietariosniinquilinos_4);
var lyr_Hogaresnipropietariosniinquilinos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hogaresnipropietariosniinquilinos_4, 
                style: style_Hogaresnipropietariosniinquilinos_4,
                popuplayertitle: 'Hogares ni propietarios ni inquilinos (%)',
                interactive: true,
    title: 'Hogares ni propietarios ni inquilinos (%)<br />\
    <img src="styles/legend/Hogaresnipropietariosniinquilinos_4_0.png" /> 10,8 - 17,4<br />\
    <img src="styles/legend/Hogaresnipropietariosniinquilinos_4_1.png" /> 17,4 - 21<br />\
    <img src="styles/legend/Hogaresnipropietariosniinquilinos_4_2.png" /> 21 - 28,7<br />\
    <img src="styles/legend/Hogaresnipropietariosniinquilinos_4_3.png" /> 28,7 - 44,9<br />\
    <img src="styles/legend/Hogaresnipropietariosniinquilinos_4_4.png" /> 44,9 - 70,5<br />' });
var format_Hogaresinquilinosdelavivienda_5 = new ol.format.GeoJSON();
var features_Hogaresinquilinosdelavivienda_5 = format_Hogaresinquilinosdelavivienda_5.readFeatures(json_Hogaresinquilinosdelavivienda_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hogaresinquilinosdelavivienda_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hogaresinquilinosdelavivienda_5.addFeatures(features_Hogaresinquilinosdelavivienda_5);
var lyr_Hogaresinquilinosdelavivienda_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hogaresinquilinosdelavivienda_5, 
                style: style_Hogaresinquilinosdelavivienda_5,
                popuplayertitle: 'Hogares inquilinos de la vivienda (%)',
                interactive: true,
    title: 'Hogares inquilinos de la vivienda (%)<br />\
    <img src="styles/legend/Hogaresinquilinosdelavivienda_5_0.png" /> 0 - 4,2<br />\
    <img src="styles/legend/Hogaresinquilinosdelavivienda_5_1.png" /> 4,2 - 6,9<br />\
    <img src="styles/legend/Hogaresinquilinosdelavivienda_5_2.png" /> 6,9 - 10,2<br />\
    <img src="styles/legend/Hogaresinquilinosdelavivienda_5_3.png" /> 10,2 - 14,5<br />\
    <img src="styles/legend/Hogaresinquilinosdelavivienda_5_4.png" /> 14,5 - 26,6<br />' });
var format_Hogarespropietariosdelavivienda_6 = new ol.format.GeoJSON();
var features_Hogarespropietariosdelavivienda_6 = format_Hogarespropietariosdelavivienda_6.readFeatures(json_Hogarespropietariosdelavivienda_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hogarespropietariosdelavivienda_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hogarespropietariosdelavivienda_6.addFeatures(features_Hogarespropietariosdelavivienda_6);
var lyr_Hogarespropietariosdelavivienda_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hogarespropietariosdelavivienda_6, 
                style: style_Hogarespropietariosdelavivienda_6,
                popuplayertitle: 'Hogares propietarios de la vivienda (%)',
                interactive: true,
    title: 'Hogares propietarios de la vivienda (%)<br />\
    <img src="styles/legend/Hogarespropietariosdelavivienda_6_0.png" /> 29,5 - 53,3<br />\
    <img src="styles/legend/Hogarespropietariosdelavivienda_6_1.png" /> 53,3 - 58,2<br />\
    <img src="styles/legend/Hogarespropietariosdelavivienda_6_2.png" /> 58,2 - 66,2<br />\
    <img src="styles/legend/Hogarespropietariosdelavivienda_6_3.png" /> 66,2 - 69,9<br />\
    <img src="styles/legend/Hogarespropietariosdelavivienda_6_4.png" /> 69,9 - 79,6<br />' });
var format_Hogarescongarrafaoleacomocombustibleusadoprincipalmenteparacocina_7 = new ol.format.GeoJSON();
var features_Hogarescongarrafaoleacomocombustibleusadoprincipalmenteparacocina_7 = format_Hogarescongarrafaoleacomocombustibleusadoprincipalmenteparacocina_7.readFeatures(json_Hogarescongarrafaoleacomocombustibleusadoprincipalmenteparacocina_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hogarescongarrafaoleacomocombustibleusadoprincipalmenteparacocina_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hogarescongarrafaoleacomocombustibleusadoprincipalmenteparacocina_7.addFeatures(features_Hogarescongarrafaoleacomocombustibleusadoprincipalmenteparacocina_7);
var lyr_Hogarescongarrafaoleacomocombustibleusadoprincipalmenteparacocina_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hogarescongarrafaoleacomocombustibleusadoprincipalmenteparacocina_7, 
                style: style_Hogarescongarrafaoleacomocombustibleusadoprincipalmenteparacocina_7,
                popuplayertitle: 'Hogares con garrafa o leña como combustible usado principalmente para cocina (%)',
                interactive: true,
    title: 'Hogares con garrafa o leña como combustible usado principalmente para cocina (%)<br />\
    <img src="styles/legend/Hogarescongarrafaoleacomocombustibleusadoprincipalmenteparacocina_7_0.png" /> 26,9 - 34,8<br />\
    <img src="styles/legend/Hogarescongarrafaoleacomocombustibleusadoprincipalmenteparacocina_7_1.png" /> 34,8 - 56,2<br />\
    <img src="styles/legend/Hogarescongarrafaoleacomocombustibleusadoprincipalmenteparacocina_7_2.png" /> 56,2 - 76,9<br />\
    <img src="styles/legend/Hogarescongarrafaoleacomocombustibleusadoprincipalmenteparacocina_7_3.png" /> 76,9 - 92,2<br />\
    <img src="styles/legend/Hogarescongarrafaoleacomocombustibleusadoprincipalmenteparacocina_7_4.png" /> 92,2 - 99<br />' });
var format_Hogaressinpisotipo1cermicabaldosamosaicomrmolmaderaalfombrado_8 = new ol.format.GeoJSON();
var features_Hogaressinpisotipo1cermicabaldosamosaicomrmolmaderaalfombrado_8 = format_Hogaressinpisotipo1cermicabaldosamosaicomrmolmaderaalfombrado_8.readFeatures(json_Hogaressinpisotipo1cermicabaldosamosaicomrmolmaderaalfombrado_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hogaressinpisotipo1cermicabaldosamosaicomrmolmaderaalfombrado_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hogaressinpisotipo1cermicabaldosamosaicomrmolmaderaalfombrado_8.addFeatures(features_Hogaressinpisotipo1cermicabaldosamosaicomrmolmaderaalfombrado_8);
var lyr_Hogaressinpisotipo1cermicabaldosamosaicomrmolmaderaalfombrado_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hogaressinpisotipo1cermicabaldosamosaicomrmolmaderaalfombrado_8, 
                style: style_Hogaressinpisotipo1cermicabaldosamosaicomrmolmaderaalfombrado_8,
                popuplayertitle: 'Hogares sin piso tipo 1 (cerámica, baldosa, mosaico, mármol, madera, alfombrado) (%)',
                interactive: true,
    title: 'Hogares sin piso tipo 1 (cerámica, baldosa, mosaico, mármol, madera, alfombrado) (%)<br />\
    <img src="styles/legend/Hogaressinpisotipo1cermicabaldosamosaicomrmolmaderaalfombrado_8_0.png" /> 9,7 - 13,6<br />\
    <img src="styles/legend/Hogaressinpisotipo1cermicabaldosamosaicomrmolmaderaalfombrado_8_1.png" /> 13,6 - 20,9<br />\
    <img src="styles/legend/Hogaressinpisotipo1cermicabaldosamosaicomrmolmaderaalfombrado_8_2.png" /> 20,9 - 26,5<br />\
    <img src="styles/legend/Hogaressinpisotipo1cermicabaldosamosaicomrmolmaderaalfombrado_8_3.png" /> 26,5 - 38,6<br />\
    <img src="styles/legend/Hogaressinpisotipo1cermicabaldosamosaicomrmolmaderaalfombrado_8_4.png" /> 38,6 - 58,5<br />' });
var format_Hogaressinreddeaguacorriente_9 = new ol.format.GeoJSON();
var features_Hogaressinreddeaguacorriente_9 = format_Hogaressinreddeaguacorriente_9.readFeatures(json_Hogaressinreddeaguacorriente_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hogaressinreddeaguacorriente_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hogaressinreddeaguacorriente_9.addFeatures(features_Hogaressinreddeaguacorriente_9);
var lyr_Hogaressinreddeaguacorriente_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hogaressinreddeaguacorriente_9, 
                style: style_Hogaressinreddeaguacorriente_9,
                popuplayertitle: 'Hogares sin red de agua corriente (%)',
                interactive: true,
    title: 'Hogares sin red de agua corriente (%)<br />\
    <img src="styles/legend/Hogaressinreddeaguacorriente_9_0.png" /> 3,6 - 8,2<br />\
    <img src="styles/legend/Hogaressinreddeaguacorriente_9_1.png" /> 8,2 - 13,1<br />\
    <img src="styles/legend/Hogaressinreddeaguacorriente_9_2.png" /> 13,1 - 26<br />\
    <img src="styles/legend/Hogaressinreddeaguacorriente_9_3.png" /> 26 - 55,2<br />\
    <img src="styles/legend/Hogaressinreddeaguacorriente_9_4.png" /> 55,2 - 84,9<br />' });
var format_Hogaresconhacinamientocrticomsde3personasporcuarto_10 = new ol.format.GeoJSON();
var features_Hogaresconhacinamientocrticomsde3personasporcuarto_10 = format_Hogaresconhacinamientocrticomsde3personasporcuarto_10.readFeatures(json_Hogaresconhacinamientocrticomsde3personasporcuarto_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hogaresconhacinamientocrticomsde3personasporcuarto_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hogaresconhacinamientocrticomsde3personasporcuarto_10.addFeatures(features_Hogaresconhacinamientocrticomsde3personasporcuarto_10);
var lyr_Hogaresconhacinamientocrticomsde3personasporcuarto_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hogaresconhacinamientocrticomsde3personasporcuarto_10, 
                style: style_Hogaresconhacinamientocrticomsde3personasporcuarto_10,
                popuplayertitle: 'Hogares con hacinamiento crítico (más de 3 personas por cuarto) (%)',
                interactive: true,
    title: 'Hogares con hacinamiento crítico (más de 3 personas por cuarto) (%)<br />\
    <img src="styles/legend/Hogaresconhacinamientocrticomsde3personasporcuarto_10_0.png" /> 1,03 - 2,26<br />\
    <img src="styles/legend/Hogaresconhacinamientocrticomsde3personasporcuarto_10_1.png" /> 2,26 - 3,36<br />\
    <img src="styles/legend/Hogaresconhacinamientocrticomsde3personasporcuarto_10_2.png" /> 3,36 - 4,14<br />\
    <img src="styles/legend/Hogaresconhacinamientocrticomsde3personasporcuarto_10_3.png" /> 4,14 - 5,65<br />\
    <img src="styles/legend/Hogaresconhacinamientocrticomsde3personasporcuarto_10_4.png" /> 5,65 - 7,39<br />' });
var format_HogaresconalmenosunindicadorNBI_11 = new ol.format.GeoJSON();
var features_HogaresconalmenosunindicadorNBI_11 = format_HogaresconalmenosunindicadorNBI_11.readFeatures(json_HogaresconalmenosunindicadorNBI_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HogaresconalmenosunindicadorNBI_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HogaresconalmenosunindicadorNBI_11.addFeatures(features_HogaresconalmenosunindicadorNBI_11);
var lyr_HogaresconalmenosunindicadorNBI_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HogaresconalmenosunindicadorNBI_11, 
                style: style_HogaresconalmenosunindicadorNBI_11,
                popuplayertitle: 'Hogares con al menos un indicador NBI (%)',
                interactive: true,
    title: 'Hogares con al menos un indicador NBI (%)<br />\
    <img src="styles/legend/HogaresconalmenosunindicadorNBI_11_0.png" /> 3,1 - 5<br />\
    <img src="styles/legend/HogaresconalmenosunindicadorNBI_11_1.png" /> 5 - 6,3<br />\
    <img src="styles/legend/HogaresconalmenosunindicadorNBI_11_2.png" /> 6,3 - 8,6<br />\
    <img src="styles/legend/HogaresconalmenosunindicadorNBI_11_3.png" /> 8,6 - 10,6<br />\
    <img src="styles/legend/HogaresconalmenosunindicadorNBI_11_4.png" /> 10,6 - 13,5<br />' });
var format_Personasquerecibenjubilacinopensin65aosyms_12 = new ol.format.GeoJSON();
var features_Personasquerecibenjubilacinopensin65aosyms_12 = format_Personasquerecibenjubilacinopensin65aosyms_12.readFeatures(json_Personasquerecibenjubilacinopensin65aosyms_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Personasquerecibenjubilacinopensin65aosyms_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Personasquerecibenjubilacinopensin65aosyms_12.addFeatures(features_Personasquerecibenjubilacinopensin65aosyms_12);
var lyr_Personasquerecibenjubilacinopensin65aosyms_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Personasquerecibenjubilacinopensin65aosyms_12, 
                style: style_Personasquerecibenjubilacinopensin65aosyms_12,
                popuplayertitle: 'Personas que reciben jubilación o pensión (65 años y más) (%)',
                interactive: true,
    title: 'Personas que reciben jubilación o pensión (65 años y más) (%)<br />\
    <img src="styles/legend/Personasquerecibenjubilacinopensin65aosyms_12_0.png" /> 4,79 - 6,87<br />\
    <img src="styles/legend/Personasquerecibenjubilacinopensin65aosyms_12_1.png" /> 6,87 - 7,72<br />\
    <img src="styles/legend/Personasquerecibenjubilacinopensin65aosyms_12_2.png" /> 7,72 - 9,68<br />\
    <img src="styles/legend/Personasquerecibenjubilacinopensin65aosyms_12_3.png" /> 9,68 - 14,46<br />\
    <img src="styles/legend/Personasquerecibenjubilacinopensin65aosyms_12_4.png" /> 14,46 - 16,82<br />' });
var format_Pobconsaludpblica_13 = new ol.format.GeoJSON();
var features_Pobconsaludpblica_13 = format_Pobconsaludpblica_13.readFeatures(json_Pobconsaludpblica_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pobconsaludpblica_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pobconsaludpblica_13.addFeatures(features_Pobconsaludpblica_13);
var lyr_Pobconsaludpblica_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pobconsaludpblica_13, 
                style: style_Pobconsaludpblica_13,
                popuplayertitle: 'Pob. con salud pública (%)',
                interactive: true,
    title: 'Pob. con salud pública (%)<br />\
    <img src="styles/legend/Pobconsaludpblica_13_0.png" /> 22,6 - 28,9<br />\
    <img src="styles/legend/Pobconsaludpblica_13_1.png" /> 28,9 - 35,3<br />\
    <img src="styles/legend/Pobconsaludpblica_13_2.png" /> 35,3 - 40,5<br />\
    <img src="styles/legend/Pobconsaludpblica_13_3.png" /> 40,5 - 48,3<br />\
    <img src="styles/legend/Pobconsaludpblica_13_4.png" /> 48,3 - 49,9<br />' });
var format_PoblacinconobrasocialoprepagaincluyePAMI_14 = new ol.format.GeoJSON();
var features_PoblacinconobrasocialoprepagaincluyePAMI_14 = format_PoblacinconobrasocialoprepagaincluyePAMI_14.readFeatures(json_PoblacinconobrasocialoprepagaincluyePAMI_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinconobrasocialoprepagaincluyePAMI_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinconobrasocialoprepagaincluyePAMI_14.addFeatures(features_PoblacinconobrasocialoprepagaincluyePAMI_14);
var lyr_PoblacinconobrasocialoprepagaincluyePAMI_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoblacinconobrasocialoprepagaincluyePAMI_14, 
                style: style_PoblacinconobrasocialoprepagaincluyePAMI_14,
                popuplayertitle: 'Población con obra social o prepaga (incluye PAMI) (%)',
                interactive: true,
    title: 'Población con obra social o prepaga (incluye PAMI) (%)<br />\
    <img src="styles/legend/PoblacinconobrasocialoprepagaincluyePAMI_14_0.png" /> 41,2 - 47,6<br />\
    <img src="styles/legend/PoblacinconobrasocialoprepagaincluyePAMI_14_1.png" /> 47,6 - 54,4<br />\
    <img src="styles/legend/PoblacinconobrasocialoprepagaincluyePAMI_14_2.png" /> 54,4 - 59,7<br />\
    <img src="styles/legend/PoblacinconobrasocialoprepagaincluyePAMI_14_3.png" /> 59,7 - 66,5<br />\
    <img src="styles/legend/PoblacinconobrasocialoprepagaincluyePAMI_14_4.png" /> 66,5 - 74,8<br />' });
var format_Poblacinde13a17queasiste_15 = new ol.format.GeoJSON();
var features_Poblacinde13a17queasiste_15 = format_Poblacinde13a17queasiste_15.readFeatures(json_Poblacinde13a17queasiste_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblacinde13a17queasiste_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacinde13a17queasiste_15.addFeatures(features_Poblacinde13a17queasiste_15);
var lyr_Poblacinde13a17queasiste_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poblacinde13a17queasiste_15, 
                style: style_Poblacinde13a17queasiste_15,
                popuplayertitle: 'Población de 13 a 17 que asiste (%)',
                interactive: true,
    title: 'Población de 13 a 17 que asiste (%)<br />\
    <img src="styles/legend/Poblacinde13a17queasiste_15_0.png" /> 5,99 - 6,66<br />\
    <img src="styles/legend/Poblacinde13a17queasiste_15_1.png" /> 6,66 - 7,15<br />\
    <img src="styles/legend/Poblacinde13a17queasiste_15_2.png" /> 7,15 - 8,14<br />\
    <img src="styles/legend/Poblacinde13a17queasiste_15_3.png" /> 8,14 - 8,96<br />\
    <img src="styles/legend/Poblacinde13a17queasiste_15_4.png" /> 8,96 - 9,98<br />' });
var format_Poblacinde6a12queasiste_16 = new ol.format.GeoJSON();
var features_Poblacinde6a12queasiste_16 = format_Poblacinde6a12queasiste_16.readFeatures(json_Poblacinde6a12queasiste_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblacinde6a12queasiste_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacinde6a12queasiste_16.addFeatures(features_Poblacinde6a12queasiste_16);
var lyr_Poblacinde6a12queasiste_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poblacinde6a12queasiste_16, 
                style: style_Poblacinde6a12queasiste_16,
                popuplayertitle: 'Población de 6 a 12 que asiste (%)',
                interactive: true,
    title: 'Población de 6 a 12 que asiste (%)<br />\
    <img src="styles/legend/Poblacinde6a12queasiste_16_0.png" /> 9,22 - 11,68<br />\
    <img src="styles/legend/Poblacinde6a12queasiste_16_1.png" /> 11,68 - 12,66<br />\
    <img src="styles/legend/Poblacinde6a12queasiste_16_2.png" /> 12,66 - 13,35<br />\
    <img src="styles/legend/Poblacinde6a12queasiste_16_3.png" /> 13,35 - 14,22<br />\
    <img src="styles/legend/Poblacinde6a12queasiste_16_4.png" /> 14,22 - 16,88<br />' });
var format_Poblacin18aosymsconsecundarioCOMPLETOcopiar_17 = new ol.format.GeoJSON();
var features_Poblacin18aosymsconsecundarioCOMPLETOcopiar_17 = format_Poblacin18aosymsconsecundarioCOMPLETOcopiar_17.readFeatures(json_Poblacin18aosymsconsecundarioCOMPLETOcopiar_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblacin18aosymsconsecundarioCOMPLETOcopiar_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacin18aosymsconsecundarioCOMPLETOcopiar_17.addFeatures(features_Poblacin18aosymsconsecundarioCOMPLETOcopiar_17);
var lyr_Poblacin18aosymsconsecundarioCOMPLETOcopiar_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poblacin18aosymsconsecundarioCOMPLETOcopiar_17, 
                style: style_Poblacin18aosymsconsecundarioCOMPLETOcopiar_17,
                popuplayertitle: 'Población 18 años y más con secundario COMPLETO (%) copiar',
                interactive: true,
    title: 'Población 18 años y más con secundario COMPLETO (%) copiar<br />\
    <img src="styles/legend/Poblacin18aosymsconsecundarioCOMPLETOcopiar_17_0.png" /> 19,3 - 29,4<br />\
    <img src="styles/legend/Poblacin18aosymsconsecundarioCOMPLETOcopiar_17_1.png" /> 29,4 - 34,5<br />\
    <img src="styles/legend/Poblacin18aosymsconsecundarioCOMPLETOcopiar_17_2.png" /> 34,5 - 42,4<br />\
    <img src="styles/legend/Poblacin18aosymsconsecundarioCOMPLETOcopiar_17_3.png" /> 42,4 - 49,3<br />\
    <img src="styles/legend/Poblacin18aosymsconsecundarioCOMPLETOcopiar_17_4.png" /> 49,3 - 55,6<br />' });
var format_Poblacin18aosymsconsecundarioINCOMPLETO_18 = new ol.format.GeoJSON();
var features_Poblacin18aosymsconsecundarioINCOMPLETO_18 = format_Poblacin18aosymsconsecundarioINCOMPLETO_18.readFeatures(json_Poblacin18aosymsconsecundarioINCOMPLETO_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblacin18aosymsconsecundarioINCOMPLETO_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacin18aosymsconsecundarioINCOMPLETO_18.addFeatures(features_Poblacin18aosymsconsecundarioINCOMPLETO_18);
var lyr_Poblacin18aosymsconsecundarioINCOMPLETO_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poblacin18aosymsconsecundarioINCOMPLETO_18, 
                style: style_Poblacin18aosymsconsecundarioINCOMPLETO_18,
                popuplayertitle: 'Población 18 años y más con secundario INCOMPLETO (%)',
                interactive: true,
    title: 'Población 18 años y más con secundario INCOMPLETO (%)<br />\
    <img src="styles/legend/Poblacin18aosymsconsecundarioINCOMPLETO_18_0.png" /> 48,3 - 52,2<br />\
    <img src="styles/legend/Poblacin18aosymsconsecundarioINCOMPLETO_18_1.png" /> 46,4 - 48,3<br />\
    <img src="styles/legend/Poblacin18aosymsconsecundarioINCOMPLETO_18_2.png" /> 43,6 - 46,4<br />\
    <img src="styles/legend/Poblacin18aosymsconsecundarioINCOMPLETO_18_3.png" /> 37 - 43,6<br />\
    <img src="styles/legend/Poblacin18aosymsconsecundarioINCOMPLETO_18_4.png" /> 33,3 - 37<br />' });
var format_Poblacin18aosyms_19 = new ol.format.GeoJSON();
var features_Poblacin18aosyms_19 = format_Poblacin18aosyms_19.readFeatures(json_Poblacin18aosyms_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblacin18aosyms_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacin18aosyms_19.addFeatures(features_Poblacin18aosyms_19);
var lyr_Poblacin18aosyms_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poblacin18aosyms_19, 
                style: style_Poblacin18aosyms_19,
                popuplayertitle: 'Población 18 años y más (%)',
                interactive: true,
    title: 'Población 18 años y más (%)<br />\
    <img src="styles/legend/Poblacin18aosyms_19_0.png" /> 64,41 - 66,92<br />\
    <img src="styles/legend/Poblacin18aosyms_19_1.png" /> 66,92 - 68,6<br />\
    <img src="styles/legend/Poblacin18aosyms_19_2.png" /> 68,6 - 69,47<br />\
    <img src="styles/legend/Poblacin18aosyms_19_3.png" /> 69,47 - 73,23<br />\
    <img src="styles/legend/Poblacin18aosyms_19_4.png" /> 73,23 - 75,34<br />' });
var format_Poblacinde0a17aos_20 = new ol.format.GeoJSON();
var features_Poblacinde0a17aos_20 = format_Poblacinde0a17aos_20.readFeatures(json_Poblacinde0a17aos_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblacinde0a17aos_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacinde0a17aos_20.addFeatures(features_Poblacinde0a17aos_20);
var lyr_Poblacinde0a17aos_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poblacinde0a17aos_20, 
                style: style_Poblacinde0a17aos_20,
                popuplayertitle: 'Población de 0 a 17 años (%)',
                interactive: true,
    title: 'Población de 0 a 17 años (%)<br />\
    <img src="styles/legend/Poblacinde0a17aos_20_0.png" /> 24,66 - 26,77<br />\
    <img src="styles/legend/Poblacinde0a17aos_20_1.png" /> 26,77 - 30,53<br />\
    <img src="styles/legend/Poblacinde0a17aos_20_2.png" /> 30,53 - 31,4<br />\
    <img src="styles/legend/Poblacinde0a17aos_20_3.png" /> 31,4 - 33,08<br />\
    <img src="styles/legend/Poblacinde0a17aos_20_4.png" /> 33,08 - 35,59<br />' });
var format_Varones_21 = new ol.format.GeoJSON();
var features_Varones_21 = format_Varones_21.readFeatures(json_Varones_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Varones_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Varones_21.addFeatures(features_Varones_21);
var lyr_Varones_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Varones_21, 
                style: style_Varones_21,
                popuplayertitle: 'Varones (%)',
                interactive: true,
    title: 'Varones (%)<br />\
    <img src="styles/legend/Varones_21_0.png" /> 46,74 - 49,14<br />\
    <img src="styles/legend/Varones_21_1.png" /> 49,14 - 50,21<br />\
    <img src="styles/legend/Varones_21_2.png" /> 50,21 - 50,93<br />\
    <img src="styles/legend/Varones_21_3.png" /> 50,93 - 51,9<br />\
    <img src="styles/legend/Varones_21_4.png" /> 51,9 - 54,73<br />' });
var format_Mujeres_22 = new ol.format.GeoJSON();
var features_Mujeres_22 = format_Mujeres_22.readFeatures(json_Mujeres_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mujeres_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mujeres_22.addFeatures(features_Mujeres_22);
var lyr_Mujeres_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mujeres_22, 
                style: style_Mujeres_22,
                popuplayertitle: 'Mujeres (%)',
                interactive: true,
    title: 'Mujeres (%)<br />\
    <img src="styles/legend/Mujeres_22_0.png" /> 45,27 - 48,1<br />\
    <img src="styles/legend/Mujeres_22_1.png" /> 48,1 - 49,07<br />\
    <img src="styles/legend/Mujeres_22_2.png" /> 49,07 - 49,79<br />\
    <img src="styles/legend/Mujeres_22_3.png" /> 49,79 - 50,86<br />\
    <img src="styles/legend/Mujeres_22_4.png" /> 50,86 - 53,26<br />' });
var format_Poblacintotal_23 = new ol.format.GeoJSON();
var features_Poblacintotal_23 = format_Poblacintotal_23.readFeatures(json_Poblacintotal_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblacintotal_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacintotal_23.addFeatures(features_Poblacintotal_23);
var lyr_Poblacintotal_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poblacintotal_23, 
                style: style_Poblacintotal_23,
                popuplayertitle: 'Población total',
                interactive: true,
    title: 'Población total<br />\
    <img src="styles/legend/Poblacintotal_23_0.png" /> 279 - 502<br />\
    <img src="styles/legend/Poblacintotal_23_1.png" /> 502 - 731<br />\
    <img src="styles/legend/Poblacintotal_23_2.png" /> 731 - 866<br />\
    <img src="styles/legend/Poblacintotal_23_3.png" /> 866 - 1171<br />\
    <img src="styles/legend/Poblacintotal_23_4.png" /> 1171 - 2436<br />' });
var format_RadiosCensales2022_24 = new ol.format.GeoJSON();
var features_RadiosCensales2022_24 = format_RadiosCensales2022_24.readFeatures(json_RadiosCensales2022_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RadiosCensales2022_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RadiosCensales2022_24.addFeatures(features_RadiosCensales2022_24);
var lyr_RadiosCensales2022_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RadiosCensales2022_24, 
                style: style_RadiosCensales2022_24,
                popuplayertitle: 'Radios Censales 2022',
                interactive: true,
                title: '<img src="styles/legend/RadiosCensales2022_24.png" /> Radios Censales 2022'
            });
var format_CallesSantaRosa_25 = new ol.format.GeoJSON();
var features_CallesSantaRosa_25 = format_CallesSantaRosa_25.readFeatures(json_CallesSantaRosa_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CallesSantaRosa_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CallesSantaRosa_25.addFeatures(features_CallesSantaRosa_25);
var lyr_CallesSantaRosa_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CallesSantaRosa_25, 
                style: style_CallesSantaRosa_25,
                popuplayertitle: 'Calles Santa Rosa',
                interactive: true,
                title: '<img src="styles/legend/CallesSantaRosa_25.png" /> Calles Santa Rosa'
            });
var format_CabecerasDistritalesyParajes_26 = new ol.format.GeoJSON();
var features_CabecerasDistritalesyParajes_26 = format_CabecerasDistritalesyParajes_26.readFeatures(json_CabecerasDistritalesyParajes_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabecerasDistritalesyParajes_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabecerasDistritalesyParajes_26.addFeatures(features_CabecerasDistritalesyParajes_26);
var lyr_CabecerasDistritalesyParajes_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CabecerasDistritalesyParajes_26, 
                style: style_CabecerasDistritalesyParajes_26,
                popuplayertitle: 'Cabeceras Distritales y Parajes',
                interactive: true,
    title: 'Cabeceras Distritales y Parajes<br />\
    <img src="styles/legend/CabecerasDistritalesyParajes_26_0.png" /> Cabecera departamental<br />\
    <img src="styles/legend/CabecerasDistritalesyParajes_26_1.png" /> Cabecera distrital<br />\
    <img src="styles/legend/CabecerasDistritalesyParajes_26_2.png" /> Paraje<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Hogaresdepersonassolas_1.setVisible(false);lyr_Hogaresconhijosmonoparentales_2.setVisible(false);lyr_Hogaresdeparejasconhijos_3.setVisible(false);lyr_Hogaresnipropietariosniinquilinos_4.setVisible(false);lyr_Hogaresinquilinosdelavivienda_5.setVisible(false);lyr_Hogarespropietariosdelavivienda_6.setVisible(false);lyr_Hogarescongarrafaoleacomocombustibleusadoprincipalmenteparacocina_7.setVisible(false);lyr_Hogaressinpisotipo1cermicabaldosamosaicomrmolmaderaalfombrado_8.setVisible(false);lyr_Hogaressinreddeaguacorriente_9.setVisible(false);lyr_Hogaresconhacinamientocrticomsde3personasporcuarto_10.setVisible(false);lyr_HogaresconalmenosunindicadorNBI_11.setVisible(false);lyr_Personasquerecibenjubilacinopensin65aosyms_12.setVisible(false);lyr_Pobconsaludpblica_13.setVisible(false);lyr_PoblacinconobrasocialoprepagaincluyePAMI_14.setVisible(false);lyr_Poblacinde13a17queasiste_15.setVisible(false);lyr_Poblacinde6a12queasiste_16.setVisible(false);lyr_Poblacin18aosymsconsecundarioCOMPLETOcopiar_17.setVisible(false);lyr_Poblacin18aosymsconsecundarioINCOMPLETO_18.setVisible(false);lyr_Poblacin18aosyms_19.setVisible(false);lyr_Poblacinde0a17aos_20.setVisible(false);lyr_Varones_21.setVisible(false);lyr_Mujeres_22.setVisible(false);lyr_Poblacintotal_23.setVisible(true);lyr_RadiosCensales2022_24.setVisible(false);lyr_CallesSantaRosa_25.setVisible(false);lyr_CabecerasDistritalesyParajes_26.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Hogaresdepersonassolas_1,lyr_Hogaresconhijosmonoparentales_2,lyr_Hogaresdeparejasconhijos_3,lyr_Hogaresnipropietariosniinquilinos_4,lyr_Hogaresinquilinosdelavivienda_5,lyr_Hogarespropietariosdelavivienda_6,lyr_Hogarescongarrafaoleacomocombustibleusadoprincipalmenteparacocina_7,lyr_Hogaressinpisotipo1cermicabaldosamosaicomrmolmaderaalfombrado_8,lyr_Hogaressinreddeaguacorriente_9,lyr_Hogaresconhacinamientocrticomsde3personasporcuarto_10,lyr_HogaresconalmenosunindicadorNBI_11,lyr_Personasquerecibenjubilacinopensin65aosyms_12,lyr_Pobconsaludpblica_13,lyr_PoblacinconobrasocialoprepagaincluyePAMI_14,lyr_Poblacinde13a17queasiste_15,lyr_Poblacinde6a12queasiste_16,lyr_Poblacin18aosymsconsecundarioCOMPLETOcopiar_17,lyr_Poblacin18aosymsconsecundarioINCOMPLETO_18,lyr_Poblacin18aosyms_19,lyr_Poblacinde0a17aos_20,lyr_Varones_21,lyr_Mujeres_22,lyr_Poblacintotal_23,lyr_RadiosCensales2022_24,lyr_CallesSantaRosa_25,lyr_CabecerasDistritalesyParajes_26];
lyr_Hogaresdepersonassolas_1.set('fieldAliases', {'codigo': 'codigo', '__Código': '__Código', '__Nombre': '__Nombre', 'propie_viv': 'propie_viv', 'inquilino': 'inquilino', 'ni prop_in': 'ni prop_in', 'pare_ hijo': 'pare_ hijo', 'monoparent': 'monoparent', 'pers sola': 'pers sola', });
lyr_Hogaresconhijosmonoparentales_2.set('fieldAliases', {'codigo': 'codigo', '__Código': '__Código', '__Nombre': '__Nombre', 'propie_viv': 'propie_viv', 'inquilino': 'inquilino', 'ni prop_in': 'ni prop_in', 'pare_ hijo': 'pare_ hijo', 'monoparent': 'monoparent', 'pers sola': 'pers sola', });
lyr_Hogaresdeparejasconhijos_3.set('fieldAliases', {'codigo': 'codigo', '__Código': '__Código', '__Nombre': '__Nombre', 'propie_viv': 'propie_viv', 'inquilino': 'inquilino', 'ni prop_in': 'ni prop_in', 'pare_ hijo': 'pare_ hijo', 'monoparent': 'monoparent', 'pers sola': 'pers sola', });
lyr_Hogaresnipropietariosniinquilinos_4.set('fieldAliases', {'codigo': 'codigo', '__Código': '__Código', '__Nombre': '__Nombre', 'propie_viv': 'propie_viv', 'inquilino': 'inquilino', 'ni prop_in': 'ni prop_in', 'pare_ hijo': 'pare_ hijo', 'monoparent': 'monoparent', 'pers sola': 'pers sola', });
lyr_Hogaresinquilinosdelavivienda_5.set('fieldAliases', {'codigo': 'codigo', '__Código': '__Código', '__Nombre': '__Nombre', 'propie_viv': 'propie_viv', 'inquilino': 'inquilino', 'ni prop_in': 'ni prop_in', 'pare_ hijo': 'pare_ hijo', 'monoparent': 'monoparent', 'pers sola': 'pers sola', });
lyr_Hogarespropietariosdelavivienda_6.set('fieldAliases', {'codigo': 'codigo', '__Código': '__Código', '__Nombre': '__Nombre', 'propie_viv': 'propie_viv', 'inquilino': 'inquilino', 'ni prop_in': 'ni prop_in', 'pare_ hijo': 'pare_ hijo', 'monoparent': 'monoparent', 'pers sola': 'pers sola', });
lyr_Hogarescongarrafaoleacomocombustibleusadoprincipalmenteparacocina_7.set('fieldAliases', {'codigo': 'codigo', '__Nombre': '__Nombre', '1 Indicado': '1 Indicado', 'Hacinamien': 'Hacinamien', 'crítico': 'crítico', ' sin agua': ' sin agua', 'Sin cloaca': 'Sin cloaca', 'sin piso t': 'sin piso t', 'Con garraf': 'Con garraf', });
lyr_Hogaressinpisotipo1cermicabaldosamosaicomrmolmaderaalfombrado_8.set('fieldAliases', {'codigo': 'codigo', '__Nombre': '__Nombre', '1 Indicado': '1 Indicado', 'Hacinamien': 'Hacinamien', 'crítico': 'crítico', ' sin agua': ' sin agua', 'Sin cloaca': 'Sin cloaca', 'sin piso t': 'sin piso t', 'Con garraf': 'Con garraf', });
lyr_Hogaressinreddeaguacorriente_9.set('fieldAliases', {'codigo': 'codigo', '__Nombre': '__Nombre', '1 Indicado': '1 Indicado', 'Hacinamien': 'Hacinamien', 'crítico': 'crítico', ' sin agua': ' sin agua', 'Sin cloaca': 'Sin cloaca', 'sin piso t': 'sin piso t', 'Con garraf': 'Con garraf', });
lyr_Hogaresconhacinamientocrticomsde3personasporcuarto_10.set('fieldAliases', {'codigo': 'codigo', '__Nombre': '__Nombre', '1 Indicado': '1 Indicado', 'Hacinamien': 'Hacinamien', 'crítico': 'crítico', ' sin agua': ' sin agua', 'Sin cloaca': 'Sin cloaca', 'sin piso t': 'sin piso t', 'Con garraf': 'Con garraf', });
lyr_HogaresconalmenosunindicadorNBI_11.set('fieldAliases', {'codigo': 'codigo', '__Nombre': '__Nombre', '1 Indicado': '1 Indicado', 'Hacinamien': 'Hacinamien', 'crítico': 'crítico', ' sin agua': ' sin agua', 'Sin cloaca': 'Sin cloaca', 'sin piso t': 'sin piso t', 'Con garraf': 'Con garraf', });
lyr_Personasquerecibenjubilacinopensin65aosyms_12.set('fieldAliases', {'codigo': 'codigo', '__Nombre': '__Nombre', 'obra_soci': 'obra_soci', 'solo S-P': 'solo S-P', 'Pension': 'Pension', 'jub_pen65+': 'jub_pen65+', });
lyr_Pobconsaludpblica_13.set('fieldAliases', {'codigo': 'codigo', '__Nombre': '__Nombre', 'obra_soci': 'obra_soci', 'solo S-P': 'solo S-P', 'Pension': 'Pension', 'jub_pen65+': 'jub_pen65+', });
lyr_PoblacinconobrasocialoprepagaincluyePAMI_14.set('fieldAliases', {'codigo': 'codigo', '__Nombre': '__Nombre', 'obra_soci': 'obra_soci', 'solo S-P': 'solo S-P', 'Pension': 'Pension', 'jub_pen65+': 'jub_pen65+', });
lyr_Poblacinde13a17queasiste_15.set('fieldAliases', {'codigo': 'codigo', 'l_Código': 'l_Código', 'l_Nombre': 'l_Nombre', 'l_Categori': 'l_Categori', 'l_18 y má': 'l_18 y má', 'l_18 y m_1': 'l_18 y m_1', 'l_14 a 25': 'l_14 a 25', 'asis 6a12': 'asis 6a12', 'asis 13-17': 'asis 13-17', 'Niños 0a5': 'Niños 0a5', });
lyr_Poblacinde6a12queasiste_16.set('fieldAliases', {'codigo': 'codigo', 'l_Código': 'l_Código', 'l_Nombre': 'l_Nombre', 'l_Categori': 'l_Categori', 'l_18 y má': 'l_18 y má', 'l_18 y m_1': 'l_18 y m_1', 'l_14 a 25': 'l_14 a 25', 'asis 6a12': 'asis 6a12', 'asis 13-17': 'asis 13-17', 'Niños 0a5': 'Niños 0a5', });
lyr_Poblacin18aosymsconsecundarioCOMPLETOcopiar_17.set('fieldAliases', {'codigo': 'codigo', 'l_Código': 'l_Código', 'l_Nombre': 'l_Nombre', 'l_Categori': 'l_Categori', 'l_18 y má': 'l_18 y má', 'l_18 y m_1': 'l_18 y m_1', 'l_14 a 25': 'l_14 a 25', 'asis 6a12': 'asis 6a12', 'asis 13-17': 'asis 13-17', 'Niños 0a5': 'Niños 0a5', });
lyr_Poblacin18aosymsconsecundarioINCOMPLETO_18.set('fieldAliases', {'codigo': 'codigo', 'l_Código': 'l_Código', 'l_Nombre': 'l_Nombre', 'l_Categori': 'l_Categori', 'l_18 y má': 'l_18 y má', 'l_18 y m_1': 'l_18 y m_1', 'l_14 a 25': 'l_14 a 25', 'asis 6a12': 'asis 6a12', 'asis 13-17': 'asis 13-17', 'Niños 0a5': 'Niños 0a5', });
lyr_Poblacin18aosyms_19.set('fieldAliases', {'codigo': 'codigo', '__Nombre': '__Nombre', '__Categori': '__Categori', '0 a 17': '0 a 17', '18 años y': '18 años y', 'mujeres': 'mujeres', 'varones': 'varones', 'Total (x)': 'Total (x)', '% mujeres': '% mujeres', '% varones': '% varones', '0 a17 año': '0 a17 año', 'Pob. total': 'Pob. total', '65 y mas': '65 y mas', '18 y mas %': '18 y mas %', });
lyr_Poblacinde0a17aos_20.set('fieldAliases', {'codigo': 'codigo', '__Nombre': '__Nombre', '__Categori': '__Categori', '0 a 17': '0 a 17', '18 años y': '18 años y', 'mujeres': 'mujeres', 'varones': 'varones', 'Total (x)': 'Total (x)', '% mujeres': '% mujeres', '% varones': '% varones', '0 a17 año': '0 a17 año', 'Pob. total': 'Pob. total', '65 y mas': '65 y mas', '18 y mas %': '18 y mas %', });
lyr_Varones_21.set('fieldAliases', {'codigo': 'codigo', '__Nombre': '__Nombre', '__Categori': '__Categori', '0 a 17': '0 a 17', '18 años y': '18 años y', 'mujeres': 'mujeres', 'varones': 'varones', 'Total (x)': 'Total (x)', '% mujeres': '% mujeres', '% varones': '% varones', '0 a17 año': '0 a17 año', 'Pob. total': 'Pob. total', '65 y mas': '65 y mas', '18 y mas %': '18 y mas %', });
lyr_Mujeres_22.set('fieldAliases', {'codigo': 'codigo', '__Nombre': '__Nombre', '__Categori': '__Categori', '0 a 17': '0 a 17', '18 años y': '18 años y', 'mujeres': 'mujeres', 'varones': 'varones', 'Total (x)': 'Total (x)', '% mujeres': '% mujeres', '% varones': '% varones', '0 a17 año': '0 a17 año', 'Pob. total': 'Pob. total', '65 y mas': '65 y mas', '18 y mas %': '18 y mas %', });
lyr_Poblacintotal_23.set('fieldAliases', {'codigo': 'codigo', '__Nombre': '__Nombre', 'Categoria': 'Categoria', 'Población': 'Población', '0 a 17': '0 a 17', '18 y más': '18 y más', 'Mujeres': 'Mujeres', 'Varones': 'Varones', '65 y más': '65 y más', 'Viviendas': 'Viviendas', 'Hogares': 'Hogares', });
lyr_RadiosCensales2022_24.set('fieldAliases', {'codigo': 'codigo', '__Nombre': '__Nombre', 'Categoria': 'Categoria', 'Población': 'Población', '0 a 17': '0 a 17', '18 y más': '18 y más', 'Mujeres': 'Mujeres', 'Varones': 'Varones', '65 y más': '65 y más', 'Viviendas': 'Viviendas', 'Hogares': 'Hogares', });
lyr_CallesSantaRosa_25.set('fieldAliases', {'Name': 'Name', 'DEPTO': 'DEPTO', 'Tipo': 'Tipo', 'Distrito': 'Distrito', 'Categoria': 'Categoria', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', });
lyr_CabecerasDistritalesyParajes_26.set('fieldAliases', {'Name': 'Name', 'Tipo': 'Tipo', 'Distrito': 'Distrito', });
lyr_Hogaresdepersonassolas_1.set('fieldImages', {'codigo': 'TextEdit', '__Código': 'TextEdit', '__Nombre': 'TextEdit', 'propie_viv': 'TextEdit', 'inquilino': 'TextEdit', 'ni prop_in': 'TextEdit', 'pare_ hijo': 'TextEdit', 'monoparent': 'TextEdit', 'pers sola': 'TextEdit', });
lyr_Hogaresconhijosmonoparentales_2.set('fieldImages', {'codigo': 'TextEdit', '__Código': 'TextEdit', '__Nombre': 'TextEdit', 'propie_viv': 'TextEdit', 'inquilino': 'TextEdit', 'ni prop_in': 'TextEdit', 'pare_ hijo': 'TextEdit', 'monoparent': 'TextEdit', 'pers sola': 'TextEdit', });
lyr_Hogaresdeparejasconhijos_3.set('fieldImages', {'codigo': 'TextEdit', '__Código': 'TextEdit', '__Nombre': 'TextEdit', 'propie_viv': 'TextEdit', 'inquilino': 'TextEdit', 'ni prop_in': 'TextEdit', 'pare_ hijo': 'TextEdit', 'monoparent': 'TextEdit', 'pers sola': 'TextEdit', });
lyr_Hogaresnipropietariosniinquilinos_4.set('fieldImages', {'codigo': 'TextEdit', '__Código': 'TextEdit', '__Nombre': 'TextEdit', 'propie_viv': 'TextEdit', 'inquilino': 'TextEdit', 'ni prop_in': 'TextEdit', 'pare_ hijo': 'TextEdit', 'monoparent': 'TextEdit', 'pers sola': 'TextEdit', });
lyr_Hogaresinquilinosdelavivienda_5.set('fieldImages', {'codigo': 'TextEdit', '__Código': 'TextEdit', '__Nombre': 'TextEdit', 'propie_viv': 'TextEdit', 'inquilino': 'TextEdit', 'ni prop_in': 'TextEdit', 'pare_ hijo': 'TextEdit', 'monoparent': 'TextEdit', 'pers sola': 'TextEdit', });
lyr_Hogarespropietariosdelavivienda_6.set('fieldImages', {'codigo': 'TextEdit', '__Código': 'TextEdit', '__Nombre': 'TextEdit', 'propie_viv': 'TextEdit', 'inquilino': 'TextEdit', 'ni prop_in': 'TextEdit', 'pare_ hijo': 'TextEdit', 'monoparent': 'TextEdit', 'pers sola': 'TextEdit', });
lyr_Hogarescongarrafaoleacomocombustibleusadoprincipalmenteparacocina_7.set('fieldImages', {'codigo': 'TextEdit', '__Nombre': 'TextEdit', '1 Indicado': 'TextEdit', 'Hacinamien': 'TextEdit', 'crítico': 'TextEdit', ' sin agua': 'TextEdit', 'Sin cloaca': 'TextEdit', 'sin piso t': 'TextEdit', 'Con garraf': 'TextEdit', });
lyr_Hogaressinpisotipo1cermicabaldosamosaicomrmolmaderaalfombrado_8.set('fieldImages', {'codigo': 'TextEdit', '__Nombre': 'TextEdit', '1 Indicado': 'TextEdit', 'Hacinamien': 'TextEdit', 'crítico': 'TextEdit', ' sin agua': 'TextEdit', 'Sin cloaca': 'TextEdit', 'sin piso t': 'TextEdit', 'Con garraf': 'TextEdit', });
lyr_Hogaressinreddeaguacorriente_9.set('fieldImages', {'codigo': 'TextEdit', '__Nombre': 'TextEdit', '1 Indicado': 'TextEdit', 'Hacinamien': 'TextEdit', 'crítico': 'TextEdit', ' sin agua': 'TextEdit', 'Sin cloaca': 'TextEdit', 'sin piso t': 'TextEdit', 'Con garraf': 'TextEdit', });
lyr_Hogaresconhacinamientocrticomsde3personasporcuarto_10.set('fieldImages', {'codigo': 'TextEdit', '__Nombre': 'TextEdit', '1 Indicado': 'TextEdit', 'Hacinamien': 'TextEdit', 'crítico': 'TextEdit', ' sin agua': 'TextEdit', 'Sin cloaca': 'TextEdit', 'sin piso t': 'TextEdit', 'Con garraf': 'TextEdit', });
lyr_HogaresconalmenosunindicadorNBI_11.set('fieldImages', {'codigo': 'TextEdit', '__Nombre': 'TextEdit', '1 Indicado': 'TextEdit', 'Hacinamien': 'TextEdit', 'crítico': 'TextEdit', ' sin agua': 'TextEdit', 'Sin cloaca': 'TextEdit', 'sin piso t': 'TextEdit', 'Con garraf': 'TextEdit', });
lyr_Personasquerecibenjubilacinopensin65aosyms_12.set('fieldImages', {'codigo': 'TextEdit', '__Nombre': 'TextEdit', 'obra_soci': 'TextEdit', 'solo S-P': 'TextEdit', 'Pension': 'TextEdit', 'jub_pen65+': 'TextEdit', });
lyr_Pobconsaludpblica_13.set('fieldImages', {'codigo': 'TextEdit', '__Nombre': 'TextEdit', 'obra_soci': 'TextEdit', 'solo S-P': 'TextEdit', 'Pension': 'TextEdit', 'jub_pen65+': 'TextEdit', });
lyr_PoblacinconobrasocialoprepagaincluyePAMI_14.set('fieldImages', {'codigo': 'TextEdit', '__Nombre': 'TextEdit', 'obra_soci': 'TextEdit', 'solo S-P': 'TextEdit', 'Pension': 'TextEdit', 'jub_pen65+': 'TextEdit', });
lyr_Poblacinde13a17queasiste_15.set('fieldImages', {'codigo': 'TextEdit', 'l_Código': 'TextEdit', 'l_Nombre': 'TextEdit', 'l_Categori': 'TextEdit', 'l_18 y má': 'TextEdit', 'l_18 y m_1': 'TextEdit', 'l_14 a 25': 'TextEdit', 'asis 6a12': 'TextEdit', 'asis 13-17': 'TextEdit', 'Niños 0a5': '', });
lyr_Poblacinde6a12queasiste_16.set('fieldImages', {'codigo': 'TextEdit', 'l_Código': 'TextEdit', 'l_Nombre': 'TextEdit', 'l_Categori': 'TextEdit', 'l_18 y má': 'TextEdit', 'l_18 y m_1': 'TextEdit', 'l_14 a 25': 'TextEdit', 'asis 6a12': 'TextEdit', 'asis 13-17': 'TextEdit', 'Niños 0a5': '', });
lyr_Poblacin18aosymsconsecundarioCOMPLETOcopiar_17.set('fieldImages', {'codigo': 'TextEdit', 'l_Código': 'TextEdit', 'l_Nombre': 'TextEdit', 'l_Categori': 'TextEdit', 'l_18 y má': 'TextEdit', 'l_18 y m_1': 'TextEdit', 'l_14 a 25': 'TextEdit', 'asis 6a12': 'TextEdit', 'asis 13-17': 'TextEdit', 'Niños 0a5': '', });
lyr_Poblacin18aosymsconsecundarioINCOMPLETO_18.set('fieldImages', {'codigo': 'TextEdit', 'l_Código': 'TextEdit', 'l_Nombre': 'TextEdit', 'l_Categori': 'TextEdit', 'l_18 y má': 'TextEdit', 'l_18 y m_1': 'TextEdit', 'l_14 a 25': 'TextEdit', 'asis 6a12': 'TextEdit', 'asis 13-17': 'TextEdit', 'Niños 0a5': '', });
lyr_Poblacin18aosyms_19.set('fieldImages', {'codigo': 'TextEdit', '__Nombre': 'TextEdit', '__Categori': 'TextEdit', '0 a 17': 'TextEdit', '18 años y': 'TextEdit', 'mujeres': 'TextEdit', 'varones': 'TextEdit', 'Total (x)': 'TextEdit', '% mujeres': 'TextEdit', '% varones': 'TextEdit', '0 a17 año': 'TextEdit', 'Pob. total': 'TextEdit', '65 y mas': 'TextEdit', '18 y mas %': 'TextEdit', });
lyr_Poblacinde0a17aos_20.set('fieldImages', {'codigo': 'TextEdit', '__Nombre': 'TextEdit', '__Categori': 'TextEdit', '0 a 17': 'TextEdit', '18 años y': 'TextEdit', 'mujeres': 'TextEdit', 'varones': 'TextEdit', 'Total (x)': 'TextEdit', '% mujeres': 'TextEdit', '% varones': 'TextEdit', '0 a17 año': 'TextEdit', 'Pob. total': 'TextEdit', '65 y mas': 'TextEdit', '18 y mas %': 'TextEdit', });
lyr_Varones_21.set('fieldImages', {'codigo': 'TextEdit', '__Nombre': 'TextEdit', '__Categori': 'TextEdit', '0 a 17': 'TextEdit', '18 años y': 'TextEdit', 'mujeres': 'TextEdit', 'varones': 'TextEdit', 'Total (x)': 'TextEdit', '% mujeres': 'TextEdit', '% varones': 'TextEdit', '0 a17 año': 'TextEdit', 'Pob. total': 'TextEdit', '65 y mas': 'TextEdit', '18 y mas %': 'TextEdit', });
lyr_Mujeres_22.set('fieldImages', {'codigo': 'TextEdit', '__Nombre': 'TextEdit', '__Categori': 'TextEdit', '0 a 17': 'TextEdit', '18 años y': 'TextEdit', 'mujeres': 'TextEdit', 'varones': 'TextEdit', 'Total (x)': 'TextEdit', '% mujeres': 'TextEdit', '% varones': 'TextEdit', '0 a17 año': 'TextEdit', 'Pob. total': 'TextEdit', '65 y mas': 'TextEdit', '18 y mas %': 'TextEdit', });
lyr_Poblacintotal_23.set('fieldImages', {'codigo': 'TextEdit', '__Nombre': 'TextEdit', 'Categoria': 'TextEdit', 'Población': 'TextEdit', '0 a 17': 'TextEdit', '18 y más': 'TextEdit', 'Mujeres': 'TextEdit', 'Varones': 'TextEdit', '65 y más': 'TextEdit', 'Viviendas': 'TextEdit', 'Hogares': 'TextEdit', });
lyr_RadiosCensales2022_24.set('fieldImages', {'codigo': 'TextEdit', '__Nombre': 'TextEdit', 'Categoria': 'TextEdit', 'Población': 'TextEdit', '0 a 17': 'TextEdit', '18 y más': 'TextEdit', 'Mujeres': 'TextEdit', 'Varones': 'TextEdit', '65 y más': 'TextEdit', 'Viviendas': 'TextEdit', 'Hogares': 'TextEdit', });
lyr_CallesSantaRosa_25.set('fieldImages', {'Name': 'TextEdit', 'DEPTO': 'TextEdit', 'Tipo': 'TextEdit', 'Distrito': 'TextEdit', 'Categoria': 'TextEdit', 'auxiliary_storage_labeling_show': 'Hidden', });
lyr_CabecerasDistritalesyParajes_26.set('fieldImages', {'Name': 'TextEdit', 'Tipo': 'TextEdit', 'Distrito': 'TextEdit', });
lyr_Hogaresdepersonassolas_1.set('fieldLabels', {'codigo': 'hidden field', '__Código': 'hidden field', '__Nombre': 'hidden field', 'propie_viv': 'hidden field', 'inquilino': 'hidden field', 'ni prop_in': 'hidden field', 'pare_ hijo': 'hidden field', 'monoparent': 'hidden field', 'pers sola': 'hidden field', });
lyr_Hogaresconhijosmonoparentales_2.set('fieldLabels', {'codigo': 'hidden field', '__Código': 'hidden field', '__Nombre': 'hidden field', 'propie_viv': 'hidden field', 'inquilino': 'hidden field', 'ni prop_in': 'hidden field', 'pare_ hijo': 'hidden field', 'monoparent': 'hidden field', 'pers sola': 'hidden field', });
lyr_Hogaresdeparejasconhijos_3.set('fieldLabels', {'codigo': 'hidden field', '__Código': 'hidden field', '__Nombre': 'hidden field', 'propie_viv': 'hidden field', 'inquilino': 'hidden field', 'ni prop_in': 'hidden field', 'pare_ hijo': 'hidden field', 'monoparent': 'hidden field', 'pers sola': 'hidden field', });
lyr_Hogaresnipropietariosniinquilinos_4.set('fieldLabels', {'codigo': 'hidden field', '__Código': 'hidden field', '__Nombre': 'hidden field', 'propie_viv': 'hidden field', 'inquilino': 'hidden field', 'ni prop_in': 'hidden field', 'pare_ hijo': 'hidden field', 'monoparent': 'hidden field', 'pers sola': 'hidden field', });
lyr_Hogaresinquilinosdelavivienda_5.set('fieldLabels', {'codigo': 'hidden field', '__Código': 'hidden field', '__Nombre': 'hidden field', 'propie_viv': 'hidden field', 'inquilino': 'hidden field', 'ni prop_in': 'hidden field', 'pare_ hijo': 'hidden field', 'monoparent': 'hidden field', 'pers sola': 'hidden field', });
lyr_Hogarespropietariosdelavivienda_6.set('fieldLabels', {'codigo': 'hidden field', '__Código': 'hidden field', '__Nombre': 'hidden field', 'propie_viv': 'hidden field', 'inquilino': 'hidden field', 'ni prop_in': 'hidden field', 'pare_ hijo': 'hidden field', 'monoparent': 'hidden field', 'pers sola': 'hidden field', });
lyr_Hogarescongarrafaoleacomocombustibleusadoprincipalmenteparacocina_7.set('fieldLabels', {'codigo': 'hidden field', '__Nombre': 'hidden field', '1 Indicado': 'hidden field', 'Hacinamien': 'hidden field', 'crítico': 'hidden field', ' sin agua': 'hidden field', 'Sin cloaca': 'hidden field', 'sin piso t': 'hidden field', 'Con garraf': 'hidden field', });
lyr_Hogaressinpisotipo1cermicabaldosamosaicomrmolmaderaalfombrado_8.set('fieldLabels', {'codigo': 'hidden field', '__Nombre': 'hidden field', '1 Indicado': 'hidden field', 'Hacinamien': 'hidden field', 'crítico': 'hidden field', ' sin agua': 'hidden field', 'Sin cloaca': 'hidden field', 'sin piso t': 'hidden field', 'Con garraf': 'hidden field', });
lyr_Hogaressinreddeaguacorriente_9.set('fieldLabels', {'codigo': 'hidden field', '__Nombre': 'hidden field', '1 Indicado': 'hidden field', 'Hacinamien': 'hidden field', 'crítico': 'hidden field', ' sin agua': 'hidden field', 'Sin cloaca': 'hidden field', 'sin piso t': 'hidden field', 'Con garraf': 'hidden field', });
lyr_Hogaresconhacinamientocrticomsde3personasporcuarto_10.set('fieldLabels', {'codigo': 'hidden field', '__Nombre': 'hidden field', '1 Indicado': 'hidden field', 'Hacinamien': 'hidden field', 'crítico': 'hidden field', ' sin agua': 'hidden field', 'Sin cloaca': 'hidden field', 'sin piso t': 'hidden field', 'Con garraf': 'hidden field', });
lyr_HogaresconalmenosunindicadorNBI_11.set('fieldLabels', {'codigo': 'hidden field', '__Nombre': 'hidden field', '1 Indicado': 'hidden field', 'Hacinamien': 'hidden field', 'crítico': 'hidden field', ' sin agua': 'hidden field', 'Sin cloaca': 'hidden field', 'sin piso t': 'hidden field', 'Con garraf': 'hidden field', });
lyr_Personasquerecibenjubilacinopensin65aosyms_12.set('fieldLabels', {'codigo': 'hidden field', '__Nombre': 'hidden field', 'obra_soci': 'hidden field', 'solo S-P': 'hidden field', 'Pension': 'hidden field', 'jub_pen65+': 'hidden field', });
lyr_Pobconsaludpblica_13.set('fieldLabels', {'codigo': 'hidden field', '__Nombre': 'hidden field', 'obra_soci': 'hidden field', 'solo S-P': 'hidden field', 'Pension': 'hidden field', 'jub_pen65+': 'hidden field', });
lyr_PoblacinconobrasocialoprepagaincluyePAMI_14.set('fieldLabels', {'codigo': 'hidden field', '__Nombre': 'hidden field', 'obra_soci': 'hidden field', 'solo S-P': 'hidden field', 'Pension': 'hidden field', 'jub_pen65+': 'hidden field', });
lyr_Poblacinde13a17queasiste_15.set('fieldLabels', {'codigo': 'hidden field', 'l_Código': 'hidden field', 'l_Nombre': 'header label - always visible', 'l_Categori': 'hidden field', 'l_18 y má': 'hidden field', 'l_18 y m_1': 'hidden field', 'l_14 a 25': 'hidden field', 'asis 6a12': 'header label - always visible', 'asis 13-17': 'header label - always visible', 'Niños 0a5': 'hidden field', });
lyr_Poblacinde6a12queasiste_16.set('fieldLabels', {'codigo': 'hidden field', 'l_Código': 'hidden field', 'l_Nombre': 'header label - always visible', 'l_Categori': 'hidden field', 'l_18 y má': 'hidden field', 'l_18 y m_1': 'hidden field', 'l_14 a 25': 'hidden field', 'asis 6a12': 'header label - always visible', 'asis 13-17': 'header label - always visible', 'Niños 0a5': 'hidden field', });
lyr_Poblacin18aosymsconsecundarioCOMPLETOcopiar_17.set('fieldLabels', {'codigo': 'hidden field', 'l_Código': 'hidden field', 'l_Nombre': 'header label - always visible', 'l_Categori': 'hidden field', 'l_18 y má': 'hidden field', 'l_18 y m_1': 'header label - always visible', 'l_14 a 25': 'hidden field', 'asis 6a12': 'hidden field', 'asis 13-17': 'hidden field', 'Niños 0a5': 'hidden field', });
lyr_Poblacin18aosymsconsecundarioINCOMPLETO_18.set('fieldLabels', {'codigo': 'hidden field', 'l_Código': 'hidden field', 'l_Nombre': 'header label - always visible', 'l_Categori': 'hidden field', 'l_18 y má': 'header label - always visible', 'l_18 y m_1': 'hidden field', 'l_14 a 25': 'hidden field', 'asis 6a12': 'hidden field', 'asis 13-17': 'hidden field', 'Niños 0a5': 'hidden field', });
lyr_Poblacin18aosyms_19.set('fieldLabels', {'codigo': 'hidden field', '__Nombre': 'header label - always visible', '__Categori': 'hidden field', '0 a 17': 'hidden field', '18 años y': 'hidden field', 'mujeres': 'hidden field', 'varones': 'hidden field', 'Total (x)': 'hidden field', '% mujeres': 'hidden field', '% varones': 'hidden field', '0 a17 año': 'header label - always visible', 'Pob. total': 'hidden field', '65 y mas': 'hidden field', '18 y mas %': 'header label - always visible', });
lyr_Poblacinde0a17aos_20.set('fieldLabels', {'codigo': 'hidden field', '__Nombre': 'header label - always visible', '__Categori': 'hidden field', '0 a 17': 'hidden field', '18 años y': 'hidden field', 'mujeres': 'hidden field', 'varones': 'hidden field', 'Total (x)': 'hidden field', '% mujeres': 'hidden field', '% varones': 'hidden field', '0 a17 año': 'header label - always visible', 'Pob. total': 'hidden field', '65 y mas': 'hidden field', '18 y mas %': 'header label - always visible', });
lyr_Varones_21.set('fieldLabels', {'codigo': 'hidden field', '__Nombre': 'header label - always visible', '__Categori': 'hidden field', '0 a 17': 'hidden field', '18 años y': 'hidden field', 'mujeres': 'header label - always visible', 'varones': 'header label - always visible', 'Total (x)': 'hidden field', '% mujeres': 'hidden field', '% varones': 'hidden field', '0 a17 año': 'hidden field', 'Pob. total': 'hidden field', '65 y mas': 'hidden field', '18 y mas %': 'hidden field', });
lyr_Mujeres_22.set('fieldLabels', {'codigo': 'hidden field', '__Nombre': 'header label - always visible', '__Categori': 'hidden field', '0 a 17': 'hidden field', '18 años y': 'hidden field', 'mujeres': 'hidden field', 'varones': 'hidden field', 'Total (x)': 'hidden field', '% mujeres': 'header label - always visible', '% varones': 'header label - always visible', '0 a17 año': 'hidden field', 'Pob. total': 'hidden field', '65 y mas': 'hidden field', '18 y mas %': 'hidden field', });
lyr_Poblacintotal_23.set('fieldLabels', {'codigo': 'header label - always visible', '__Nombre': 'header label - always visible', 'Categoria': 'header label - always visible', 'Población': 'header label - always visible', '0 a 17': 'header label - always visible', '18 y más': 'header label - always visible', 'Mujeres': 'header label - always visible', 'Varones': 'header label - always visible', '65 y más': 'header label - always visible', 'Viviendas': 'header label - always visible', 'Hogares': 'header label - always visible', });
lyr_RadiosCensales2022_24.set('fieldLabels', {'codigo': 'hidden field', '__Nombre': 'hidden field', 'Categoria': 'hidden field', 'Población': 'hidden field', '0 a 17': 'hidden field', '18 y más': 'hidden field', 'Mujeres': 'hidden field', 'Varones': 'hidden field', '65 y más': 'hidden field', 'Viviendas': 'hidden field', 'Hogares': 'hidden field', });
lyr_CallesSantaRosa_25.set('fieldLabels', {'Name': 'header label - always visible', 'DEPTO': 'hidden field', 'Tipo': 'header label - always visible', 'Distrito': 'header label - always visible', 'Categoria': 'hidden field', });
lyr_CabecerasDistritalesyParajes_26.set('fieldLabels', {'Name': 'header label - always visible', 'Tipo': 'header label - always visible', 'Distrito': 'header label - always visible', });
lyr_CabecerasDistritalesyParajes_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});