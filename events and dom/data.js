let users=[{"id":1,"name":"Wisker","email":"mwisker0@abc.net.au","gender":"Female"},
    {"id":2,"name":"Picard","email":"apicard1@spiegel.de","gender":"Male"},
    {"id":3,"name":"Maddin","email":"mmaddin2@last.fm","gender":"Male"},
    {"id":4,"name":"Brum","email":"kbrum3@seesaa.net","gender":"Female"},
    {"id":5,"name":"Webley","email":"lwebley4@auda.org.au","gender":"Female"},
    {"id":6,"name":"Storrah","email":"mstorrah5@youku.com","gender":"Male"},
    {"id":7,"name":"Rathe","email":"jrathe6@ibm.com","gender":"Female"},
    {"id":8,"name":"Jallin","email":"wjallin7@gizmodo.com","gender":"Non-binary"},
    {"id":9,"name":"Byrcher","email":"rbyrcher8@ustream.tv","gender":"Female"},
    {"id":10,"name":"Borles","email":"mborles9@si.edu","gender":"Male"},
    {"id":11,"name":"Standen","email":"sstandena@ning.com","gender":"Female"},
    {"id":12,"name":"Dyball","email":"ndyballb@ox.ac.uk","gender":"Female"},
    {"id":13,"name":"Nucator","email":"cnucatorc@cam.ac.uk","gender":"Female"},
    {"id":14,"name":"Twidell","email":"jtwidelld@seattletimes.com","gender":"Male"},
    {"id":15,"name":"Reavell","email":"dreavelle@digg.com","gender":"Male"},
    {"id":16,"name":"Southcoat","email":"fsouthcoatf@fastcompany.com","gender":"Female"},
    {"id":17,"name":"Isley","email":"gisleyg@tumblr.com","gender":"Female"},
    {"id":18,"name":"Fardon","email":"bfardonh@illinois.edu","gender":"Female"},
    {"id":19,"name":"Benck","email":"gbencki@networkadvertising.org","gender":"Male"},
    {"id":20,"name":"Cuphus","email":"ccuphusj@tripod.com","gender":"Female"},
    {"id":21,"name":"Bineham","email":"abinehamk@geocities.jp","gender":"Bigender"},
    {"id":22,"name":"Screeton","email":"cscreetonl@phpbb.com","gender":"Male"},
    {"id":23,"name":"Kerrey","email":"ikerreym@com.com","gender":"Female"},
    {"id":24,"name":"Kelner","email":"gkelnern@msn.com","gender":"Female"},
    {"id":25,"name":"Leele","email":"vleeleo@ftc.gov","gender":"Male"},
    {"id":26,"name":"Glanton","email":"cglantonp@webmd.com","gender":"Female"},
    {"id":27,"name":"Bolver","email":"cbolverq@comcast.net","gender":"Agender"},
    {"id":28,"name":"Giacometti","email":"mgiacomettir@about.me","gender":"Male"},
    {"id":29,"name":"Tweed","email":"btweeds@census.gov","gender":"Male"},
    {"id":30,"name":"Eddowis","email":"beddowist@marriott.com","gender":"Female"},
    {"id":31,"name":"Rubery","email":"wruberyu@uiuc.edu","gender":"Male"},
    {"id":32,"name":"Meddows","email":"gmeddowsv@google.nl","gender":"Female"},
    {"id":33,"name":"Crampsy","email":"pcrampsyw@spiegel.de","gender":"Female"},
    {"id":34,"name":"Lory","email":"uloryx@cocolog-nifty.com","gender":"Bigender"},
    {"id":35,"name":"Dayne","email":"mdayney@blogs.com","gender":"Male"},
    {"id":36,"name":"Haydney","email":"chaydneyz@wikispaces.com","gender":"Female"},
    {"id":37,"name":"Staziker","email":"mstaziker10@spotify.com","gender":"Male"},
    {"id":38,"name":"Cherry Holme","email":"ccherryholme11@cpanel.net","gender":"Male"},
    {"id":39,"name":"Bachman","email":"dbachman12@prnewswire.com","gender":"Female"},
    {"id":40,"name":"Guiduzzi","email":"hguiduzzi13@state.gov","gender":"Female"},
    {"id":41,"name":"Maybery","email":"rmaybery14@abc.net.au","gender":"Female"},
    {"id":42,"name":"Cowgill","email":"ecowgill15@accuweather.com","gender":"Female"},
    {"id":43,"name":"Caramuscia","email":"ccaramuscia16@yelp.com","gender":"Female"},
    {"id":44,"name":"Cowing","email":"icowing17@furl.net","gender":"Female"},
    {"id":45,"name":"Peddersen","email":"speddersen18@dmoz.org","gender":"Male"},
    {"id":46,"name":"Fearnyough","email":"ofearnyough19@cpanel.net","gender":"Female"},
    {"id":47,"name":"Ingry","email":"aingry1a@cbc.ca","gender":"Female"},
    {"id":48,"name":"Syvret","email":"msyvret1b@soup.io","gender":"Male"},
    {"id":49,"name":"Studeart","email":"fstudeart1c@ibm.com","gender":"Genderfluid"},
    {"id":50,"name":"Bernardotti","email":"mbernardotti1d@illinois.edu","gender":"Male"}
]
function display_user_Data(){
    alert('test case 123')
    let row=""
    for(let i=0;i<=users.length-1;i++){
        if(users[i].gender==="male"){
            row=rows+`<tr>
            <td>${users[i].id}</td
            <td>${users[i].name}</td
            <td>${users[i].email}</td
            <td>${users[i].gender}</td`
        }
    }
    document.getElementsByTagName('tbody')[0].innerHTML=rows
}