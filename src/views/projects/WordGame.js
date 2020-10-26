import React, {useEffect} from 'react'
const WordGame = () => {
  useEffect(() =>{
    document.title = 'Word game'
  })
  return (
    <>
      <iframe style={{width: '99vw',height:'100vh', border:'none'}} title='Word game iframe' 
		src={`https://advaithm26.github.io/old-website/word-game.html`}/>
    </>
  )
}

export default WordGame
