console.log("hello world!")
//we're gonna wanna check this out:
//https://jqueryui.com/draggable/#sortable

var notochords = [
    "alex", "angel", "asa", "chris", "daniel", "erin",
    "ernie", "ivy", "julia", "kate", "levi", "marissa",
    "michael", "mj", "skyler", "victoria"
];

var electionsNames = [
    "Musical Director",
    "President",
    "Associate Director",
    "Business Manager",
    "Tresurer",
    "Public Relations 1",
    "Public Relations 2"
];
var elections = [
    "musical-director",
    "president",
    "associate-director",
    "business-manager",
    "tresurer",
    "public-relations-1",
    "public-relations-2"
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
    $("form").submit(function(event){
        event.preventDefault();
        $("#form-message").text("verifying...")
        $.ajax("login", {
            data: {
                username: notochords[currentNotochord],
                password: $("#psw")[0].value
            }
            
        }).done(function(data, textStatus, jqXHR) {
            $("#password").hide();
            $("#elections").show();
            console.log(data);
        }).fail(function(data, textStatus, jqXHR) {
            $("#form-message").text("password is incorrect.");
            console.log(data);
            console.log(textStatus);
            console.log(jqXHR);
        });
    });
}
function loadElections() {
    elections.forEach(function(position, i, array) {
        $("<h3/>", {
            text: electionsNames[i],
            class: "election "+position
        }).appendTo("#elections");
        $("<div/>", {
            class: "election "+position,
        }).appendTo("#elections");
        $("<ul/>", {
            id: position+"-list",
            class: "sortable"
        }).appendTo("div."+position);
        running[i].forEach(function(notoIndex, i, arrayp) {
            $("<li/>", {
                class: "ui-state-default",
                text: capitalize(notochords[notoIndex])
            }).appendTo("#"+position+"-list");
        });
    });
    $("<button/>", {
        text:"click me",
    }).appendTo("#elections")
    .click(function(e){
        
    });
}
window.onload = function() {
    $("#elections").hide();
    loadNotos();
    loadElections();
    elections.forEach(function(position, i, arr){
        $("#"+position+"-list").sortable();
		$("#"+position+"-list").disableSelection();
    });
    $("#password-back").click(function(){
        $("#password img").remove();
        $("#password").hide();
        $("#login").show();
    });
};
