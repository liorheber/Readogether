$(document).ready(function() {  
    
    // Will be 0, for testing purposes is 2
    var currentWord = 2;
    
    // Disable scrolling so the touch gestures will work good
    document.ontouchstart = function(e){ 
        e.preventDefault(); 
    }
    document.ontouchmove = function(e){ 
        e.preventDefault(); 
    }
    
    // The swipe on word effect that will call the server with an update on the current word
    $('.text').hammer().on('touch', function(){
        // Add Check if user is the reader
        
        // Save the current word that is being pressed
        currentWord = $(this).data('message');
        
        // Send to server the new current word
        $.ajax({
            type: "POST",
            url: "Server.php",
            data: currentWord,
        })
        
        // Color the word with animation
        $(this).animate({'color': '#6633FF'}, 1000);
    });
    
    function updateCurrentWord() {
        $.ajax({
            type: "POST",
            url: "Server.php",
            success: function(data){
                currentWord = data;
                // The coloring effect when getting a response from the server on the current word
                $('.text').each(function() {
                    // Check if this is a word already been read, if so color it with animation
                    if ($(this).data('message') < currentWord) {
                        $(this).animate({'color': '#6633FF'}, 1000);
                    }
                });
                setTimeout(updateCurrentWord, 1000);
            },
            error: function(){
                setTimeout(updateCurrentWord, 1000);
            }
        })
    };
    

});