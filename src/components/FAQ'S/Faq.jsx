import { Link } from "react-router-dom"
import Container from "../../shared/container/Container"
import plus from '../../assets/plus.png'
import Questions from "./Questions"
import Header from "../../shared/container/header/Header"
import Footer from "../../shared/container/footer/Footer"

const Faq = () => {

    const questions = [

        {
            id : 1 ,
            text : "Is this a real job?"
            // 
            // 
            // 
        },
        {
            id : 2 ,
            text : "It sounds too good to be true. What’s the catch? "

        },
        {
            id : 3 ,
            text : "What are the start and finish dates for the job?  "
        },
        {
            id : 4 ,
            text : "How often will the successful employee be paid?"
        },
        {
            id : 1 ,
            text : "Who will be my employer and who will I report to?"
            // 
            // 
            // 
        },
        {
            id : 2 ,
            text : "Do I need a Wealthbuddy account to apply? "

        },
        {
            id : 3 ,
            text : "How do you apply?   "
        },
        {
            id : 4 ,
            text : 'How old do you have to be to apply? '
        },
        {
            id : 4 ,
            text : 'Do I need a Wealthbuddy account to apply? '
        },
        {
            id : 4 ,
            text : 'How much is the salary for the role? '
        },
        {
            id : 4 ,
            text : 'Do I need to be a social media influencer to apply?  '
        },
        {
            id : 4 ,
            text : 'Is there a minimum number of followers I must have on social media to apply?  '
        },
        {
            id : 4 ,
            text : ' Which social media platform should I post my 60s video? '
        },
        {
            id : 4 ,
            text : 'What should my application/video include? '
        },
        {
            id : 4 ,
            text : 'How will I know if my application has been accepted? '
        },
        {
            id : 4 ,
            text : 'What are the selection criteria?  '
        },
        {
            id : 4 ,
            text : 'How will I know if I’m selected for an interview? '
        },
        {
            id : 4 ,
            text : 'Do I have to pay for this application?  '
        },
    ]
   


    return(

        <Link to={"/faq"}>
             <Header/>

            <div>
               

                <div className="w-[1282px] bg-[#99BF18]  rounded-3xl mx-8">

                    <div className="flex flex-col justify-center items-center">

                        <h1 className="text-[#ffffff] text-[337.37px] font-Montserrat font-extrabold opacity-30" >FAQs ?</h1>
                    </div>
                 
                </div>

                {questions.map((question,i)=>(<Questions key={i} {...question} />))}

            
            </div>

        <div className="m-10">

        </div>
        
           <Footer/>
        </Link>




    )


}

export default Faq