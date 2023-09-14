import "./styles.css";

const useStateReviewItem = (props) => {
  const { eachReview, deleteReview } = props;
  const { id, name, title, reviewContent } = eachReview;

  const onDeleteReview = () => {
    deleteReview(id);
  };

  return (
    <>
      <ul className="review-list-container" key={id}>
        <li>Name: {name}</li>
        <li>Title: {title}</li>
        <li>Review: {reviewContent}</li>
      </ul>
      <button type="button" onClick={onDeleteReview}>
        Delete
      </button>
      <hr />
    </>
  );
};

export default useStateReviewItem;
