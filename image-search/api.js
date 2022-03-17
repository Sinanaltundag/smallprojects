const searchForm = document.getElementById("search-form");
const searchInput = document.querySelector("[type=search]");
const category = document.querySelector("[class=form-select]");
const imageContainer = document.getElementById("image-container")


const fetchPhotos = async(page,categoryBefore, orderBefore)=>{
    let apiKey = "26174232-f956318e8a670396f67464227"
    let searchWords = searchInput.value.split(" ").join("+")
    let categoryValue = category.value
    const order = document.querySelector('input[name="order"]:checked');
    let orderValue = order.value
    let categoryStmt;
    if (categoryBefore) {
        categoryStmt =`&category=${categoryBefore}`
    } else {
        categoryStmt=(categoryValue)?`&category=${categoryValue}`:""
    }
    
    console.log(categoryStmt) 
let searchStmt = `https://pixabay.com/api/?key=${apiKey}&q=${searchWords}&image_type=photo&per_page=12&page=${page}&order=${orderValue}${categoryStmt}`
console.log(searchStmt)
// let nextPrevStmt= searchStmt
    try {
        const response = axios(searchStmt);
    console.log(response)
    const responseData = await response;
    console.log(responseData.data);
if (responseData.data.hits.length ==0) {
    throw new Error("There were no results")

} 
info(responseData.data.total+" result find","alert-success", 10)
imageContainer.innerHTML=""
responseData.data.hits.forEach(picture => {
    

const {id:picId,pageURL,tags,webformatURL,largeImageURL,likes}=  picture;
const photoCard = document.createElement("div")
photoCard.className="col"
photoCard.innerHTML=`<div class="card h-100 shadow-md">
  <a data-bs-toggle="modal" data-bs-target="#pic-id-${picId}">
  <img src=${webformatURL} alt=${tags} class="img-thumbnail  w-100">
</a>
<div class="card-body">
       
      </div>

<div class="card-footer">

    <div class="d-flex justify-content-around align-items-center gap-2">
        <a class="badge bg-info p-2" href=${pageURL} target="_blank" rel="noopener noreferrer">Go Pixabay</a>
        <a class="badge bg-info p-2" href="https://pixabay.com/images/download/sunflower-${picId}.jpg?attachment" target="_blank" rel="noopener noreferrer">Download HD</a>
      
      
      <small class="text-white badge bg-success p-2">❤Likes <span>${likes}</span></small>
    </div>
  </div>
</div>

<div class="modal fade" id="pic-id-${picId}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">${tags.toUpperCase()}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img class="img-fluid" src=${largeImageURL} alt=${tags}>
      </div>
      <div class="modal-footer position-absolute bottom-0">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>`

    imageContainer.append(photoCard)
});
imageContainer.innerHTML += `<div class="container text-center"><div class="btn-group " role="group" aria-label="Basic outlined example">
<button type="button" id="prev" class="btn btn-outline-primary mx-2">Previous Page</button>
<div class="btn">Page <span id="page">${page}</span></div>
<button type="button" id="next" class="btn btn-outline-primary mx-2">Next Page</button>
</div></div>`;
      let nextLink = document.querySelector("#next");
      let prevLink = document.querySelector("#prev");
      if (page<=1) {
          prevLink.disabled=true;
      }
      if (responseData.data.total<=page*12) {
        nextLink.disabled=true;
      }
      prevLink.addEventListener("click", () => {
        // page = +document.getElementById("page").textContent;
        fetchPhotos(page - 1, categoryValue, orderValue);
      });
      nextLink.addEventListener("click", () => {
        // page = +document.getElementById("page").textContent;
        fetchPhotos(page + 1, categoryValue, orderValue);
      });
    } catch (error) {
      info(error,"alert-warning", 4)
    }
    
}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    fetchPhotos(1)
})

const info = (msg,bsClass, durationSecond)=>{
    const result = document.createElement("div");
      result.className=`alert ${bsClass}`;
      result.setAttribute("role", "alert");
      result.innerText=msg;
      const alertDiv = document.getElementById("alert")
      alertDiv.appendChild(result)
      setTimeout(()=>{
        alertDiv.innerHTML=""
    },durationSecond*1000)
}