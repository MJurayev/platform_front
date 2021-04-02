import axios from 'axios'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useServer } from '../../Contexts/ServerProvider'
import st from './Quiz.module.css'

export default function Quiz() {
    const location = useParams('id')
    const answerA = useRef()
    const answerB = useRef()
    const answerC = useRef()
    const answerD = useRef()
  
    const {server } = useServer()
    const [quizName, setQuizName] = useState(" test")
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState([])
    const [result, setResult] = useState(false)

    const [correct, setCorrect] = useState([])
    function getQuiz( id){
        axios.get(`${server}/api/quiz/${id}`, {
            headers:{
                'Content-type':'application/json',
                'x-auth-token':window.localStorage.getItem('x-auth-token')
            }
        }).then(res=>{
            console.log(res.data)
            const answersTemp =[]
            
            setAnswers(answersTemp)
            // console.log(answersTemp)

            res.data.questions.map((item, key)=>{
                answersTemp.push({_id:item._id,answer:null})
                return true
            })
            setQuizName(res.data.quizName)
            setQuestions(res.data.questions)
           
        }).catch(err=>{
            console.log(err)
        })
    }
    const reattempt=()=>{
      setResult(false)
     
     
     clearAnswers()
    }
    const nextQuestion=()=>{
        setCurrentQuestion(x=>++x)
    }
    const prevQuestion=()=>{
        setCurrentQuestion(x=>--x)
    }
    const goQuestion=(x)=>{
        setCurrentQuestion(x)
    }
    const finishAttempt=()=>{
      const bodyData = {
        _id:location.id,
        answers:answers
      }
      const headers = {
        'Content-type':'application/json',
        'x-auth-token':window.localStorage.getItem('x-auth-token')
      }
      axios.post(`${server}/api/quiz/check`,bodyData,  {
        headers:headers
      }).then(res=>{
        setResult(true)
        console.log(res.data)
        setCorrect(res.data)
        const tempAnswer = answers.map((x)=>{
          return {_id:x._id, answer:null}
       })
       setAnswers(tempAnswer)
      
      }).catch(err=>console.log(err))
    }
    const returnAnswer=()=>{
        if(answerA.current.checked)return 0
        if(answerB.current.checked)return 1
        if(answerC.current.checked)return 2
        if(answerD.current.checked)return 3
    }
    const changeAnswer=()=>{
        const answer = {_id:questions[currentQuestion]._id, answer:returnAnswer()}
      const index = answers.findIndex(x=>x._id === answer._id)
      var tempAnswer = [...answers]
      tempAnswer[index]=answer
      setAnswers(tempAnswer)
      console.log(tempAnswer)
    }
    useEffect(()=>{
        getQuiz(location.id)
    }, [])
    const clearAnswers =()=>{
      if(answers.length>0)
        switch(answers[currentQuestion].answer){
            case 0:answerA.current.checked=true; break;
            case 1:answerB.current.checked=true; break;
            case 2:answerC.current.checked=true; break;
            case 3:answerD.current.checked=true; break;
            default : {
              answerA.current.checked=false;
              answerB.current.checked=false;
              answerC.current.checked=false;
              answerD.current.checked=false;
            }
        }
    }
    useMemo(()=>{
      clearAnswers()
    }, [currentQuestion])
    return (
      <div className={st.container}>
        {result ? <div className={st.resultOverlay}>
            <div className={st.result}>
              <div className={st.resultChart}>
                <div className={st.inner}></div>
              </div>
              <h1>Siz {correct.questions}tadan {correct.correct} to'g'ri javob berdingiz?</h1>
              <div className={st.controlButtons}>
                <button onClick={reattempt}>Qayta topshirish</button>
                <Link to="/home">Bosh sahifa</Link>
              </div>
            </div>
        </div> : ''}
        {questions.length > 0 ? (
          <div>
            <div className={st.box} data-title={quizName}>
              <div className={st.quiz}>

                <div className={st.questionNumber}>
                  Question {currentQuestion + 1}
                </div>
                <div className={st.question}>
                  {questions[currentQuestion].questionString}
                </div>

                <div className={st.answers}>
                  <div onClick={changeAnswer} className={st.answerItem}>
                    <input
                      type="radio"
                      ref={answerA}
                      name="answer"
                      id="q1"
                    />
                    <label htmlFor="q1">
                      {questions[currentQuestion].answerA}
                    </label>
                  </div>
                  <div className={st.answerItem}>
                    <input
                      type="radio"
                      ref={answerB}
                      onChange={changeAnswer}
                      name="answer"
                      id="q2"
                    />
                    <label htmlFor="q2">
                      {questions[currentQuestion].answerB}
                    </label>
                  </div>
                  <div className={st.answerItem}>
                    <input
                      type="radio"
                      ref={answerC}
                      onChange={changeAnswer}
                      name="answer"
                      id="q3"
                    />
                    <label htmlFor="q3">
                      {questions[currentQuestion].answerC}
                    </label>
                  </div>
                  <div className={st.answerItem}>
                    <input
                      type="radio"
                      ref={answerD}
                      onChange={changeAnswer}
                      name="answer"
                      id="q4"
                    />
                    <label htmlFor="q4">
                      {questions[currentQuestion].answerD}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className={st.controlButtons}>
              <button disabled={currentQuestion <= 0} onClick={prevQuestion}>
                Ortga
              </button>
              <button
                disabled={currentQuestion >= questions.length - 1}
                onClick={nextQuestion}
              >
                Oldinga
              </button>

              <button
                onClick={finishAttempt}
              >
                Tugatish
              </button>
            </div>
            <div className={st.quizCounter}>
              {questions.map((item, key) => {
                return (
                  <div
                    key={key}
                    onClick={() => {
                      goQuestion(key);
                    }}
                    className={currentQuestion === key ? st.current : ""}
                  >
                    {key + 1}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          "Yuklanmoqda"
        )}

      </div>
    );
}
