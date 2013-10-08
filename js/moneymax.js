

$(function(){
    var TH = $(".sortable .datatable thead th");
    TH.click(function(){
        var ico = $(this).find("i");
        if(ico.length == 1){
            if(ico.hasClass("icon-chevron-sign-down")){
                ico.switchClass("icon-chevron-sign-down", "icon-chevron-sign-up");
            } else {
                ico.switchClass("icon-chevron-sign-up", "icon-chevron-sign-down");
            }
        } else {
            TH.find("i").remove();
            $(this).append("<i style='margin-left:3px;' class='icon-chevron-sign-down'></i>");
        }
    });
});