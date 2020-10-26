import React, {useEffect} from 'react'
const WordGame = () => {
  useEffect(() =>{
    document.title = 'Word game'
  })
  return (
    <>
      <iframe style={{width: '99vw',height:'100vh', border:'none'}} title='Word game iframe' 
		src={`${process.env.PUBLIC_URL}/_projects/word-game/`}/>
    </>
  )
}

export default WordGame
