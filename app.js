console.log("Welcome to Spotify");

//Intialize the Variable
let songIndex=0;
let audioElement=new Audio(`dynamite.mp3`);
//let audioElement=new Audio(`butter.mp3`);
//let audioElement=new Audio(`filter.mp3`);//
//let audioElement=new Audio(`myUniverse.mp3`);
//let audioElement=new Audio(`Permission_to_dance.mp3`);
//let audioElement=new Audio(`staygold.mp3`);
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let mastersongName= document.getElementById('mastersongName')
let gif= document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));

let song=[
    {songName:"Dynamite" ,filePath:"dynamite.mp3",coverPath:"dynamite.jpg"},
    {songName:"My Universe" ,filePath:"myUniverse.mp3",coverPath:"myuniverse.jpg"},
    {songName:"Butter" ,filePath:"butter.mp3",coverPath:"butter.jpg"},
    {songName:"Permission to Dance" ,filePath:"Permission_to_dance.mp3",coverPath:"dance.jpg"},
    {songName:"Filter" ,filePath:"filter.mp3",coverPath:"cover/filter.jpg"},
    {songName:"Stay Gold" ,filePath:"staygold.mp3",coverPath:"cover/staygold.jpg"},
    
]

/*songItem.forEach((element,i)=>{
    console.log(element,i);
    console.getElementById("img")[0].src=song[i].coverPath;
    console.getElementsByClassName("songName")[0].innerText = song[i].songName;
})*/

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value* audioElement.duration/100;
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playsong')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('playsong')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex =parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src =`dynamite.mp3`;
        audioElement.src =`butter.mp3`;
        audioElement.src =`dynamite.mp3`;
        audioElement.src =`dynamite.mp3`;
        audioElement.src =`dynamite.mp3`;
        audioElement.src =`dynamite.mp3`;
        mastersongName.innerText = song[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        //gif.style.opacity =1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
    songIndex +=1;
    }
    audioElement.src =`dynamite.mp3`;
    audioElement.src =`butter.mp3`;
    mastersongName.innerText = song[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle')
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
    songIndex -=1;
    }
    audioElement.src =`dynamite.mp3`;
    audioElement.src =`butter.mp3`;
    mastersongName.innerText = song[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})