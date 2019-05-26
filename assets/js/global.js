$(document).ready(function(){
//    toggle menu
    var toggleSideMenu = $("#toggle-side-menu");
    var sideMenu = $("#side-menu");
    var sideMenuOverlay = $("side-menu-overlay");
    var closeSideMenu = $("#close-side-menu");
    
    toggleSideMenu.click(function(){
        sideMenu.addClass("active animated fadeInRight");
        sideMenuOverlay.addClass("active");
    })
    closeSideMenu.click(function(){
        sideMenu.removeClass("active animated fadeInRight");
        sideMenuOverlay.removeClass("active");
    })
});