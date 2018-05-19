var myItems = [

           {
			Title: "Dlan",
			type: "CD",
			Auther: "Bob Dylan",
			Genre: "rock",
			Minutes: 34 ,
			Image: "img/item1.jpg",
			Publisher:  "Columbia Records",
			SD: " Dylan is the 13th studio album by American singer-songwriter Bob Dylan, released on November 19, 1973 by Columbia Records. Compiled and issued by the label with no input from Dylan himself, it contains no original Dylan songs, the material consisting of two outtakes from Self Portrait and another seven from New Morning.It followed the artist's departure from Columbia for Asylum Records, and the announcement of his first major tour since 1966.",
			rating: 4
			 },

			 {
			Title: "City lights",
			type: "CD" ,
			Auther: " Charlie Chaplin",
			Genre: "romantic comedy",
			Minutes: 87 ,
			Image: "img/item2.jpg",
			Publisher:  "United Artists",
			SD: "City Lights is a 1931 American pre-Code silent romantic comedy film written, produced, directed by and starring Charlie Chaplin. The story follows the misadventures of Chaplin's Tramp as he falls in love with a blind girl (Virginia Cherrill) and develops a turbulent friendship with an alcoholic millionaire (Harry Myers).",
			rating: 3
			},
			

			{
			Title: "Lawrence of Arabia",
			type: "DVD" ,
			Auther: " T.E.Lawrencen",
			Genre: "historical drama",
			Minutes: 222 ,
			Image: "img/item3.jpg",
			Publisher:  "Columbia Pictures",
			SD: ",City Lights is a 1931 American pre-Code silent romantic comedy film written, produced, directed by and starring Charlie Chaplin. The story follows the misadventures of Chaplin's Tramp as he falls in love with a blind girl (Virginia Cherrill) and develops a turbulent friendship with an alcoholic millionaire (Harry Myers).",
			rating: 0
			},		

			{
			Title: "Diamond Life",
			type: "DVD" ,
			Auther: "Sade",
			Genre: "smooth soul",
			Minutes: 45 ,
			Image: "img/item4.jpg",
			Publisher:  "Columbia Records",
			SD: " Diamond Life is the debut studio album by English band Sade. It was first released in the United Kingdom on 16 July 1984 by Epic Records and in the United States on 27 February 1985 by Portrait Records. Diamond Life went on to sell over six million copies worldwide, becoming one of the top-selling debut recordings of the '80s and the best-selling debut by a British female vocalist",
			rating: 4
			},


			{
			Title: "Woodwalkers",
			type: "book" ,
			Auther: "Katja Brandis",
			Genre: "belletristik",
			Minutes: "1kg" ,
			Image: "img/item5.jpg",
			Publisher:  "Bilds",
			SD: "Auf den ersten Blick sieht Carag aus wie ein normaler Junge. Doch hinter seinen leuchtenden Augen verbirgt sich ein Geheimnis: Carag ist ein Gestaltwandler. Aufgewachsen als Berglöwe in den Wäldern lebt er erst seit Kurzem in der Menschenwelt. Das neue Leben ist für ihn so fremd wie faszinierend.",
			rating: 5
			},
			{
			Title: "Foundation",
			type: "book" ,
			Auther: "Isaac Asimov",
			Genre: " fantasy science fiction",
			Minutes: "2kg" ,
			Image: "img/item6.jpg",
			Publisher: "Heyne",
			SD: "Foundation is a science fiction novel by American writer Isaac Asimov. It is the first published in his Foundation Trilogy (later expanded into the Foundation Series). Foundation is a cycle of five interrelated short stories, first published as a single book by Gnome Press in 1951. Collectively they tell the story of the Foundation, an institute to preserve the best of galactic civilization after the collapse of the Galactic Empire.",
			rating: 2
			},


			{
			Title: "The Sandman",
			type: "comic" ,
			Auther: "Neil Gaiman",
			Genre: "fantasy",
			Image: "img/item7.jpg",
			Publisher: "Vertigo",
			SD: " The Sandman is a comic book series written by Neil Gaiman and published by DC Comics.   It tells the story of Dream of the Endless, who rules over the world of dreams. The original series ran for 75 issues from January 1989 to March 1996. The series is famous for Gaiman's trademark use of anthropomorphic personification of various metaphysical entities, while also blending mythology and history in its horror setting within the DC Universe." ,
			rating: 1
			},

			{
			Title: "Modesty Blaisen",
			type: "comic" ,
			Auther: " Peter O'Donnell",
			Genre: " mystery",
			Image: "img/item8.jpg",
			Publisher: "Titan Books",
			SD: " Modesty Blaise is a British comic strip featuring a fictional character of the same name, created by author Peter O'Donnell and illustrator Jim Holdaway in 1963. The strip follows Modesty Blaise, an exceptional young woman with many talents and a criminal past, and her trusty sidekick Willie Garvin.",
			rating: 1 	 
			}
] ;

var modal1 = ` <div class="modal fade" id="`
var modal2 = `" role="dialog">
   		        <div class="modal-dialog">
     	         <div class="modal-content">
                 <div class="modal-header">
                 <button type="button" class="close" data-dismiss="modal">&times;</button>
                 <h4 class="modal-title">Modal Header</h4>
               </div>
            <div class="modal-body">`
var modal3=`
          

            </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>`

 var k=0;
 
	for (var i=0; i < myItems.length ; i++ ){
		console.log('dlmx')
		document.getElementById("cont").innerHTML+=( "<div id=\"colu\" class=\" col-md-4 col-lg-4 col-sm-12 col-xs-12 col \" > <div data-toggle=\"modal\" data-target=\"#"+k+"\" id=\"stuff\" >"
			+ "<img src=\""+
			myItems[i].Image+"\" style =\"width:160px\"> "+" <br>" +
			myItems[i].Title+"<br>"+
			myItems[i].type+"<br>"+ 
			myItems[i].Auther+"<br>"+
			myItems[i].Genre+"<br>"+
			myItems[i].Publisher+"<br>"+
			"rating: "+myItems[i].rating+
			"<i class=\"glyphicon glyphicon-star\">"+"</i>"+
			"</div> </div>"
			+modal1+k+modal2+"<h1>"+
			myItems[i].Title+
			"</h1>"+"<p>"+myItems[i].SD+
			"</p>"+modal3);
k++
	};
	
var m=10; 

$(window).scroll(function () {
if ($(window).scrollTop() >= 1) {
$('.navbar').css('background','black').addClass("navbar-fixed-top");
} else {
$('.navbar').css('background','black').removeClass("navbar-fixed-top");
}
});

$("#bto").on("click", function(){
	document.getElementById("cont").innerHTML+=( "<div id=\"colu\" class=\" col-md-4 col-lg-4 col-sm-12 col-xs-12 col \" > <div data-toggle=\"modal\" data-target=\"#"+m+"\" id=\"stuff\" >"
			+ "<img src=\""+
			$("#image").val()+"\" style =\"width:160px\"> "+" <br>" +
			$("#title").val()+"<br>"+
			$("#type").val()+"<br>"+ 
			$("#author").val()+"<br>"+
			$("#genre").val()+"<br>"+
			$("#SD").val()+"<br>"+"Rating:"+
			$("#rating").val()+
			"<i class=\"glyphicon glyphicon-star\">"+
			"</i>"+"</div> </div>"+
			modal1+m+modal2+"<h1>"+
			$("#title").val()+"</h1>"+"<p>"+
			$("#SD").val()+"</p>"+modal3);
m++

});







