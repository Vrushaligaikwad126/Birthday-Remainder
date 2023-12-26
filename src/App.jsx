import React , {useState} from 'react'
import Data from './Data'

const App = () => {
  const[data,setData]=useState(Data)
  return (
    <section>
    <div className='outer-container'>
      <div className='main-container'>
        <p>today's Birthday!💗 {data.length}</p>
        
        {data.map((x)=>{
          return(
            <div className='cards'>
              <img src={x.image} alt='' height={"50px"} width={"50px"}></img>
                  <p>{x.name}</p>
                  <p>{x.age}</p>
                  

            </div>
          )

        })}
        <button onClick={()=>setData([])}>Clear</button>
      </div>
    </div>
    </section>
  )
}

export default App