console.log("hello world!")
//we're gonna wanna check this out:
//https://jqueryui.com/draggable/#sortable

var notochords = [
    "alex", "angel", "asa", "chris", "daniel", "erin",
    "ernie", "ivy", "julia", "kate", "levi", "marissa",
    "michael", "mj", "skyler", "victoria"
];
var currentNotochord = null;
function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
window.onload = function() {
    for (var i=0; i<notochords.length; i++) {
        $("<div/>", {
            id: notochords[i]+"-select",
            class: "login-select ui-block-"+["a","b","c","d"][i%4],
        }).appendTo("#login");
        $("<img>", {
            src:"photos/"+notochords[i]+".jpg",
            width: 150,
            height: 150,
        }).appendTo("#"+notochords[i]+"-select");
        $("<p/>", {
            text: "login as "+capitalise(notochords[i])
        }).appendTo("#"+notochords[i]+"-select");
    }
};
