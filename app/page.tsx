"use client"; 
import { useState } from "react"; 

export default function Home() {

  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(""); 
  
  const [selectedAnswers, setSelectedAnswers] = useState <{
    Q1: string | null, 
    Q2: string | null, 
    Q3: string | null
  }>({
    Q1: null, 
    Q2: null, 
    Q3: null
  }); 

  const submitAnswers =  async (e: React.SyntheticEvent<HTMLFormElement>) => {
   
    e.preventDefault(); // prevents page from refreshing 
    setIsLoading(true); 

    try {

      const res = await fetch(`/api/survey/`,  {
        method: "POST", 
        headers: {
          "Content-Type" : "application/json", 
        }, 
        body: JSON.stringify({selectedAnswers,

        }), 
      
      }); 

      setSelectedAnswers({Q1: null, Q2: null, Q3: null});
      console.log(selectedAnswers); 

    } catch (e)  {
     
      console.error(e)
      setError("Cannot fetch data"); 

      return; 

    } finally {
      setIsLoading(false); 
     
    }
  }

  return (
    <main className="main-page"> 

      <div> 
        <form 
        onSubmit={submitAnswers}
        className="flex flex-col gap-4"> 
         
          <div className="outer-div">   
            <h2 className="survey-text"> 1. I worry about things. </h2>

            <div className= "buttons-container">
              <button
              type="button"
              onClick={()=> 
                setSelectedAnswers({...selectedAnswers, Q1:"1", })
              }
              className={`button-preset ${selectedAnswers.Q1 === "1"? 'border-green-700 border-3' : 'border-gray-600'}`}
              >
                Very Innacurate 
              </button>

              <button
              type="button"
              onClick={()=> 
                setSelectedAnswers({...selectedAnswers, Q1:"2", })
              }
              className={`button-preset ${selectedAnswers.Q1 ==="2" ? 'border-green-700 border-3' : 'border-gray-600'}`}
             >
                Moderately Innacurate
              </button>

              <button
              type="button"
              onClick={()=> 
                setSelectedAnswers({...selectedAnswers, Q1: "3", })
              }
              className={`button-preset ${selectedAnswers.Q1 === "3" ? 'border-green-700 border-3' : 'border-gray-600'}`}
              >
                Neither Accurate Nor Innacurate
              </button>

              <button
              type="button"
              onClick={()=> 
                setSelectedAnswers({...selectedAnswers, Q1: "4", })
              }
              className={`button-preset ${selectedAnswers.Q1 === "4" ? 'border-green-700 border-3' : 'border-gray-600'}`}
              >
                Moderately Accurate
              </button>

              <button
              type="button"
              onClick={()=> 
                setSelectedAnswers({...selectedAnswers, Q1: "5", })
              }
              className={`button-preset ${selectedAnswers.Q1 === "5" ? 'border-green-700 border-3' : 'border-gray-600'}`}
              >
                Very Accurate
              </button>
            </div>


          </div>

          <div className="outer-div"> 
            <h2 className="survey-text"> 2. I make friends easily </h2>

            <div className="buttons-container">
              <button
              type="button"
              onClick={()=> 
                setSelectedAnswers({...selectedAnswers, Q2:"1", })
              }
              className={`button-preset ${selectedAnswers.Q2 === "1"? 'border-green-700 border-3' : 'border-gray-600'}`}
              >
                Very Innacurate 
              </button>

              <button
              type="button"
              onClick={()=> 
                setSelectedAnswers({...selectedAnswers, Q2:"2", })
              }
              className={`button-preset ${selectedAnswers.Q2 === "2"? 'border-green-700 border-3' : 'border-gray-600'}`}
              >
                Moderately Innacurate
              </button>

              <button
              type="button"
              onClick={()=> 
                setSelectedAnswers({...selectedAnswers, Q2:"3", })
              }
              className={`button-preset ${selectedAnswers.Q2 === "3"? 'border-green-700 border-3' : 'border-gray-600'}`}
              >
                Neither Accurate Nor Innacurate
              </button>

              <button
              type="button"
              onClick={()=> 
                setSelectedAnswers({...selectedAnswers, Q2:"4", })
              }
              className={`button-preset ${selectedAnswers.Q2 === "4"? 'border-green-700 border-3' : 'border-gray-600'}`}
              >
                Moderately Accurate
              </button>

              <button
              type="button"
              onClick={()=> 
                setSelectedAnswers({...selectedAnswers, Q2:"5", })
              }
              className={`button-preset ${selectedAnswers.Q2 ==="5"? 'border-green-700 border-3' : 'border-gray-600'}`}
              >
                Very Accurate
              </button>
            </div>
          </div>

          <div className="outer-div"> 
            <h2 className="survey-text"> 3. I have a vivid imagination. </h2>

            <div className="buttons-container">
              <button
              type="button"
              onClick={()=> 
                setSelectedAnswers({...selectedAnswers, Q3:"1", })
              }
              className={`button-preset ${selectedAnswers.Q3 === "1"? 'border-green-700 border-3' : 'border-gray-600'}`}
              >
                Very Innacurate 
              </button>

              <button
              type="button"
              onClick={()=> 
                setSelectedAnswers({...selectedAnswers, Q3:"2", })
              }
              className={`button-preset ${selectedAnswers.Q3 === "2"? 'border-green-700 border-3' : 'border-gray-600'}`}
              >
                Moderately Innacurate
              </button>

              <button
              type="button"
              onClick={()=> 
                setSelectedAnswers({...selectedAnswers, Q3:"3", })
              }
              className={`button-preset ${selectedAnswers.Q3 ==="3"? 'border-green-700 border-3' : 'border-gray-600'}`}
              >
                Neither Accurate Nor Innacurate
              </button>

              <button
              type="button"
              onClick={()=> 
                setSelectedAnswers({...selectedAnswers, Q3:"4", })
              }
              className={`button-preset ${selectedAnswers.Q3 === "4"? 'border-green-700 border-3' : 'border-gray-600'}`}
              >
                Moderately Accurate
              </button>

              <button
              type="button"
              onClick={()=> 
                setSelectedAnswers({...selectedAnswers, Q3:"5", })
              }
              className={`button-preset ${selectedAnswers.Q3 === "5"? 'border-green-700 border-3' : 'border-gray-600'}`}
              >
                Very Accurate
              </button>
            </div>

          </div>
       
          <button
          className="text-white rounded-md text-sm bg-gray-500 p-1 w-20 hover:scale-105 active:scale-95"
  
          > 
            {isLoading ? "Loading..." : "Submit"}
          </button>
          {error &&  (
            <p className="text-sm text-red-500"> {error} </p>
          )}
        </form>
      </div>
    </main>
  )
}