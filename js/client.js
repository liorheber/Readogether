function getBook() {
    $.ajax({
        type: "GET",
        url: "bin/Server.php?action=getText",
        dataType: "json",
        success: function(data) {
            text = data;
            var i;
            var j;
            var t = 0;
            for (i = 0; i < text.length; i++) {
                for (j = 0; j < text[i].length; j++) {
                    $("#book").append('<a class="text" data-message="' + t + '">');
                    $("#book").append(text[i][j]);
                    $("#book").append(" </a>");
                    t++;
                }
                $("#book").append("<br />");
                $("#log-in").css("display", "none");
            }
        }
    });
}

function getCurrentWord() {
    $.ajax({
        type: "GET",
        url: "bin/Server.php?action=currentWord",
        dataType: "json",
        success: function(data) {
            currentWord = data;
        }
    });
}

function addUser() {
    var name = $("#name").val();
    if (name === "") {
        alert("אנא הכנס שם");
    } else {
        $.ajax({
            type: "GET",
            url: "bin/Server.php?action=connect&name=" + name,
            dataType: "json",
            success: function(data) {
                userList = data;
                getBook();
                getCurrentWord();
            }
        });
    }
}