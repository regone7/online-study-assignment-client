import { useState } from "react";


const quizquestion = [
    {
        "question": "Which of the following is the correct way to declare a variable in JavaScript?",
        "options": ["var myVar;", "variable myVar;", "v myVar;", "int myVar;"],
        "answer": "var myVar;"
    },
    {
        "question": "What is the output of the following code? console.log(typeof null);",
        "options": ["null", "undefined", "object", "string"],
        "answer": "object"
    },
    {
        "question": "Which company developed JavaScript?",
        "options": ["Netscape", "Microsoft", "Sun Microsystems", "IBM"],
        "answer": "Netscape"
    },
    
    {
        "question": "How do you write an 'if' statement in JavaScript?",
        "options": ["if (i == 5)", "if i = 5 then", "if i == 5 then", "if (i = 5)"],
        "answer": "if (i == 5)"
    },
    
    {
        "question": "Which built-in method combines the text of two strings and returns a new string?",
        "options": ["append()", "concat()", "attach()", "combine()"],
        "answer": "concat()"
    },
    
    
    {
        "question": "Which event occurs when the user clicks on an HTML element?",
        "options": ["onchange", "onmouseover", "onmouseclick", "onclick"],
        "answer": "onclick"
    },
    {
        "question": "What will the following code output? console.log(3 == '3');",
        "options": ["true", "false", "null", "undefined"],
        "answer": "true"
    },
    {
        "question": "What will the following code output? console.log(3 === '3');",
        "options": ["true", "false", "null", "undefined"],
        "answer": "false"
    },
   
    {
        "question": "Which built-in method calls a function for each element in the array?",
        "options": ["while()", "loop()", "forEach()", "None of the above"],
        "answer": "forEach()"
    },
    
    
    
    {
        "question": "Which of the following is not a reserved word in JavaScript?",
        "options": ["interface", "throws", "program", "short"],
        "answer": "program"
    },
    {
        "question": "Which company developed JavaScript?",
        "options": ["Netscape", "Microsoft", "Google", "IBM"],
        "answer": "Netscape"
    },
   
    {
        "question": "Which built-in method sorts the elements of an array?",
        "options": ["changeOrder(order)", "order()", "sort()", "None of the above"],
        "answer": "sort()"
    },
   
    
    {
        "question": "Which JavaScript label catches all the values, except for the ones specified?",
        "options": ["catch", "label", "default", "try"],
        "answer": "default"
    },
    {
        "question": "Which built-in method returns the string representation of the number's value?",
        "options": ["toValue()", "toNumber()", "toString()", "None of the above"],
        "answer": "toString()"
    },
    {
        "question": "Which of the following function of Number object returns the number's value?",
        "options": ["toString()", "valueOf()", "toLocaleString()", "toPrecision()"],
        "answer": "valueOf()"
    }
];

const Quizattempt = () => {
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
                        <div className="w-full max-w-xl p-5 bg-white rounded-lg shadow-md border-b-4 border-sky-300 ">
                            <div className="m-5 text-xl flex md:justify-between flex-col md:flex-row">
                                <h1 className="font-bold">Question <span className=" text-blue-500">{questionpg + 1}</span> </h1>
                                <h1 className="font-bold text-orange-700"><span>Total Question:</span> {quizquestion.length}</h1>
                            </div>
                            <div className="mb-6 text-lg">{quizquestion[questionpg].question}</div>
                            <div className="flex flex-col lg:justify-center lg:items-center min-w-full min-h-full lg:flex-row lg:space-x-9 space-y-4 lg:space-y-0">
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

export default Quizattempt;