import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionByTopic from './QuestionByTopic';

const Quiz = () => {
    const quizByTopic = useLoaderData();
    // console.log(quizByTopic.data);
    const { total, id, name, questions} = quizByTopic.data;
    
    

    return (
        <div >
            <p>i am quiz 1</p>
            <p>i am quiz 2</p>
            <p>i am quiz 3</p>
            <div className='mt-8 flex justify-center'>
                <p className='font-bold text-2xl'>Topic Name: {name }</p>
            </div>
            <div>
                {
                    questions.map((question, qid) => (
                       <QuestionByTopic key={qid} question={question} qid={qid}></QuestionByTopic>
                   )) 
                }
            </div>
        </div>
    );
};

export default Quiz;