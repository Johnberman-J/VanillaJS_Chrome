const quotes = [
    {
        quote: "Indolence is a delightful but distressing state; we must be doing something to be happy.",
        author: "Mahatma Gandhi",
    }, 
    {
        quote: "Whatever you do, do cautiously, and look to the end.",
        author: "Unknown",
    },
    {
        quote: "My philosophy is that not only are you responsible for your life, but doing the best at this moment puts you in the best place for the next moment.",
        author: "Oprah Winfrey",
    },
    {
        quote: "Judge thyself with the judgment of sincerity, and thou will judge others with the judgment of charity.",
        author: "ohn Mitchell Mason",
    },
    {
        quote: "A man is but the product of his thoughts. What he thinks, he becomes.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "Accept challenges, so that you may feel the exhilaration of victory.",
        author: "George S. Patton",
    },
    {
        quote: "He who finds diamonds must grapple in mud and mire because diamonds are not found in polished stones. They are made.",
        author: "Henry B. Wilson",
    },
    {
        quote: "If you're never scared or embarrassed or hurt, it means you never take any chances.",
        author: "Julia Sorel",
    },
    {
        quote: "Life is a risk.",
        author: "Diane Frolov",
    },
    {
        quote: "The policy of being too cautious is the greatest risk of all.",
        author: "Jawaharlal Nehru",
    },
    {
        quote: "Take calculated risks. That is quite different from being rash.",
        author: "George S. Patton",
    },
    {
        quote: "A likely impossibility is always preferable to an unconvincing possibility.",
        author: "Aristotle",
    },
    {
        quote: "Never leave that 'till tomorrow which you can do today.",
        author: "Benjamin Franklin",
    },
    {
        quote: "The greatest risk is the risk of riskless living.",
        author: "Stephen Covey",
    },
    {
        quote: "I don't think about risks much. I just do what I want to do. If you gotta go, you gotta go.",
        author: "Lillian Carter",
    },
    {
        quote: "It's lack of faith that makes people afraid of meeting challenges, and I believe in myself.",
        author: "Muhammad Ali",
    },
    {
        quote: "You always pass failure on the way to success.",
        author: "Mickey Rooney",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomNumber = Math.round(Math.random()*100/6);
// 어떻게 1~17까지의 숫자가 나오게 할수 있을까?

const todayQuote = quotes[randomNumber];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;