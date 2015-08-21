 /****************************************************************************************
 *
 *  @author Erin Bamberger
 *  @version (.1)
 *  @date (2015)
 *
 *****************************************************************************************/
 define(['./module'], function (factories) {
    factories.factory('worksFactory', ['$http', function ($http) {
        var worksFactory = {
            workDetails : function() {
                return $http({
                    url: "data/portfolio-works.json",
                    method: "GET",
                }).then(function (response) {
                    return response.data;
                });
            }
        };
        return worksFactory;
    }]);
 });