$(document).ready( function()
{
    $('#search-key').on('keyup', function()
    {
        var word = $(this).val().toLowerCase();
        $('.search-job').filter( function()
        {
            $(this).toggle($(this).text().toLowerCase().indexOf(word)  > -1);
        })
    })
});


const numb = document.querySelector(".number");
let counter = 0;
setInterval(() => {
    if(counter == 100 )
    {
        clearInterval();
    }
    else
    {
        counter+=1;
        numb.textContent = counter + "%";
    }
}, 80);