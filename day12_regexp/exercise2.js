const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

const tenMostFrequentWords = (text) => {
  const splittedWords = text.match(/\b\w+\b/g)
  const wordFrequency = {}

  for(const word of splittedWords) {
    wordFrequency[word] = wordFrequency[word] ? wordFrequency[word] + 1 : 1
  }

  return Object.entries(wordFrequency)
               .sort((w1, w2) => w2[1] - w1[1])
               .map((w) => { return { word: w[0], count: w[1] } })
               .splice(0, 10)
}

tenMostFrequentWords(paragraph)
// [
//     {
//         "word": "love",
//         "count": 6
//     },
//     {
//         "word": "you",
//         "count": 5
//     },
//     {
//         "word": "can",
//         "count": 3
//     },
//     {
//         "word": "I",
//         "count": 2
//     },
//     {
//         "word": "teaching",
//         "count": 2
//     },
//     {
//         "word": "do",
//         "count": 2
//     },
//     {
//         "word": "not",
//         "count": 2
//     },
//     {
//         "word": "what",
//         "count": 2
//     },
//     {
//         "word": "else",
//         "count": 2
//     },
//     {
//         "word": "If",
//         "count": 1
//     }
// ]
