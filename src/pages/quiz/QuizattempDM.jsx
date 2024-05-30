import { useState } from "react";

const quizquestion = [
    {
        "question": "What is SEO?",
        "options": ["Optimization", "Operation", "Engagement", "Conversion"],
        "answer": "Optimization"
    },
    {
        "question": "Which metric measures email success?",
        "options": ["Bounce", "Clicks", "Views", "Shares"],
        "answer": "Clicks"
    },
    {
        "question": "What does PPC stand for?",
        "options": ["Pay", "Per", "Cost", "Paid"],
        "answer": "Per"
    },
    {
        "question": "Best platform for networking?",
        "options": ["Facebook", "LinkedIn", "Instagram", "Twitter"],
        "answer": "LinkedIn"
    },
    {
        "question": "Purpose of Google Analytics?",
        "options": ["Traffic", "Design", "Content", "Emails"],
        "answer": "Traffic"
    },
    {
        "question": "Goal of content marketing?",
        "options": ["Leads", "Sales", "Clicks", "Spending"],
        "answer": "Leads"
    },
    {
        "question": "What is a keyword?",
        "options": ["Meta", "HTML", "Backlink", "Search"],
        "answer": "Search"
    },
    {
        "question": "Example of social media marketing?",
        "options": ["Email", "Ads", "Posts", "Blogs"],
        "answer": "Posts"
    },
    {
        "question": "Advantage of PPC?",
        "options": ["Rank", "Fixed", "Keyword", "Clicks"],
        "answer": "Clicks"
    },
    {
        "question": "What is Bounce Rate?",
        "options": ["Single", "Click", "Exit", "Conversion"],
        "answer": "Single"
    }
]

const QuizattempDM = () => {
    const [questionpg, setQuestionpg] = useState(0);
    const [score, setScore] = useState(0);
    const [showscore, setShowscore] = useState(false);
    const [select, setSelect] = useState('');

    const handleQuizform = (option) => {
        if (option === quizquestion[questionpg].answer) {
            setScore(score + 1);
        }
        setSelect(option);
    };

    const handleNextquestion = () => {
        setSelect('');
        const nextQuestionIndex = questionpg + 1;
        if (nextQuestionIndex < quizquestion.length) {
            setQuestionpg(nextQuestionIndex);
        } else {
            setShowscore(true);
        }
    };
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen min-w-screen my-7">
                {showscore ? (
                    <>
                        <div className="text-2xl font-bold">
                            You scored <span className="text-red-400">{score} </span> out of {quizquestion.length}
                        </div>

                    </>
                ) : (
                    <>
                        <div className="w-full max-w-xl  p-5 bg-white rounded-lg shadow-md border-b-4 border-sky-300 ">
                            <div className="m-5 text-xl flex md:justify-between flex-col md:flex-row">
                                <h1 className="font-bold">Question <span className=" text-blue-500">{questionpg + 1}</span> </h1>
                                <h1 className="font-bold text-orange-700"><span>Total Question:</span> {quizquestion.length}</h1>
                            </div>
                            <div className="mb-6 text-lg">{quizquestion[questionpg].question}</div>
                            <div className="flex flex-col  lg:justify-center lg:items-center min-w-full min-h-full lg:flex-row lg:space-x-9 space-y-4 lg:space-y-0">
                                {
                                    quizquestion[questionpg].options.map((option) => (
                                        <button key={option} onClick={() => handleQuizform(option)}
                                            className={`py-2 px-4 rounded-lg border  h-full btn btn-sm ${select === option ? 'bg-blue-400 text-white' : 'bg-gray-300'}`}>
                                            {option}</button>
                                    ))
                                }
                            </div>
                            <button onClick={handleNextquestion} disabled={!select} className=" mt-5 p-3 w-full text-center  bg-blue-500 text-white rounded-lg disabled:bg-gray-400">
                                Next
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default QuizattempDM;