$(()=>{
    $("#country").on('click',()=>{
        let country = $("country").val();
    $.get('/stateProvence',{
       "country": country 
    }).done((data)=>{
        data = JSON.parse(data);
        $("state > option").remove();
        for (const key in data) {
            $("#state").append(`<option>${key}</option>`);
        }
    });
    });
})

