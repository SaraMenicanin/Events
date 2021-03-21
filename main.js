var moviesArray=[{
    img:"6underground.jpg",
    name:"6 underground"
},
{
    img:"castaway.jpg",
    name:"Cast Away" 
},
{
    img:"escaperoom.jpg",
    name:"Escape Room"
},
{
    img:"extraction.jpg",
    name:"Extraction"
},
{
    img:"friendswithbenefits.jpg",
    name:"Friends With Benefits"
},
{
    img:"JohnWick.jpg",
    name:"John Wick"
},
{
    img:"murdermystery.jpg",
    name:"Murder Mystery"
},
{
    img:"paperlives.jpg",
    name:"Paper Lives"
},
{
    img:"papillon.jpg",
    name:"Papillon"
},
{
    img:"shooter.jpg",
    name:"Shooter"
},
{
    img:"thetourist.jpg",
    name:"The tourist"
},
{
    img:"wonder.jpg",
    name:"Wonder" 
},
{
    img:"focus.jpg",
    name:"Focus" 
},
{
    img:"therite.jpg",
    name:"The rite" 
},

{
    img:"yesday.jpg",
    name:"Yes day" 
}
];

function addMovies(){
    moviesArray.forEach(function (art){
    var movies=document.querySelector('.movies');
    movies.appendChild(createMovies(art));
    });
};

function createMovies(moviesDate){
    var art=document.createElement('div');
    art.classList.add('moviesData')
var img='<img src="img/'+ moviesDate.img + '"alt=""/>';
var name='<div>'+ moviesDate.name +'<div>';
var remove='<button><img src="img/remove.jpg"></button>';
art.innerHTML=remove + img + name;
return art;
};
addMovies();

var searchBar=document.getElementById("input");
var btn=document.getElementById("button");
var home=document.getElementById("reload");
home.style.display="none";

btn.addEventListener('click',function(e){
    var term=searchBar.value.toLowerCase();
    var movies=document.getElementsByClassName('moviesData');
    var title=document.querySelectorAll('div.moviesData > div');
    for(var i=0; i<movies.length;i++){
        if(title[i].innerText.toLowerCase().includes(term)){
            movies[i].style.display="block";

        }else{
            movies[i].style.display="none";
        };
    };
    home.style.display="block";
    searchBar.value="";
});

function removeBtn(){
    var remove=document.querySelectorAll('div.moviesData > button');
    var i=0;
    for(var i=0;i<remove.length;i++){
        remove[i].addEventListener('click',function(e){
             var mov=document.getElementsByClassName('moviesData');
             e.path[2].style.display="none";
             home.style.display="block;"
        })
    };
};
removeBtn();
