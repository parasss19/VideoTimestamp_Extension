// Here I used Immediately Invoked Function Expression (IIFE) that encapsulates logic related to handling messages sent from a background.js script
(()=>{
    let youtubeLeftControls, youtubePlayer;
    let currentVideo = "";     //string variable initialized to an empty string,used to store the ID of the currently loaded video.

    //to listen msg from background.js
    chrome.runtime.onMessage.addListener((obj, sender, response)=>{
      const{type, value, videoId} = obj;   //extracts type, value, and videoId from the obj(message object).
      
      //If type == "NEW",means a new video has been loaded.
      if(type == "NEW"){
        currentVideo = videoId;   //currentVideo variable is updated to the videoId from the message.
        newVideoLoaded();         //
      }
    })


})()