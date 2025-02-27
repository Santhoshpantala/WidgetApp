
define(function() {
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
