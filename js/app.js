// 创建一个主模块
var app = angular.module("myApp",["ionic"]);
// 配置路由
app.config(function ($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    // 去掉后退按钮里面自带的文字
    $ionicConfigProvider.backButton.text("");
    $ionicConfigProvider.backButton.previousTitleText("");
    //android tabs在底部
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');
    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('bottom');//默认为left
    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');

    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,
        templateUrl:"tabs/tabs/tabs.html"
    });
    // 情报站Top   intelligence_set
    $stateProvider.state("tabs.intelligence_set",{
        url:"/intelligence_set",
        abstract:true,
        views:{"tabs-intelligence_set":{
            templateUrl:"tabs/intelligence_set/intelligence_set.html"
        }}
    });
    // 咨询 intelligence
    $stateProvider.state("tabs.intelligence_set.intelligence",{
        url:"/intelligence",
        views:{"tabs-intelligence":{
            templateUrl:"tabs/intelligence/intelligence.html"
        }}
    });
    // 搜索 search
    $stateProvider.state("search",{
        url:"/search",
            templateUrl:"tabs/search/search.html"
    });
    // 咨询详情 particulars
    $stateProvider.state("tabs.intelligence_set.particulars",{
        url:"/particulars",
        views:{"tabs-intelligence":{
            templateUrl:"tabs/particulars/particulars.html"
        }}
    });
    // 视频 video
    $stateProvider.state("tabs.intelligence_set.video",{
        url:"/video",
        views:{"tabs-video":{
            templateUrl:"tabs/video/video.html"
        }}
    });
    // 赛事 competition
    $stateProvider.state("tabs.intelligence_set.competition",{
        url:"/competition",
        views:{"tabs-competition":{
            templateUrl:"tabs/competition/competition.html"
        }}
    });
    // 活动 activity
    $stateProvider.state("tabs.intelligence_set.activity",{
        url:"/activity",
        views:{"tabs-activity":{
            templateUrl:"tabs/activity/activity.html"
        }}
    });
    // 社区 community
    $stateProvider.state("tabs.community",{
        url:"/community",
        views:{"tab-community":{
            templateUrl:"tabs/community/community.html"
        }}
    });
    // 基地 base
    $stateProvider.state("tabs.base",{
        url:"/base",
        views:{"tab-base":{
            templateUrl:"tabs/base/base.html"
        }}
    });
    // 角色 role
    $stateProvider.state("tabs.role",{
        url:"/role",
        views:{"tab-role":{
            templateUrl:"tabs/role/role.html"
        }}
    });
    // 默认路由
    $urlRouterProvider.otherwise("/tabs/intelligence_set/intelligence");
});
app.controller("myCtrl",function ($scope,$http){
    $scope.products = [
        {"name":"号外！掌火升级礼包曝光","message":"绝版已久的超稀有近战武器重现掌火升级礼包！","imgSrc":"images/counsel_01.jpg"},
        {"name":"一千灵异夜：血池四兽","message":"小2红四兽中的2神！能给口吃的嘛~","imgSrc":"images/counsel_02.jpg"},
        {"name":"穿越火线之邪神传说","message":"第一百四十九章：玲珑天海","imgSrc":"images/counsel_03.jpg"},
        {"name":"《高手在民间》第十七期","message":"斯太尔爆破连续1V7灭队","imgSrc":"images/counsel_04.jpg"},
        {"name":"盘点M4家族成员的“颜值”","message":"在M4A1这个庞大家族中，谁最好看？","imgSrc":"images/counsel_05.jpg"},
		
        {"name":"老图新说：巷战保卫卡点解析","message":"随着地图被不断摸索，还剩哪些点位值得分享呢？","imgSrc":"images/counsel_06.jpg"},
        {"name":"二神：卫星基地兵分一路战术","message":"爆头盛宴配上娱乐解说，会是一种怎样的场景","imgSrc":"images/counsel_07.jpg"},
        {"name":"《AK传奇》之劲敌消散","message":"S.T战队宣布解散，背后究竟有何隐秘","imgSrc":"images/counsel_08.jpg"},
        {"name":"土豆：鹰眼冲锋五连杀","message":"激情杀戮：冲锋连杀遗憾止步满星","imgSrc":"images/counsel_09.jpg"},
        {"name":"CFS中国区预选赛第二比赛日","message":"AG、VG、TGF晋级决赛争夺进入CFS世界","imgSrc":"images/counsel_10.jpg"},
		
        {"name":"《传言大求真》番外篇","message":"回合制模式的胜负判定究竟如何？","imgSrc":"images/counsel_11.jpg"},
        {"name":"穿越火线之邪神传说","message":"第一百四十八章：捕捉邪神","imgSrc":"images/counsel_12.jpg"},
        {"name":"四强出炉会师CFS半决赛","message":"卫冕冠军汉宫出局，三爷饮恨遭淘汰","imgSrc":"images/counsel_13.jpg"},
        {"name":"土豆面包：鹰眼冲锋五连杀","message":"鹰眼冲锋五连杀遗憾止步满星","imgSrc":"images/counsel_14.jpg"},
        {"name":"《火线好声音》第23期","message":"CF版勇气，素质游戏切莫乱踢","imgSrc":"images/counsel_15.jpg"}
    ];
    // 下拉刷新
    $scope.refresh = function (){
        $http.get("json/data.json").success(function (data){
            $scope.products = data;
        }).finally(function (){
            $scope.$broadcast("scroll.refreshComplete");
        });
    };
    // 无限滚动
    $scope.loadMore = function (){
        $http.get("json/data.json").success(function (data){
            Array.prototype.push.apply($scope.products,data);
        }).finally(function (){
            $scope.$broadcast("scroll.infiniteScrollComplete");
        });
    };
});
//二级目录隐藏选项卡
app.directive('hideTabs', function($rootScope) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            scope.$on('$ionicView.beforeEnter', function() {
                scope.$watch(attributes.hideTabs, function(value){
                    $rootScope.hideTabs = value;
                });
            });
            scope.$on('$ionicView.beforeLeave', function() {
                $rootScope.hideTabs = false;
            });
        }
    };
});