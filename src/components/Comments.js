const CommentsList = ({ comments }) => (
  <>
    <h3>Comments : </h3>
    {comments.map(comment=> (
      <>
        <div
          className="comment"
          key={comment.postBy + ": " + comment.text}
        ></div>
        <h4>{comment.postBy}</h4>
        <p>{comment.text}</p>
      </>
    ))}
  </>
);

export default CommentsList;