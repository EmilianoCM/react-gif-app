

export const getGifs = async( categoria ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit10&api_key=IfCJldXO1ZKvydj4t1icDEGU4SCfrpgz`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}