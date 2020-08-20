let song;
let playSong;


// Function to get Song info when image is clicked
/**
 * @param img_index
 * @param item_index
 * @param JS_Event
 * 
 * Function gets song from spotify using the image index of our gallery.
 * Then finds the correct item_index inside of the JSON data to produce the preview_URL
 */

 async function clickedEvent(img_index,item_index,event){
     let track = document.getElementsByTagName('img')[img_index].attributes[2].value

     let headers = new Headers([
         ['Content-Type', 'application/json'],
         ['Accept', 'application/json'],
         ['Authorization', 'Bearer BQDNp1_hMDgf3vDX-vQccEOAGWOBgmbql_OKysenmU4f-BI8FUqw4XUxbjSRaZ9mEyCdhq98evy4PebfJmPpAHEEWhbwR1N1zV6COeChhwUBFX75zL9OlgsmTpWJNt9JOkrUgVeh1keuSwVQMz9tmpcLCp7qCXs']
     ])

     let request = new Request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=15`, {
         method:'GET',
         headers: headers
     })

     await fetch(request)
     .then((response) => response.json())
     .then((rawData) => {
         console.log(rawData)
         song = rawData.tracks.items[item_index].preview_url
     })
     songSnippet(song)
 }

 // Get Song based on Clicked Image

 /**
  * @param id
  * @param event
  * 
  * ID = image id for gallery image
  * event = Mouse Event given by action from user
  * 
  * Function produces songs from the clickedEvent based on index of image.
  */

  function getSong(id,event){
      switch(id){
          case 'fig1': {
              event.stopPropagation()
              clickedEvent(0,3)
              break;
          }
          case 'fig2':{
              event.stopPropagation()
              clickedEvent(1,3)
              break;
          }
          case 'fig3': {
              event.stopPropagation()
              clickedEvent(2,0)
              break;
          }
          case 'fig4': {
              event.stopPropagation()
              clickedEvent(3,4)
              break;
          }
          case 'fig5': {
              event.stopPropagation()
              clickedEvent(4,0)
              break;
          }
          case 'fig6': {
              event.stopPropagation()
              clickedEvent(5,1)
              break;
          }
      }
  }

  // Function to play song from preview URL
  /**
   * @param url
   * 
   * url = Song preview url
   * 
   * Function will return an audio clip given by the preview url
   */

   function songSnippet(url){
       playSong = new Audio(url)
       return playSong.play()
   }

   // Function to stop song snippet
   /**
    * NO PARAMS
    * 
    * Function returns event to stop song snippet
    */

    function stopSnippet(){
        return playSong.pause();
    }