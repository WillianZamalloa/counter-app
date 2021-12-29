
export const getImagen = async() => {

    try {
        const apiKey = '6UpOT36kZmHRZctHIqj1fhfIBb8vs5eo';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 
        const { url } = data.images.original;
        
        return url;        

    } catch (error) {
        return 'no existe';
    }      
}





