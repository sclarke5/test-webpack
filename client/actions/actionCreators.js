// increment likes
export function increment(index){
  return {
    type: 'INCREMENT_LIKES',
    index: index
  }
}

// add comment
export function addComment(postId, author, comment){
  return {
    type: 'ADD_COMMENT',
    postId: postId,
    author,
    comment 
    // includes both more explicit vs. ES6-style; equivalent
  }
}

// remove comment
export function removeComment(postId, i){
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i
  }
}