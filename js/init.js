/*
#-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=#
  This file is part of the Smart Developer Hub Project:
    http://www.smartdeveloperhub.org
  Center for Open Middleware
        http://www.centeropenmiddleware.com/
#-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=#
  Copyright (C) 2015 Center for Open Middleware.
#-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=#
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
            http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
#-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=#
*/

//ANGULAR INITIALIZATION


//TEAM LIST
angular.module('teamApp', []);

angular.element(".teamContainer").ready(function () {

    angular.bootstrap(document.body, ['teamApp']);
});

$(document).ready(function(){
    var teamM = [
        {
            name: "Fernando Serena",
            avatar: "https://secure.gravatar.com/avatar/7fb931bbf23f7b52bdc5fa55afcebd24.jpg?s=192&d=https%3A%2F%2Fa.slack-edge.com%2F7fa9%2Fimg%2Favatars%2Fava_0000-192.png",
            email: "fernando.serena@centeropenmiddleware.com",
            linkedin: "https://es.linkedin.com/in/fernando-serena-7575a63b"
        },
        {
            name: "Carlos Blanco Vallejo",
            avatar: "https://avatars0.githubusercontent.com/u/3510628?v=3&s=460",
            email: "carlos.blanco@centeropenmiddleware.com",
            linkedin: "https://es.linkedin.com/in/carlos-blanco-vallejo-05443013"
        },
        {
            name: "Miguel Esteban Gutiérrez",
            avatar: "https://avatars.slack-edge.com/2015-09-25/11345882452_7bdf4b4933babb8275e3_original.jpg",
            email: "miguel.esteban@centeropenmiddleware.com"
        },
        {
            name: "Alejandro Vera",
            avatar: "https://avatars.slack-edge.com/2015-10-16/12623706483_c0f70e5c666dc4318ea1_original.jpg",
            email: "carlos.blanco@centeropenmiddleware.com",
            linkedin: "https://es.linkedin.com/in/alejandroveradejuan"
        },
        {
            name: "María Poveda",
            avatar: "https://avatars.slack-edge.com/2016-03-30/30543274837_b5cbe29e8bf2dd9f9780_512.jpg",
            email: "mpoveda@fi.upm.es",
            linkedin: "https://es.linkedin.com/in/mpovedavillalon"
        },
        {
            name: "Alejandro F. Carrera",
            avatar: "https://avatars.slack-edge.com/2015-10-29/13462251667_a374aacb724f9a740e50_original.jpg",
            email: "alejandro.fernandez.carrera@centeropenmiddleware.com",
            linkedin: "https://es.linkedin.com/in/alejandrofcarrera"
        },
        {
            name: "Ignacio Molina Cuquerella",
            avatar: "https://avatars.slack-edge.com/2016-02-12/21103675760_f343e6c69081779eff84_512.png",
            email: "imolina@centeropenmiddleware.com",
            linkedin: "https://es.linkedin.com/in/ignacio-molina-cuquerella-73172825"
        },
        {
            name: "Andrés García",
            avatar: "https://avatars.slack-edge.com/2015-10-19/12758105063_5f391c5e03744401b1b0_original.jpg",
            email: "hgarcia@fi.upm.es",
            linkedin: "https://es.linkedin.com/in/andrés-garcía-silva-b0304015"
        },
    ];
    $scope = angular.element(".teamContainer").scope();

    $scope.$apply(function () {
        $scope.teamM = teamM;
    });
}) 
