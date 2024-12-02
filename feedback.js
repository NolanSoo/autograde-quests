// Import the Groq SDK  
import Groq from "https://cdn.jsdelivr.net/npm/groq-sdk@0.8.0/+esm";  
  
// Initialize the Groq client  
const client = new Groq({  
  apiKey: "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",  
  dangerouslyAllowBrowser: true,  
});  
  
// Function to get feedback from the model  
async function feedback(inputEssaysMG, inputGradesMG, inputEssaysSG, inputGradesSG, inputFeedbackMG, subgradePredictions, predictedGrade, essayInput, promptInput, rubricInput) {  
  // Call the Groq API to get the feedback  
  const params = {  
   messages: [  
    {  
      role: "system",  
      content: `Give feedback on this essay: ${essayInput}`,  
    },  
   ],  
   model: "llama3-8b-8192",  
  };  
  const chatCompletion = await client.chat.completions.create(params);  
  const feedback = chatCompletion.choices[0].message.content;  
  return feedback;  
}  
  
export { feedback };
