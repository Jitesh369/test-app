import React from "react";
import "./Posts.css";
import Post from "../Post/Post";

const Posts = () => {
const blogPosts = [
	{
	title: "INTERNSHIPS",
	body: `We are offering Internships in different departments. This will help you to understand and enhance your skills while working with us.`,
	imgUrl:
		"https://images.pexels.com/photos/7102/notes-macbook-study-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	link:<a href="./internship">Checkout</a>
	},
	{
	title: "CAMPUS AMBASSADOR",
	body: `A student liaisons hired to increase engagement, awareness, and use of a company's products or services on their college campus.`,
	imgUrl:
		"https://img.freepik.com/free-vector/happy-diverse-students-celebrating-graduation-from-school_74855-5853.jpg?t=st=1655732283~exp=1655732883~hmac=f5ad3e601e9fa950dec96c66ab559fbbe2285267cbef9f10a8dfd7466c2a9cce&w=826",
	link:'www.google.com',
	},
    {
	title: "VAANI",
	body: `Improve your languages proficiency. This course develops your grammar, speaking, listening, reading and writing skills.`,
    imgUrl:
		"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
	link:'www.google.com',
	},
];

return (
	<div className="posts-container">
	{blogPosts.map((post, index) => (
		<Post key={index} index={index} post={post} />
	))}
	</div>
);
};

export default Posts;