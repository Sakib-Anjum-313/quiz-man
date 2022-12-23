import React, { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MyContext } from '../../Layouts/Main';
import './QuestionByTopic.css';
import { notifySuccess, notifyWrong } from './ToastNotify';

const QuestionByTopic = ({ question, qid }) => {
    // const [isRight, setIsRight] = useState(false);
    // const [isWrong, setIsWrong] = useState(false);
    const { correctAnswer , id} = question;
    const options = question.options;
    const ques = question.question;

    const [link, setlink] = useContext(MyContext);

    // console.log(question);

    const handleRightAnswer = (picked, event) => {
        if (picked == correctAnswer) {
            notifySuccess();
            // setIsRight(current => !current);
            event.currentTarget.classList.add('right-answer');   
        }
        else {
            notifyWrong();
            // setIsWrong(current => !current);
            event.currentTarget.classList.add('wrong-answer');        
        };
    };

    const handleEye = (options) => {
        const allElements = document.getElementsByClassName('option');
        console.log(options);
        for (const i in allElements) {
            if (allElements[i].innerText == correctAnswer) {
                allElements[i].parentNode.classList.add('right-answer');
            }

            // r = allElements[i].innerText;
            // console.log(r);
          
        }
        
    }

    
    return (
        <div>
            <div className='flex sm:mx-10 mx-20 mt-20 mb-10 content-center justify-between'>
                <div className='flex'>
                    <p>Quiz No: <span className='font-bold'>{qid + 1}</span></p>
                    <p className='ml-5 font-medium text-center' dangerouslySetInnerHTML={{ __html: ques }}></p>
                </div>
                <div onClick={()=> handleEye(options)} className='text-2xl cursor-help ml-7'>
                    <ion-icon name="eye-sharp"></ion-icon>
                </div>
                
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mx-20 mb-10 gap-4 '>
               
                {options.map((option, idx) => (
                    <div key={idx}  onClick={(event) => {handleRightAnswer(option, event)}} className='px-5 shadow-xl bg-gray-100 rounded lg:px-7 py-2 items-center flex cursor-pointer'> <p className='option'>{option}</p> </div>
                ))}
            </div>
            <ToastContainer />
        </div>
    );
};

export default QuestionByTopic;