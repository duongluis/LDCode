import Prompt from "@/constant/Prompt";
import axios from 'axios';

const API_KEY = 'AIzaSyC94UGMwYds96BpVAlNANwiN0zNvIg56ZI';
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
                    responseMimeType: "application/json"
                }
            }
        );

        let jsonString = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

        // Loại bỏ markdown nếu có
        jsonString = jsonString.replace(/^```json|```$/g, '').trim();

        // Fix lỗi JSON phổ biến
        jsonString = jsonString
            .replace(/'/g, '"') // Thay ' bằng "
            .replace(/,\s*]/g, ']') // Xóa dấu phẩy thừa cuối mảng
            .replace(/,\s*}/g, '}'); // Xóa dấu phẩy thừa cuối object

        return JSON.parse(jsonString);
        // return jsonString;
    } catch (error) {
        console.error('Parse Error:', {
            response: response?.data,
            error: error.message
        });
        throw new Error(`Lỗi xử lý dữ liệu AI: ${error.message}`);
    }
};

