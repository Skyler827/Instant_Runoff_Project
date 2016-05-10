console.log("hello world!")
//we're gonna wanna check this out:
//https://jqueryui.com/draggable/#sortable

var notochords = [
    "alex", "angel", "asa", "chris", "daniel", "erin",
    "ernie", "ivy", "julia", "kate", "levi", "marissa",
    "michael", "mj", "skyler", "victoria"
];

var elections = [
    "president",
    "musical-director",
    "business-manager",
    "associate-director",
    "treasurer",
    "social-media-manager",
    "social-media-manager-2"
];
var running = [[2,5,8],[4,1,9],[8,3,0],[11,4,5],[15,3,9],[14,1,2],[14,1,2]]
var currentNotochord = null;
function capitalize(string) {
    return string.charAt(0).toUpperCase() 
         + string.slice(1).toLowerCase();
}
function loadNotos() {
    notochords.forEach(function(notochord, i, array) {
        $("<a/>", {
            id: notochord+"-select",
            class: "login-select ui-block-"+["a","b","c","d"][i%4],
            href: "#"
        }).appendTo("#login");
        $("<img>", {
            src:"photos/"+notochord+".jpg",
            width: 150,
            height: 150,
        }).appendTo("#"+notochord+"-select");
        $("<p/>", {
            text: "login as "+capitalize(notochord)
        }).appendTo("#"+notochords[i]+"-select");
        $("#"+notochord+"-select").click(function(){
            currentNotochord = i;
            loadPassword();
        });
    });
}
function loadPassword() {
    $("#login").hide();
    $("#password").show();
    $("<img>", {
        src:"photos/"+notochords[currentNotochord]+".jpg",
        width: 300,
        height: 300,
    }).prependTo("#password");
}
function loadElections() {
    elections.forEach(function(position, i, array) {
        $("<h3/>", {
            text: position,
            class: "election "+position
        }).appendTo("#elections");
        $("<div/>", {
            class: "election "+position
        }).appendTo("#elections");
        $("<ul/>", {
            id: position+"-list",
            class: "sortable"
        }).appendTo("div."+position);
        running[i].forEach(function(notoIndex, i, arrayp) {
            $("<li/>", {
                class: "ui-state-default",
                text: notochords[notoIndex]
            }).appendTo("#"+position+"-list");
        });
    });
}
window.onload = function() {
    //$("#elections").hide();
    $("#elections").accordion();
    elections.forEach(function(position, i, arr){
        $("#"+position+"-list").sortable();
    });
    $("ul, li").disableSelection();
    $("#password-back").click(function(){
        $("#password img").remove();
        $("#password").hide();
        $("#login").show();
    });
    loadNotos();
    loadElections();
};
