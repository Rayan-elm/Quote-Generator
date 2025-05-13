import { useState } from 'react'

const quotes = [
  "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "It always seems impossible until it’s done. - Nelson Mandela",
  "I am not afraid... I was born to do this. - Joan of Arc",
  "Believe you can and you’re halfway there. - Theodore Roosevelt"
];
const bgColors = ['#FFCDD2', '#C8E6C9', '#BBDEFB', '#FFF9C4', '#D1C4E9', '#FFECB3', '#B2DFDB']

export default function QuoteGenerator() { 
    const [currentQuote, setCurrentQuote] = useState("")
    const [bgColor, setBgColor] = useState("#111010")

  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * 7);
    const randomQuote = quotes[randomIndex];
    const randomColor = bgColors[randomIndex];

    setCurrentQuote(randomQuote);
    setBgColor(randomColor);
}

return (
    <div className="quote-container" style={{backgroundColor: bgColor}}>
    <h1 className="title">Random Quote Generator</h1>
    <button className="quote-button" onClick={generateQuote}>Generate Quote</button>
    <p className="quote-text">{currentQuote}</p>
    </div>
);
}
