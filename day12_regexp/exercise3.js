const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

// after clean
// 'I am a teacher, and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?'

const cleanText = (text) => {
  return text.replace(/[%$@&#;!]/g, '')
}

const mostFrequentWords = (text, top = 3) => {
  const splittedWords = text.match(/\b\w+\b/g)
  const wordFrequency = {}

  for(const word of splittedWords) {
    wordFrequency[word] = wordFrequency[word] ? wordFrequency[word] + 1 : 1
  }

  return Object.entries(wordFrequency)
               .sort((w1, w2) => w2[1] - w1[1])
               .map((w) => { return { word: w[0], count: w[1] } })
               .splice(0, top)
}

mostFrequentWords(cleanText(sentence))
// [
//     {
//         "word": "I",
//         "count": 3
//     },
//     {
//         "word": "a",
//         "count": 2
//     },
//     {
//         "word": "teacher",
//         "count": 2
//     }
// ]
