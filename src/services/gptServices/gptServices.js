import dotenv from "dotenv";
import axios from "axios";

dotenv.config();


export const getChatGPTResponse = async (prompt) => {
    try {
      const response = await axios.post(
        `${process.env.ENDPOINT_GPT}`,
        {
            prompt: prompt,
            max_tokens: 60,
            n: 1,
            stop: '\n',
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
      console.error('API isteği başarısız oldu:', error.message);
      throw error;
    }
  }