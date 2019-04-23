let posts = []

db.any('SELECT p.postid,p.title,p.body,c.title as "commentTitle", c.commentid FROM posts p JOIN comments c ON p.postid = c.postid').then((result) => {

  console.log(result)

    result.forEach((item) => {

        if(posts.length == 0) {
          let post = new Post(item.title,item.body,item.postid)
          let comment = new Comment(item.commentTitle,item.commentid)
          //post.comments.push(comment) THIS WILL WORK TOO
          post.addComment(comment)
          posts.push(post)
        } else {
          // find the post in the posts array with the postid
          let existingPost = posts.find((post) => post.postId == item.postid)
          if(existingPost) {
            // add the comment to the existing post
            let comment = new Comment(item.commentTitle,item.commentid)
            existingPost.addComment(comment)
          } else {
            let post = new Post(item.title,item.body,item.postid)
            let comment = new Comment(item.commentTitle,item.commentid)
            //post.comments.push(comment) THIS WILL WORK TOO
            post.addComment(comment)
            posts.push(post)
          }

        }

    })


// FROM
// customer
// INNER JOIN payment ON payment.customer_id = customer.customer_id
// INNER JOIN staff ON payment.staff_id = staff.staff_id;



let posts = []

db.any('SELECT p.postid,p.title,p.body,c.title as "commentTitle", c.commentid FROM posts p JOIN comments c ON p.postid = c.postid WHERE p.postid = 6').then((result) => {

    console.log(result)

    let post = new Post(result[0].title,result[0].body,result[0].postid)
    post.comments = result.map((comment => {
      return { commentTitle: comment.commentTitle, commentId: comment.commentid }
    }))

    console.log(post)


})