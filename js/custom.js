$(document).ready(function(){
    $('.selectpicker').selectpicker();


    $(".search-form .btn").click(function(){
        $(".searchdiv").toggleClass("active");
    });
    $(".hemburger").click(function(){
        $(".filters-menu").toggleClass("active");
    });

    // toggle js filter
    $('.filter.dropdown-toggle').click(function(){
        $(this).siblings('.filter-menu').toggleClass('show');
    });


    // file upload js
    if (window.File && window.FileList && window.FileReader) {
        $("#files").on("change", function(e) {
        var files = e.target.files,
            filesLength = files.length;
        for (var i = 0; i < filesLength; i++) {
            var f = files[i]
            var fileReader = new FileReader();
            fileReader.onload = (function(e) {
            var file = e.target;
            $("<div class=\"pip\">" +
                " <img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
                "<span class=\"name-file\">" + e.target.value +"</span>"+
                "<input type=\"text\" placeholder=\"Agenda 1\" class=\"agenda\" />"+
                "<i class=\"remove fa fa-plus\"></i>" +
                "</div>").insertAfter("#files");
  
                $(".remove").click(function(){
                    $(this).parent(".pip").remove();
                    $('#files').val("");
                });
            });
            fileReader.readAsDataURL(f);
        }
        });
    } else {
        alert("Your browser doesn't support to File API")
    }


    // approve success js
    $(".approve-success").hide();
    $(".approve-rejected").hide();

    $(".approve").click(function(){
        $(".successbefore").hide();
        $(".approve-success").show();
    });

    $(".warning").click(function(){
        $(".successbefore").hide();
        $(".approve-rejected").show();
    });

    $(".rejectafter").hide();
    $(".rejectsubmit").click(function(){
        $(".rejectbefore").hide();
        $(".rejectafter").show();
    });



    // filter by event js
    function filterByEvent() {
        $('.d-events .d-tape-event').css('opacity','0');
        $('.card-body .event-checkbox input:checked').each(function() {
            var checkedInput = $(this).val();
            $(`.d-events .d-tape-event.${checkedInput}`).css('opacity','1');
        });
    }

    $(window).on('click mouseover touchstart mousewheel',function() {
        if ($('.card-body .event-checkbox input:checked').length > 0) {
            filterByEvent()
        }else{
            $('.d-events .d-tape-event').css('opacity','1');
        }
    });

    $(document).on('click','#clearall',function(){
        $('.card-body .event-checkbox input').prop('checked', false);
        $('.d-events .d-tape-event').css('opacity','1');
    });

});