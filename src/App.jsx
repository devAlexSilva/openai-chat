import './App.css'

export const App = () => {

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
          placeholder="Faça sua pergunta">
        </textarea>
      </main>
    </>
  )
}
