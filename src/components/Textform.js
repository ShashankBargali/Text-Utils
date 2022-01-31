import React, { useState } from 'react';

export default function Textform(prop) {
    const [text, setText] = useState('');
    const Change = (event) => {
        setText(event.target.value)
    }
    const UpNow = () => {
        let newText = text.toUpperCase();
        setText(newText);
        prop.showAlert("Changed the text to Upper Case")
    }
    const LowNow = () => {
        let newText = text.toLowerCase();
        setText(newText);
        prop.showAlert("Changed the text to Lower Case")
    }
    const ClearNow = () => {
        setText('')
        prop.showAlert("Text cleared")
    }
    const CopyNow = () => {
        let copyText = document.querySelector('textarea')

        copyText.select();
        copyText.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyText.value);

        prop.showAlert("Copied the text: " + copyText.value);
        document.getSelection().removeAllRanges();
    }
    const RemoveNow = () => {
        let newString = text.replace(/\s+/g, ' '); // "thiscontainsspaces"
        // newString = text.replace(/ +/ , '');
        setText(newString)
        prop.showAlert("Removed all the unwanted extra spaces")
    }
    const CapitaliseNow = () => {

        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
        prop.showAlert("Capitalised the first letter of all the words")
    }
    const CapitalisefirNow = () => {

        let firstchar = text.charAt(0); // storing the first char of the string
        let newText = firstchar.toUpperCase(); // converting that to uppercase
        setText(newText + text.slice(1)); // printing it with rest excluding the first char by using slice
        prop.showAlert("Capitalised the first letter")
    }
    document.title = 'Text-Utils | Home'

    let words = text.split(" ").filter((element) => { return element.length !== 0 }).length;
    let letters = text.length;
    return (
        <div>
            <div className="mt-5">
                <h1>Enter your Text here</h1>
                <textarea className={`form-control bg-${prop.mode} text-${prop.mode === 'light' ? 'dark' : 'light'}`} value={text} onChange={Change} id="exampleFormControlTextarea1" placeholder='Enter the text' rows="8"></textarea>
                <button disabled={text.length === 0} className="btn btn-primary m-3" onClick={UpNow}>UpperCase now</button>
                <button disabled={text.length === 0} className="btn btn-primary m-3" onClick={LowNow}>LowerCase now</button>
                <button disabled={text.length === 0} className="btn btn-primary m-3" onClick={ClearNow}>Clear text now</button>
                <button disabled={text.length === 0} className="btn btn-primary m-3" onClick={CopyNow}>Copy text now</button>
                <button disabled={text.length === 0} className="btn btn-primary m-3" onClick={RemoveNow}>Remove ExtraSpaces now</button>
                <button disabled={text.length === 0} className="btn btn-primary m-3" onClick={CapitalisefirNow}>Capitalise Now</button>
                <button disabled={text.length === 0} className="btn btn-primary m-3" onClick={CapitaliseNow}>Capitalise all Now</button>
            </div>
            <div className="container">
                <h3>The text count</h3>
                <p> {words} words and {letters} letter </p>
                <p> {0.008 * words} minutes to read (125wmp)</p>
            </div>
            <div className="container">
                <h2>Preview</h2>
                <p> {text === '' ? 'Nothing to preview!' : text} </p>
            </div>
        </div>
    )
}
