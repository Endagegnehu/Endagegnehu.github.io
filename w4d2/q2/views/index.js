$(function(){
    $("form").submit((ev)=>{
        ev.preventDefault();
        $.get("/answer").done((res)=>{
            $("input[type=text]").val(res);
        })
        .fail(()=>{
            $("input[type=text]").val("Something went wrong!");
        });
    });
});