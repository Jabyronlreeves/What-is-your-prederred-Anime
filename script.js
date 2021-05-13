let gallery = [];
$(".add").click(function() {
    let anime = $(".picture-url").val();
    gallery.push(anime);
    for (let gif of gallery) {
        $(".gallery").append("<img src=" + gif + ">");
        console.log(gif);
    }
});