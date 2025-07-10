import Prompt from "@/constant/Prompt";
import axios from 'axios';

// const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
const API_KEY = 'AIzaSyAuq5AcMBZ6e3-uhE7a2c9hJXeFOHaviF0';

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`;

export const generateCourseContent = async (topic) => {
    try {
        const response = await axios.post(
            `${API_URL}?key=${API_KEY}`,
            {
                contents: [{
                    parts: [{
                        text: `${topic}` + Prompt.IDEA
                    }]
                }],
                generationConfig: {
                    responseMimeType: "application/json",
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

// console.log("response : ", response.data)



        if (!response.data?.candidates?.[0]?.content?.parts?.[0]?.text) {
            throw new Error('Invalid response structure from API');
        }

        let jsonString = response.data.candidates[0].content.parts[0].text;

        // // console.log("json string : ", jsonString);

        // // Remove markdown if present
        // jsonString = jsonString.replace(/^```json|```$/g, '').trim();

        // // Fix common JSON issues
        // jsonString = jsonString
        //     .replace(/'/g, '"')
        //     .replace(/,\s*]/g, ']')
        //     .replace(/,\s*}/g, '}');

        return jsonString;
    } catch (error) {
        console.error('Error:', {
            message: error.message,
            responseData: error.response?.data,
            requestConfig: error.config
        });
        throw new Error(`Failed to generate content: ${error.message}`);
    }
};