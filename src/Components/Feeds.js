import React, { Component } from 'react'
import IndividualFeed from './IndividualFeed'
import Post from './Post'
import FullStackImage from '../images/fullstack.png'

class Feeds extends Component {
    render() {
        return (
            <div className="feeds">
                    <IndividualFeed feedName="Full Stack Development" feedContent="A full stack developer is a web developer or engineer who works with both the front and back ends of a website or application—meaning they can tackle projects that involve databases, building user-facing websites, or even work with clients during the planning phase of projects" ></IndividualFeed>

                    <IndividualFeed feedName="Data Science" feedContent = "Data science is the study of data. It involves developing methods of recording, storing, and analyzing data to effectively extract useful information. The goal of data science is to gain insights and knowledge from any type of data — both structured and unstructured"></IndividualFeed>

                    <IndividualFeed feedName="Machine Learning" feedContent = "Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. Machine learning focuses on the development of computer programs that can access data and use it learn for themselves"></IndividualFeed>

                    <IndividualFeed feedName="Artificial Intelligence" feedContent = "Artificial intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing (NLP), speech recognition and machine vision"></IndividualFeed>
            </div>
        )
    }
}

export default Feeds
