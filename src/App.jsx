import './App.css'
import { useState, useRef } from 'react'
import { Api } from './Api'

export const App = () => {
  const [question, setQuestion] = useState('')
  const questionArea = useRef()

  const enterClick = (e) => {
    if(e.key === "Enter") sendQuestion()
  }

  const sendQuestion = async () => {
    const result = await Api(question)
    console.log(result)
  }

  return (
    <>
      <main className="content">
        <textarea
          className="aiResponseArea"
          rows={10}
          disabled
          
          placeholder="Resposta">
        </textarea>
        
        <textarea
          className="questionArea"
          rows={10}
          placeholder="Faça sua pergunta"
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => enterClick(e)}
          >
        </textarea>
      </main>
    </>
  )
}
