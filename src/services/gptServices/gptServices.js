import dotenv from "dotenv";
import axios from "axios";

dotenv.config();


export const getChatGPTResponse = async (prompt) => {
    try {
      const response = await axios.post(
        `${process.env.ENDPOINT_GPT}`,
        {
          prompt: "How are you?",
          model: "gpt-3.5-turbo",
          max_tokens: 10,
          temperature: 0,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.GPT_TOKEN_KEY}`,
          },
        }
      );
  
      const completion = response.data.choices[0].text;
      
      return completion;
    } catch (error) {
      console.error('API isteği başarısız oldu:', error);
      throw error;
    }
  }