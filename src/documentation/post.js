const listAllPosts = {
    tags:['Post'],
    description:"List all Post",
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const getPostById = {
    tags:['Post'],
    description:"Get post by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the post",
            type:"string",
            example:"63caaf3527b29e1d399896da"
        }
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const createPost = {
    tags:['Post'],
    description:"Create a post",
    security: [
        {
          token: [],
        },
    ],
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:"object",
                    properties:{
                        title:{
                            type:"string",
                        },
                        desc:{
                            type:"string",
                        },
                        image:{
                            type:"file",
                            description:"the image of the post"
                        }
                    }
                }
            }
        }
    },
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"success",
                        data:[]
                    }
                }
            }
        }
    }
}

const deletePost = {
    tags:['Post'],
    description:"Delete the post by id",
    security: [
        {
          token: [],
        },
    ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the post",
            type:"string"
        }
    ],

    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const updatePost = {
    tags:['Post'],
    description:"Update a post",
    security: [
        {
          token: [],
        },
    ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the post",
            type:"string"
        }
    ],
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:"object",
                    properties:{
                        title:{
                            type:"string",
                        },
                        description:{
                            type:"string",
                        },
                        image:{
                            type:"file",
                            description:"the image of the post"
                        }
                    }
                }
            }
        }
    },
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"success",
                        data:[]
                    }
                }
            }
        }
    }

}
const Likes={
    tags:['Post'],
    description:"likes post ",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the post",
            type:"string"
        }
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"success",
                        data:[]
                    }
                }
            }
        }
    }

}
const unLikes={
        tags:['Post'],
        description:"unLikes post ",
        parameters:[
            {
                name:"id",
                in:"path",
                description:"id of the post",
                type:"string"
            }
        ],
        responses:{
            200:{
                description:"OK",
                content:{
                    "application/json":{
                        type:"object",
                        example:{
                            status:"success",
                            data:[]
                        }
                    }
                }
            }
        }
    
    }
    const createcomment={
        tags:['Post'],
    description:"create comment",
    security: [
        {
          token: [],
        },
    ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the post",
            type:"string"
        }
    ],
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        comment:{
                            type:"string",
                        }
                       
                    }
                }
            }
        }
    },
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"success",
                        data:[]
                    }
                }
            }
        }
    }

    }
exports.postRouteDocs = {
    "/api/posts":{
        post:createPost
    },
    "/api/posts/getAll":{
        get:listAllPosts
    },
    "/api/posts/get/{id}":{
        get:getPostById
    },
    "/api/posts/delete/{id}":{
        delete:deletePost
    },
    "/api/posts/update/{id}":{
        patch:updatePost
    },
   "/api/posts/likes/{id}":{
      post:Likes
   },
   "/api/posts/unlikes/{id}":{
     post:unLikes
   },
   "/api/comments/create/{id}":{
     post:createcomment
   }
   
}