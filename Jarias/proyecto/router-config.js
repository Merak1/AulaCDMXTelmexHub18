app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    //About
    .when("/about", {
        templateUrl : "about/about.htm"
    })
    //init
    .when("/init", {
        templateUrl : "init/init.htm"
    })
    //faq
    .when("/faq", {
        templateUrl : "faq/faq.htm"
    })
    //Frutas
    .when("/fru",{
        templateUrl : "fruta/fru.htm"
    })
        .when("/fru/fru1", {
            templateUrl : "fruta/fru1.htm"
        })
        .when("/fru/fru2", {
            templateUrl : "fruta/fru2.htm"
        })
        .when("/fru/fru3", {
            templateUrl : "fruta/fru3.htm"
        })
        .when("/fru/fru4", {
            templateUrl : "fruta/fru4.htm"
        })
        .when("/fru/fru5", {
            templateUrl : "fruta/fru5.htm"
        })
    //Verdura
    .when("/ver", {
        templateUrl : "verdura/ver.htm"
    })
        .when("/ver/ver1", {
            templateUrl : "verdura/ver1.htm"
        })
        .when("/ver/ver2", {
            templateUrl : "verdura/ver2.htm"
        })
        .when("/ver/ver3", {
            templateUrl : "verdura/ver3.htm"
        })
        .when("/ver/ver4", {
            templateUrl : "verdura/ver4.htm"
        })
        .when("/ver/ver5", {
            templateUrl : "verdura/ver5.htm"
        })
        //Cereales
    .when("/cere", {
        templateUrl : "cere/cere.htm"
    })
        .when("/cere/cere1", {
            templateUrl : "cere/cere1.htm"
        })
        .when("/cere/cere2", {
            templateUrl : "cere/cere2.htm"
        })
        .when("/cere/cere3", {
            templateUrl : "cere/cere3.htm"
        })
        .when("/cere/cere4", {
            templateUrl : "cere/cere4.htm"
        })
        .when("/cere/cere5", {
            templateUrl : "cere/cere5.htm"
        })
        
        //Alimentos de origen animal 
    .when("/origani", {
        templateUrl : "origani/origani.htm"
    })
        .when("/origani/origani1", {
            templateUrl : "origani/origani1.htm"
        })
        .when("/origani/origani2", {
            templateUrl : "origani/origani2.htm"
        })
        .when("/origani/origani3", {
            templateUrl : "origani/origani3.htm"
        })
        .when("/origani/origani4", {
            templateUrl : "origani/origani4.htm"
        })
        .when("/origani/origani5", {
            templateUrl : "origani/origani5.htm"
        })
        //Aceites, grasas y azúcares 
        .when("/grazucar", {
            templateUrl : "grazucar/grazucar.htm"
        })
            .when("/grazucar/grazucar1", {
                templateUrl : "grazucar/grazucar1.htm"
            })
            .when("/grazucar/grazucar2", {
                templateUrl : "grazucar/grazucar2.htm"
            })
            .when("/grazucar/grazucar3", {
                templateUrl : "grazucar/grazucar3.htm"
            })
            .when("/grazucar/grazucar4", {
                templateUrl : "grazucar/grazucar4.htm"
            })
            .when("/grazucar/grazucar5", {
                templateUrl : "grazucar/grazucar5.htm"
            })
            //Alcohol
        .when("/alc", {
            templateUrl : "alc/alc.htm"
        })
            .when("/alc/alc1", {
                templateUrl : "alc/alc1.htm"
            })
            .when("/alc/alc2", {
                templateUrl : "alc/alc2.htm"
            })
            .when("/alc/alc3", {
                templateUrl : "alc/alc3.htm"
            })
            .when("/alc/alc4", {
                templateUrl : "alc/alc4.htm"
            })
            .when("/alc/alc5", {
                templateUrl : "alc/alc5.htm"
            })
});