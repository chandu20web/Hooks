import { useState, useRef} from "react";
import { v4 as uuidv4 } from "uuid";
import UseStateReviewItem from "./useStateReviewItem";

const initialList = [
  {
    id: "9876uy987yuio9876tyui",
    name: "Chandu",
    title: "RRR",
    reviewContent:
      "RRR (2022) is a very impressive movie, somewhat based on real events. But knowing nothing about real events i simply found this movie to be highly stylized and over the top action adventure movie. Its like John Wick meets Rambo and Braveheart in India - and I'm kidding you not.",
  },
  {
    id: "poiuyu234543234oiuyty",
    name: "Rahul",
    title: "RRR",
    reviewContent:
      "SO long story short, word of mouth happened and more and more people including myself heard about this movie and here we are.It's about friendship and honor and wants and well everything Star Wars Prequels should have been. It's everything Marvel should have been.This movie is about 2 men, super human, some suspension of belief needs to be had. View it as a super hero movie and it delivers",
  },
];

const UseStateReviews = () => {
  // const initialObj = {
  //   name: "",
  //   title: "",
  //   reviewContent: "",
  //   reviewsList: initialList,
  // };

  const [review, setReview] = useState(initialList);
  const name = useRef();
  const title = useRef();
  const reviewContent = useRef();

  // const onChangeInputField = (event, name) => {
  //   switch (name) {
  //     case "name":
  //       setReview((prevData) => ({
  //         ...prevData,
  //         name: event.target.value,
  //       }));
  //       break;
  //     case "title":
  //       setReview((prevData) => ({
  //         ...prevData,
  //         title: event.target.value,
  //       }));
  //       break;
  //     case "reviewContent":
  //       setReview((prevData) => ({
  //         ...prevData,
  //         reviewContent: event.target.value,
  //       }));
  //       break;
  //     default:
  //       return null;
  //   }
  // };

  const onSubmitReviews = (event) => {
    event.preventDefault();

    const reviewDetails = {
      id: uuidv4(),
      name: name.current.value,
      title: title.current.value,
      reviewContent: reviewContent.current.value,
    };

    setReview((prevState) => [...prevState, reviewDetails]);

    // setReview((prevState) => ({
    //   ...prevState, // unpack total object
    //   reviewsList: [...prevState.reviewsList, reviewDetails], // unpack list and append new data
    // }));

    // Error ...while list state is defined one obj key
    // setReview((prevState) => ({
    //   ...prevState,
    //   reviewsList: reviewDetails,
    // }));
  };

  const renderReviewsForm = () => {
    return (
      <form onSubmit={onSubmitReviews}>
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Please Enter Name"
            // value={review.name}
            // onChange={(e) => onChangeInputField(e, "name")}
            ref={name}
          />
        </div>

        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Please Enter Title"
            // value={review.title}
            // onChange={(e) => onChangeInputField(e, "title")}
            ref={title}
          />
        </div>

        <div className="input-container">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="reviewContent"
            placeholder="Write Content Here !!"
            // value={review.reviewContent}
            // onChange={(e) => onChangeInputField(e, "reviewContent")}
            ref={reviewContent}
            rows="4"
            cols="40"
          ></textarea>
        </div>

        <button type="submit">Add</button>
      </form>
    );
  };

  const deleteReview = (id) => {
    const filteredList = review.filter((eachItem) => {
      return eachItem.id !== id;
    });

    setReview(filteredList);
  };

  return (
    <div className="reviews-container">
      <h1>Post Your Reviews</h1>
      <div>{renderReviewsForm()}</div>
      <div>
        {review.map((each) => (
          <UseStateReviewItem
            key={each.id}
            eachReview={each}
            deleteReview={deleteReview}
          />
        ))}
      </div>
    </div>
  );
};

export default UseStateReviews;
