
export const getGifs = async( categoria ) =>{

    const url=`https://api.giphy.com/v1/gifs/search?q=${ encodeURI( categoria ) }&limit=10&api_key=cmw1sbvlkYKwIxO6ltstZNMdNnkh4Hcm`
    const repuesta= await fetch(url);
    const { data } = await repuesta.json();
    
    const infoGif = data.map( img => {
      return{
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })
   
    return infoGif;
}
//getGifs();