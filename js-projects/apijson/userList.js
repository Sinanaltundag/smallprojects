const tbody = document.getElementById("tbodyUserList");
const loading = document.getElementById("loading");
let page = 1;
window.onload = () => {
  // alert(`Your api key : ${DecryptStringAES(localStorage.getItem("apiKey"))}`)
  getApiUserList(1);
  // setInterval(getApiUserList,5000)
  //   linkResp();
  //   makeLink();
};

const getApiUserList = async (page) => {
  showLoading();
  // axios
  try {
    // const responseData = await axios("https://reqres.in/api/users?page=1")
    const responseData = await axios({
      url: `https://reqres.in/api/users?page=${page}`,
      method: "get",
      // data:bodyData
    });
    console.log(responseData);
    const { data: userListArray } = responseData.data;
    if (userListArray.length == 0) {
      alert("Userlist not found");
      removeLoading();
    } else {
      tbody.innerHTML = "";
      userListArray.forEach((customer) => {
        tbody.innerHTML += `<tr>
        <td>
            ${customer.id}
        </td>
        <td>
            <img src="${customer.avatar}">
        </td>
        <td>
            ${customer.email}
        </td>
        <td>
            ${customer.first_name}
        </td>
        <td>
            ${customer.last_name}
        </td>
</tr>`;
      });
      tbody.innerHTML += `<tr><td></td><td><button id="prev"><=Previous Page</button></td><td>Page <span id="page">${page}</span></td><td></td><td><button id="next">Next Page =></button></td></tr>`;
      removeLoading();
      let prevNextLinks = document.querySelectorAll("table button");
      if (page<=1) {
          prevNextLinks[0].disabled=true;
      }
      prevNextLinks[1].addEventListener("click", () => {
        page = +document.getElementById("page").textContent;
        getApiUserList(page + 1);
      });
      prevNextLinks[0].addEventListener("click", () => {
        page = +document.getElementById("page").textContent;
        getApiUserList(page - 1);
      });
    }
    removeLoading();
  } catch (error) {
    alert(error);
    // postErrorLog("userList", "getApiUserList", error)
    removeLoading();
  }
};
/* const linkResp = async () => {
  const prevNextLinks = await getApiUserList(page);

  // console.log(nextLink[1]+1)
  //const makeLink = ()=>{
  return prevNextLinks;
};
const makeLink = async () => {
  console.log("first");
  const prevNextLinks = await linkResp();
  prevNextLinks[1].addEventListener("click", () => {
    page = +document.getElementById("page").textContent;
    console.log(page);
    getApiUserList(page + 1);
    // makeLink();
  });
  prevNextLinks[0].addEventListener("click", () => {
    page = +document.getElementById("page").textContent;
    getApiUserList(page-1);
    makeLink();
  });
};
 */
