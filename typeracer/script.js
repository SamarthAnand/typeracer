const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'HEllo my name',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
let words= [];
let words_index=0;
let startTime = Date.now();
let wrong = 0;

const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-val');

document.getElementById('start').addEventListener('click',() =>{
    const quoteIndex = Math.floor(Math.random()* quotes.length);
    const quote = quotes[quoteIndex];
    words = quote.split(' ');
    words_index =0;

    const spanWords = words.map(function(word)
    {
        return `<span>${word }</span>`
    });
    quoteElement.innerHTML = spanWords.join(' ');;
    quoteElement.childNodes[0].className ='highlight';
    messageElement.innerText='';

    typedValueElement.value='';
    typedValueElement.focus();
    startTime=new Date().getTime();


});

typedValueElement.addEventListener('input',()=>
{
    const currentWord = words[words_index];
    const typedval =typedValueElement.value;

    if(typedval === currentWord && words_index===words.length-1)
    {
        const eTime = new Date().getTime()-startTime;
        const message = `Eureaka! You completed in ${eTime/1000}seconds. \n Your accuracy is ${(quote.length)}`;
    messageElement.innerText = message;
    }
    else if(typedval.endsWith(' ')&& typedval.trim()===currentWord)
    {
        typedValueElement.value='';
        words_index++;
        for(const wordElement of quoteElement.childNodes)
        {
            wordElement.className =' ';
        }
        quoteElement.childNodes[words_index].className = 'highlight';
    }
    else if(currentWord.startsWith(typedval))
    {
        typedValueElement.className= '';
    }
    else{
        wrong++;
        typedValueElement.className ='error';
    }
});