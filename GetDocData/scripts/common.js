
define(["DS/WAFData/WAFData", "DS/i3DXCompassServices/i3DXCompassServices", "DS/PlatformAPI/PlatformAPI","DS/GetDocData/scripts/common"],function(WAFData, i3DXCompassServices, PlatformAPI) {
    "use strict";
    
    // Example function you want to export
    function getServiceURL() {
        console.log("Calling for Service URL");
    }

    // Export the function to be used in other files
    return {
        getServiceURL: getServiceURL
    };
});
