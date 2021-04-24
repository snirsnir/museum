
(function ($) {
    "use strict";

    // Loader
    $(function () {
        var loader = function () {
            setTimeout(function () {
                if ($('#loader').length > 0) {
                    $('#loader').removeClass('show');
                }
            }, 1);
        };
        loader();
    });

    // Auto Init 
    M.AutoInit();

})(jQuery);

// Play Music
function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}
var subject = GetURLParameter('subject');

var subjectHtml = document.getElementById("title")
var descriptionHtml = document.getElementById("description")
var firebaseRef = firebase.database().ref();
		firebaseRef.on('value', function(snapshot) {
	subjectHtml.innerHTML = snapshot.child(subject).child("subject").val();
	descriptionHtml.innerHTML = snapshot.child(subject).child("description").val();
		})


