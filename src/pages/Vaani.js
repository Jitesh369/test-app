import './Vaani.css'
import * as React from "https://cdn.skypack.dev/react@17.0.1";
import pic1 from '../assets/english.jpg';
import pic2 from '../assets/hindi.jpg';
import pic3 from "../assets/sanskrit.jpg";
// import Pdf from 'react-pdf';
import card from "react-bootstrap/Card";

function Vaani() {
  return (
    <div className="sldi98">
      <div className="headv">
        <h2 class="font_5">VAANI</h2>
      </div>
      <div className="wrapper">
        <Card
          img={pic1}
          title="Learn English"
          description="Improve your English language proficiency for travel and study abroad or to communicate with English speakers around the world. This course develops your grammar, speaking, listening, reading and writing skills. You can start at any level from Beginner to Advanced and finish at any exit point that suits your individual needs."
          high0="Highlights"
          high1="Coaching from English experts"
          high2="Model question and answers"
          high3="64 short self-learning webisodes"
          high4="16 hours online learning"
          high5="2 full practice tests(speaking)"
          high6="Detailed feedback"
          high7="Plan"
		  linkto='www.google.com'
		//   pdflink=''
        />

        <Card
          img={pic2}
          title="Learn Hindi"
          description="Learn Hindi in 4 weeks. Complete Hindi language course with easy Grammar explanations supported with exercises, quizzes and practice material. Medium of instruction will be in English."
          high0="Learnings"
          high1="Introduction"
          high2="Hindi Grammar"
          high3="Mastering Verbs"
          high4="Everday Vocabulary"
          high5="Hindi Script - Devangiri"
          high6="Conversation Scenarios"
          high7="Plan"
          high8="Starting at ₹2389/-"
          high9="Total 8 classes per week"
          high10="2 days / week"
        />

        <Card
          img={pic3}
          title="Learn Sanskrit"
          description="Complete and Comprehensive Sanskrit Course for Absolute Beginners to learn right from Alphabets to become a Pro. Suited for those who want to understand Sanskrit Texts, Scriptures, Stories and Shloka. Ideal for students who are taking Sanskrit in School and other Sanskrit Exams."
          high0="Learnings"
          high1="Alphabets of Sanskrit"
          high2="Nouns, Pronouns & Gender"
          high3="Mastering Verbs"
          high4="Verbs & Tenses"
          high5="Conversational Aspects"
          high6="Deconstruction & Comprehension"
          high7="Plan"
          high8="Starting at ₹2389/-"
          high9="Total 8 classes per week"
          high10="2 days / week"
        />
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
        <div className="highlights">
          <br />
          <b>{props.high0}</b>
          <br />
          <br />
          &#10003; <i>{props.high1}</i>
          <br />
          <br />
          &#10003; <i>{props.high2}</i>
          <br />
          <br />
          &#10003; <i>{props.high3}</i>
          <br />
          <br />
          &#10003; <i>{props.high4}</i>
          <br />
          <br />
          &#10003; <i>{props.high5}</i>
          <br />
          <br />
          &#10003; <i>{props.high6}</i>
          <br />
          <br />
          <b>{props.high7}</b>
          <br />
          <br />
          {props.high8}
          <br />
          <br />
          {props.high9}
          <br />
          <br />
          {props.high10}
          <br />
          <br />
        </div>
      </div>
      <card.Link className="card__btn" href={props.linkto}>Join Us</card.Link>
    </div>
  );
}

export default Vaani;
