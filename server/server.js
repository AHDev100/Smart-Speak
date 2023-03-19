const { Configuration, OpenAIApi } = require('openai'); 
const cors = require('cors'); 
const express = require('express'); 
const app = express(); 

const PORT = 4000; 

app.use(express.json()); 
app.use(cors()); 

const configuration = new Configuration({
    apiKey: "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",
  });
const openai = new OpenAIApi(configuration);

//Handling POST Requests (posting new messages)
app.post('/', async (req, res) => {
    const { prompt } = req.body; 

    try {
      const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: prompt,
          temperature: 0.7,
          max_tokens: 60,
      });

      const answer = response.data.choices[0].text; 
      res.json({answer}); 
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Something went wrong" });
    }
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`); 
}); 