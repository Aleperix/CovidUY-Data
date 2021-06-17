var dataResult;
    var depsCasesArray = new Array(18);
    $.get("https://services5.arcgis.com/Th0Tmkhiy5BQYoxP/arcgis/rest/services/Casos_DepartamentosROU_vista_2/FeatureServer/0/query?f=json&cacheHint=true&resultOffset=0&resultRecordCount=19&where=1=1&orderByFields=FechaAct%20desc&outFields=*&outSR=102100&resultType=standard&spatialRel=esriSpatialRelIntersects", function(data) {
        dataResult = JSON.parse(data);
        console.log(dataResult.features);
        console.log("Datos cargados");
        saveCasesData()
    });
    function saveCasesData() {
        for (let i = 0; i < dataResult.features.length; i++) {
            depsCasesArray[i] = new Array(5);  
            depsCasesArray[i][0] = dataResult.features[i].attributes.NOMBRE;
            depsCasesArray[i][1] = dataResult.features[i].attributes.Casos_Positivos;
            depsCasesArray[i][2] = dataResult.features[i].attributes.CasosActivos;
            depsCasesArray[i][3] = dataResult.features[i].attributes.Casos_Recuperados;
            depsCasesArray[i][4] = dataResult.features[i].attributes.Fallecidos;
        }
    }
    function getDepCasesData(iDep) {
        $("#cuInfoBoxTitle" ).html(depsCasesArray[iDep][0]);
        $("#confirmedCases" ).html(depsCasesArray[iDep][1]);
        $("#activeCases" ).html(depsCasesArray[iDep][2]);
        $("#recoveredCases" ).html(depsCasesArray[iDep][3]);
        $("#confirmedDeaths" ).html(depsCasesArray[iDep][4]);
        $('#cuInfoBox').css({
            display: "block"
        });
    }
    
    $("svg#uruguay > path").mouseenter(function(e) {
        $(this).mousemove(function(e){      
            $('#cuInfoBox').css({
                left:  e.pageX + 10,
                top:   e.pageY - 90
            });    
        });
        $(this).mouseenter(function(e){
            if ($(this).attr("id") == "uruguay-depmontevideo") {
                getDepCasesData(0)
            }else if ($(this).attr("id") == "uruguay-depcanelones") {
                getDepCasesData(1)
            }else if ($(this).attr("id") == "uruguay-depflores") {
                getDepCasesData(2)
            }else if ($(this).attr("id") == "uruguay-depsalto") {
                getDepCasesData(3)
            }else if ($(this).attr("id") == "uruguay-deprivera") {
                getDepCasesData(4)
            }else if ($(this).attr("id") == "uruguay-deptacuarembo") {
                getDepCasesData(5)
            }else if ($(this).attr("id") == "uruguay-deppaysandu") {
                getDepCasesData(6)
            }else if ($(this).attr("id") == "uruguay-depcerrolargo") {
                getDepCasesData(7)
            }else if ($(this).attr("id") == "uruguay-deprionegro") {
                getDepCasesData(8)
            }else if ($(this).attr("id") == "uruguay-depdurazno") {
                getDepCasesData(9)
            }else if ($(this).attr("id") == "uruguay-deptreintaytres"){
                getDepCasesData(10)
            }else if ($(this).attr("id") == "uruguay-depsoriano") {
                getDepCasesData(11)
            }else if ($(this).attr("id") == "uruguay-depflorida") {
                getDepCasesData(12)
            }else if ($(this).attr("id") == "uruguay-deprocha") {
                getDepCasesData(13)
            }else if ($(this).attr("id") == "uruguay-depcolonia") {
                getDepCasesData(14)
            }else if ($(this).attr("id") == "uruguay-depsanjose") {
                getDepCasesData(15)
            }else if ($(this).attr("id") == "uruguay-depmaldonado") {
                getDepCasesData(16)
            }else if ($(this).attr("id") == "uruguay-deplavalleja") {
                getDepCasesData(17)
            }else if ($(this).attr("id") == "uruguay-departigas") {
                getDepCasesData(18)
            } 
        });
    });
    $("svg#uruguay").mouseleave(function(e){      
        $('#cuInfoBox').css({
            display: "none"
        });    
    });
