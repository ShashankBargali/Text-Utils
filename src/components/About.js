import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === 'light'?'black':'white',
        backgroundColor: props.mode === 'light'?'white':'#042745'
    }
    let myStyle2 = {
        color: props.mode === 'light'?'black':'white'
    }
    document.title = 'Text-Utils | About'
    return (

        <div>
            <div className="accordion accordion-flush my-3" id="accordionFlushExample" style={myStyle2}>
                <h1 className='m-3'>About Us</h1>
                <div className={`accordion-item text-${props.mode === 'dark'?'white':'dark'} bg-${props.mode}`}>
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Developer
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Hi my self <code>Shashank B Bargali</code> a student , programmer. I have just devloped this website for some text Utilities</div>
                    </div>
                </div>
                <div className={`accordion-item text-${props.mode === 'dark'?'white':'dark'} bg-${props.mode}`}>
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Easy to Use
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"><code>Text Utils</code> is free to use text editor, character counter, word counter and many more. You can also enable dark mode by getting into navbar and clicking on enable Dark mode and can disable by clicking once more.</div>
                    </div>
                </div>
                <div className={`accordion-item text-${props.mode === 'dark'?'white':'dark'} bg-${props.mode}`}>
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Anylise your text
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"><code>Text Utils</code> gives you a very easy way to analyse your text quickly and efficiently. Stay free to use <code>Text Utils</code></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
