'use client';
import React, { useState } from "react";
import { quiz } from "../data";
import 'water.css';
import Link from "next/link";
import AlternatywkaMetalowa from "../components/results/AlternatywkaMetalowa";
import Niealternatywka from "../components/results/Niealternatywka";
import Rapalternatywka from "../components/results/Rapternatywka";
import ZwyklaAlternatywka from "../components/results/ZwyklaAlternatywka";

interface ResultState {
    score: number;
    correctAnswers: number;
    wrongAnswers: number;
}

// Define the mapping between categories and components
const categoryComponents = {
    A: AlternatywkaMetalowa,
    B: Niealternatywka,
    C: Rapalternatywka,
    D: ZwyklaAlternatywka,
  };

const Page: React.FC = () => {
    const [activeQuestion, setActiveQuestion] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<boolean>(false);
    const [checked, setChecked] = useState<boolean>(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [result, setResult] = useState<ResultState>({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0
    });

    const { questions } = quiz;
    const { question, answers, correctAnswer } = questions[activeQuestion];

    // Select & check answer
    const [categoryPoints, setCategoryPoints] = useState({
        A: 0,
        B: 0,
        C: 0,
        D: 0,
    });
    const onAnswerSelected = (selectedAnswerPoints) => {
        setChecked(true);
        setSelectedAnswerIndex(selectedAnswerPoints);
        setCategoryPoints((prev) => ({
            A: prev.A + selectedAnswerPoints.A,
            B: prev.B + selectedAnswerPoints.B,
            C: prev.C + selectedAnswerPoints.C,
            D: prev.D + selectedAnswerPoints.D,
        }));
    };

    // Calculate score & increment to next question
    const nextQuestion = () => {
        setSelectedAnswerIndex(null);
        setResult((prev) => selectedAnswer ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
            wrongAnswers: prev.wrongAnswers
        } : {
            score: prev.score,
            correctAnswers: prev.correctAnswers,
            wrongAnswers: prev.wrongAnswers + 1,
        });
        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1);
            console.log(activeQuestion);
            console.log(questions.length - 1)

        } else {
            setActiveQuestion(0);
            setShowResult(true);
        }
        setChecked(false);
    }

    const getHighestScoringCategory = () => {
        let highestCategory = "";
        let highestPoints = 0;
      
        Object.entries(categoryPoints).forEach(([category, points]) => {
          if (points > highestPoints) {
            highestPoints = points;
            highestCategory = category;
          }
        });
      
        return highestCategory;
      };

    return (
        <div className="container">
            <Link href="/"><h1>Quiz page</h1></Link>
            <div>
                <h2>
                    Question: {activeQuestion + 1}
                    <span>/{questions.length}</span>
                </h2>
            </div>
            <div>
                {!showResult ? (
                    <div className="quiz-container">
                        <h2>{questions[activeQuestion].question}</h2>
                        {answers.map((answer, idx) => (
                            <li
                                key={idx}
                                onClick={() => onAnswerSelected(answer.points)}
                                className={`my-4 p-3 list-none bg-black shadow-md border-2 rounded-md button-hover ${selectedAnswerIndex === idx ? "button-selected" : ""}`}
                            >
                                <span>{answer.text}</span>
                            </li>
                        ))}
                        {checked ? (<button onClick={nextQuestion} className="btn">
                            {activeQuestion === question.length - 1 ? "Sprawdź wynik" : "Następne pytanie"}
                        </button>) : (<button className="btn-disabled" disabled>
                            {activeQuestion === question.length - 1 ? "Sprawdź wynik" : "Następne pytanie"}
                        </button>)}
                    </div>
                ) : (
                    <div className="quiz-container">
                        {/* <h3>
                            Results
                        </h3>
                        <h3>
                            Overall {(result.score / 25) * 100}
                        </h3>
                        <p>
                            Total questions: <span>{questions.length}</span>
                        </p>
                        <p>
                            Correct Answers: <span>{result.correctAnswers}</span>
                        </p>
                        <p>
                            Wrong Answers: <span>{result.wrongAnswers}</span>
                        </p> */}
                        <h3>Highest Scoring Category</h3>
                        {Object.entries(categoryPoints).map(([category, points]) => (
                            <p key={category}>
                                {category}: <span>{points}</span>
                            </p>
                        ))}
                        {React.createElement(categoryComponents[getHighestScoringCategory()])}
                        
                        <button onClick={() => window.location.reload()}>Restart</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;

