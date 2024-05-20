import { useState } from "react";

export default function UpdateBlog(){
    const [blogPostData, setBlogPostData] = useState({
        title:"",
        body : ""
    });
    console.log(blogPostData);

    return <div>
        <form action="" onSubmit={(e)=>{
            e.preventDefault();
            if(blogPostData.title && blogPostData.body){
                fetch("https://jsonplaceholder.typicode.com/posts",{
                    method:"post",
                    body:JSON.stringify({
                        userId:1,
                        title:blogPostData.title,
                        body:blogPostData.body,
                    }),
                    headers:{
                        'Content-type':'application/json; charset=UTF-8',
                    }
                }).then((response)=>{
                    response.json()
                }).then((data)=>{
                    console.log("Successfully created the Post !! ");
                    console.log(data);
                }).catch((err )=>{
                    console.log(err);
                })
            }
        }}>

            <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" value={blogPostData.title} onChange={(e)=>{
                setBlogPostData((currentBlogPostD)=>({...currentBlogPostD,title:e.target.value}));
            }} 
            />
            </div>

            <div>
            <label htmlFor="body">Body</label>
            <input type="text" id="body" value={blogPostData.body} onChange={(e)=>{
                setBlogPostData((currentBlogPostD)=>({...currentBlogPostD,body:e.target.value}));
            }} 
            />
            </div>
            <button>Create Post</button>
        </form>
    </div>
}