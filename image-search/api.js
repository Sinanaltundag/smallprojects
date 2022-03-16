const searchForm = document.getElementById("search-form");


const fetchPhotos = async()=>{

    try {
        const response = axios("https://pixabay.com/api/?key=26174232-f956318e8a670396f67464227&q=yellow+flowers&image_type=photo&pretty=true&per_page=3&category=backgrounds");
    console.log(response)
    const responseData = await response;
    console.log(responseData.data);
    
    } catch (error) {
        
    }
    
}
fetchPhotos()