
let songIndex=0;
var audioElement=new Audio('songs/1.mp3');
//let document.getElementById('masterPlay')=document.getElementById('document.getElementById('masterPlay')');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById("masterSongName");
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
       
        { songName : "1", filePath : "songs/1.mp3", coverPath : "cover1/1.jpeg" },
        { songName : "2", filePath : "songs/2.mp3", coverPath : "cover1/2.jpeg" },
        { songName : "S3", filePath : "songs/3.mp3", coverPath : "cover1/3.jpeg" },
        { songName : "S4", filePath : "songs/4.mp3", coverPath : "cover1/4.jpeg" },
        { songName : "5", filePath : "songs/5.mp3", coverPath : "cover1/5.jpeg" },
        { songName : "6", filePath : "songs/6.mp3", coverPath : "cover1/6.jpeg" },
        { songName : "7", filePath : "songs/7.mp3", coverPath : "cover1/7.jpeg" },
        { songName : "8", filePath : "songs/8.mp3", coverPath : "cover1/8.jpeg" },
        { songName : "9", filePath : "songs/9.mp3", coverPath : "cover1/9.jpeg" },
    
    
]
// songItems.forEach((element,i) => {
  //   console.log(element,i);
//      element.getElementByTagName("img")[0].src=songs[i].coverPath;
   //element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
  //})
 document.getElementById('masterPlay').addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
                 document.getElementById('masterPlay').classList.remove('fa-circle-play');
         document.getElementById('masterPlay').classList.add('fa-circle-pause');
         gif.style.opacity=1;
     }
    else{
        audioElement.pause();
        document.getElementById('masterPlay').classList.remove('fa-circle-pause');
        document.getElementById('masterPlay').classList.add('fa-circle-play');
        gif.style.opacity=1;

    }
 })

audioElement.addEventListener('timeupdate',()=>{
     console.log('timeUpdate');
     progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
     myProgressBar.value=progress;
 })

myProgressBar.addEventListener('change',()=>{
     audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
 })
 const makeAllPlays= ()=> {
    
     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
         element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

     })
 }



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.addEventListener('click',(e)=>{
      console.log(e.target);
     makeAllPlays();
      
      songIndex=parseInt(e.target.id);
       e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause');
    //    audioElement.src='songs/${songIndex+1}.mp3';
          let x=songIndex+1;
           console.log(x);
        //audioElement.src='${songIndex}.mp3';
      //  audioElement=new Audio('x.mp3');
      var url=songs[songIndex+1].filePath;
    //   audioElement=new Audio(url);
      audioElement.src=url;
      masterSongName.innerText=songs[songIndex].songName;
      audioElement.currentTime=0;
      audioElement.play();
      gif.style.opacity=1;
      document.getElementById('masterPlay').classList.remove('fa-circle-play');
      document.getElementById('masterPlay').classList.add('fa-circle-pause');

    })

})
 document.getElementById('next').addEventListener('click',()=>{
     if(songIndex>=8){
         songIndex=0;
    }
    else{
        songIndex+=1;
    }
    //audioElement.src='songs/x.mp3';
    var url=songs[songIndex+1].filePath;
    audioElement.src=url;
    // audioElement=new Audio(url);
     masterSongName.innerText=songs[songIndex].songName;
       audioElement.currentTime=0;
       audioElement.play();
       gif.style.opacity=1;
           document.getElementById('masterPlay').classList.remove('fa-circle-play');
       document.getElementById('masterPlay').classList.add('fa-circle-pause');
    
 })

 document.getElementById('previous').addEventListener('click',()=>{
     if(songIndex <= 0){
         songIndex=0;
     }
     else{
         songIndex -= 1;
     }
     //audioElement.src='songs/${songIndex+1}.mp3';
     var url=songs[songIndex+1].filePath;
    // audioElement=new Audio(url);
    audioElement.src=url;
     masterSongName.innerText=songs[songIndex].songName;
       audioElement.currentTime=0;
       audioElement.play();
       gif.style.opacity=1;
       document.getElementById('masterPlay').classList.remove('fa-circle-play');
       document.getElementById('masterPlay').classList.add('fa-circle-pause');
    
 })

 