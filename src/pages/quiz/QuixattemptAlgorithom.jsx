import { useState } from "react";

const quizquestion =[
    {
        "question": "What is a data structure that follows a last-in, first-out (LIFO) order?",
        "options": ["Stack", "Queue", "Heap", "List"],
        "answer": "Stack"
    },
    {
        "question": "Which sorting algorithm has an average time complexity of O(n log n)?",
        "options": ["Merge", "Quick", "Bubble", "Insertion"],
        "answer": "Merge"
    },
    {
        "question": "What is an algorithm for finding the shortest path between nodes in a graph?",
        "options": ["Dijkstra", "BFS", "DFS", "A*"],
        "answer": "Dijkstra"
    },
    {
        "question": "Which algorithm is used for finding the minimum spanning tree in a graph?",
        "options": ["Prim", "Kruskal", "Bellman-Ford", "Floyd-Warshall"],
        "answer": "Prim"
    },
    {
        "question": "What is an algorithm for finding all permutations of a set?",
        "options": ["Backtracking", "Dynamic", "Greedy", "Branch"],
        "answer": "Backtracking"
    },
    {
        "question": "Which search algorithm requires the list to be sorted beforehand?",
        "options": ["Binary", "Linear", "Depth", "Breadth"],
        "answer": "Binary"
    },
    {
        "question": "What algorithm is used to find the maximum subarray sum?",
        "options": ["Kadane", "Merge", "Quick", "Radix"],
        "answer": "Kadane"
    },
    {
        "question": "Which algorithm is used to traverse a binary tree in an inorder manner?",
        "options": ["DFS", "BFS", "Preorder", "Postorder"],
        "answer": "DFS"
    },
    {
        "question": "What is an algorithm for finding the longest common subsequence between two strings?",
        "options": ["Dynamic", "Greedy", "Backtracking", "Branch"],
        "answer": "Dynamic"
    },
    {
        "question": "Which algorithm is used to find the strongly connected components in a graph?",
        "options": ["Kosaraju", "Tarjan", "BFS", "DFS"],
        "answer": "Kosaraju"
    },
    {
        "question": "What is an algorithm for finding the maximum flow in a flow network?",
        "options": ["Ford-Fulkerson", "Edmonds-Karp", "Dijkstra", "Bellman-Ford"],
        "answer": "Ford-Fulkerson"
    },
    {
        "question": "Which sorting algorithm has the best time complexity of O(n log n) in the average case?",
        "options": ["Merge", "Quick", "Bubble", "Insertion"],
        "answer": "Quick"
    },
    {
        "question": "What is an algorithm for finding the shortest path in a weighted graph from a single source vertex to all other vertices?",
        "options": ["Dijkstra", "Prim", "Kruskal", "Bellman-Ford"],
        "answer": "Bellman-Ford"
    },
    {
        "question": "Which algorithm is used to find the least common ancestor of two nodes in a binary tree?",
        "options": ["Tarjan", "LCA", "DFS", "BFS"],
        "answer": "LCA"
    },
    {
        "question": "What algorithm is used to determine if a given graph is bipartite?",
        "options": ["DFS", "BFS", "Greedy", "Backtracking"],
        "answer": "DFS"
    }
]

const QuixattemptAlgorithom = () => {
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

export default QuixattemptAlgorithom;