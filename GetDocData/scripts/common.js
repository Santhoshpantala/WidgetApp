
define(["DS/WAFData/WAFData", "DS/i3DXCompassServices/i3DXCompassServices", "DS/PlatformAPI/PlatformAPI","DS/GetDocData/scripts/common"],function(WAFData, i3DXCompassServices, PlatformAPI) {
    "use strict";
    
    // Example function you want to export
    function getServiceURL() {
        var appConfigs ="";
        var SpaceURl ="";
        console.log("Calling for Service URL");
        //var spaceURL = PlatformAPI.getApplicationConfiguration("app.urls.myapps");
        appConfigs = PlatformAPI.getAllApplicationConfigurations(); 
        console.log("Service URL's ::::::::", appConfigs);
        //var dataSetSpaceURL = spaceURL + "/resources/v1/modeler/documents/search";
        //console.log("dataset URL:::::::::", dataSetSpaceURL);
        //var url = dataSetSpaceURL + "?searchStr=" + docTitle;
        //console.log("URL ::::::::::::", url);
        for(const element of appConfigs)
        {
            if(element['propertyKey'] == 'app.urls.myapps')
            {
                SpaceURl = element['propertyValue'];
                console.log("Space URl :::::::::::::;",SpaceURl);

            }

        }
    }

    // Export the function to be used in other files
    return {
        getServiceURL: getServiceURL
    };
});
