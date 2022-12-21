import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifySuccess = () => {
    toast.success('🦄 Great!! Right Answer', {
position: "top-right",
autoClose: 2500,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: false,
progress: undefined,
theme: "light",
    });
    } 
    
    const notifyWrong = () => {toast.error('Wrong Answer !!!', {
position: "top-right",
autoClose: 2500,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: false,
progress: undefined,
theme: "light",
    });
} 

export {
    notifySuccess, notifyWrong
};

