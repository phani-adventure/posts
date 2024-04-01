const postsList=document.getElementById('postsList')
const url='https://jsonplaceholder.typicode.com/posts'
async function fetchData(url){
    try{
        const response=await fetch(url);
        if(!response.ok)
        {
            throw new Error('failed to fetch')
        }
        const data=await response.json();
        console.log(data);
        if(data.length==0)
        {
            postsList.innerHTML=`<b>No Posts are found</b>`
        }
        data.forEach(function(lists){
        const postList=document.createElement('li');
        postList.classList.add('eachlist');
        postList.innerHTML=`<h2>${lists.title}</h2>
                                  <p>${lists.body}</p>`
        postsList.appendChild(postList);
        })
        
}
catch(error)
        {
            console.log('Error is:'+error)
        }
            
}
fetchData(url);