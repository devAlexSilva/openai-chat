import './App.css'
import { useState, useRef } from 'react'
import { Api } from './Api'

export const App = () => {
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState('')
  const [isDisabled, setIsdisabled] = useState(false)
  const questionRef = useRef('')

  const enterClick = (e) => {
    if(e.key === "Enter") {
      sendQuestion()
      setIsdisabled(true)
    }
  }

  const sendQuestion = async () => {
    try {
      const { data } = await Api(question)

      const res1 = data.choices[0]?.text || 'sem resultado'
      const res2 = data.choices[1]?.text || 'sem resultado'
      const res3 = data.choices[2]?.text || 'sem resultado'
      
      console.log(res1+'\n'+res2+'\n'+res3)
      
      questionRef.current += 
      `Eu: ${question}\n\nALAI: ${res1}\n\n-----------------\n\n${res2}\n\n-----------------\n\n${res3}\n\n`
      
      setResponse(questionRef.current)
      setQuestion('')
      setIsdisabled(false)

    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <main className="content">
        <textarea
          className="aiResponseArea"
          rows={10}
          value={response}
          disabled
          
          placeholder="Resposta">
        </textarea>
        
        <textarea
          className="questionArea"
          rows={10}
          placeholder="Faça sua pergunta"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => enterClick(e)}
          disabled={isDisabled}
          >
        </textarea>
      </main>
    </>
  )
}
