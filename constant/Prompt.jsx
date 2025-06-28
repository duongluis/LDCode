import dedent from 'dedent';

export default {
  IDEA: dedent
    `you as a coaching teacher 
- Generate 1 course must include:
* short title
* unique id
* short description for course
* 5 chapter titles and description for each chapter with 2-3 sentences
* each chapter has 5-7 lesson with text only 
* each chapter has unique id 
- Return STRICTLY in JSON format
- Do not add plain text in output or markdown
- Each Chapter has 5 exercises about true/false or choose the right choice 
- Each lesson has example by text
- each chapter has example and console and output dont have plain text 
  - max characters is 7000 characters
  - su dung 
 - Create data in this EXACT JSON format:

  [
    {
      "id": unique only number id(convert inputtext into number to get unique id)
      "title": "Short course name",
      "description": "One-sentence description",
      "progress": 0 - 100(min to max),
      "completed_chapter": []
      "chapters": [
        {
          "chapter_id": "CHF103",
          "doc_id": coure_id 
        "chapter_title": "Operators",
          "chapter_description": "Explore operators, which are used to perform operations on variables and values. We"ll cover arithmetic, comparison, and logical operators.",
        "status": incompleted/ completed,
        "lessons": [
          {
            "lesson_title": "Arithmetic Operators",
            "lesson_text": "JavaScript provides arithmetic operators like  (addition),  (subtraction), (multiplication)(division), (modulo), and  (exponentiation). These operators allow you to perform mathematical calculations in your code. Always be mindful of operator precedence."
            "example": {
              "console": where you put text in console
              "output": the output when run that console
            }
          },
          {
            "lesson_title": "Comparison Operators",
            "lesson_text": "Comparison operators  are used to compare values and return a boolean result.  Using strict comparison is generally recommended."
            "example": {
              "console": where you put text in console
              "output": the output when run that console
            }
          },
          {
            "lesson_title": "Logical Operators",
            "lesson_text": "Logical operators  are used to combine or negate boolean expressions.  returns true if both operands are true,  returns true if at least one operand is true, and  negates the operand. Logical operators are frequently used in conditional statements."        
            "example": {
              "console": where you put text in console
              "output": the output when run that console
            }
          }
        ],
        }
  ],
  "exercises": [
    "status":incompleted/completed,
    "doc_id":course_id
    {
      "id": "exercise id"
        "quest": "long question",
      "answer": [
        {
          answer_text: "answer_1"
              correct: "true/false"
        },
        {
          answer_text: "answer_2"
              correct: "true/false"
        },
        {
          answer_text: "answer_3"
              correct: "true/false"
        },
        {
          answer_text: "answer_4"
              correct: "true/false"
        }
      ],
      "id": "exercise id"
            "quest": "short question ",
      "answer": [
        {
          answer_text: "true"
              correct: "true/false"
        },
        {
          answer_text: "false"
              correct: "true/false"
        },
      ]
    }
  ]
}
]`


  ,
COURSE: dedent`: you as a coaching teacher \n
 - Generate 5-7 course titles (short)
  - For each course, create: image concept, description (3 sentences), 5 chapters
  - Return STRICTLY in this JSON format`
  ,

  TOPICS: dedent`: you as a coaching teacher
- Generate 5-7 course titles (short)
  - For each course, create: image concept, description (3 sentences), 5 chapters
  - Return STRICTLY in this JSON format`
};


// `you as a coaching teacher \n
// - Generate 1 course must include:\n\n
// * short title\n
// * short description for course\n
// * 5 chapter titles and description for each chapter with 2-3 sentences\n
// - Return STRICTLY in JSON format
// - Do not add plain text in output or markdown`
// * image concept description (for AI image generation)\n



// `: with that topic , Act as an educational content generator. Create data in this EXACT JSON format:

// {
//   "courses": [
//     {
//       "title": "Short course name",
//       "description": "One-sentence description",
//       "chapters": ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5"]
//     }
//   ]
// }

// STRICT REQUIREMENTS:
// 1. Generate 3-5 courses about:
// 2. Each course must include:
//    - Title (max 5 words)
//    - 1-sentence description
//    - Exactly 5-7 chapters (specific skills/concepts)
// 3. Return ONLY raw JSON with no additional text
// 4. Ensure chapters are logically related to the title`

// "excercises": [
//   {
//     "id":"exercise_id"
//     "quest": "short question ",
//     "answer":[
//     {
//       answer_text:"answer_1"
//       correct:"true/false"
//     },
//     {
//       answer_text:"answer_1"
//       correct:"true/false"
//     },
//     {
//       answer_text:"answer_1"
//       correct:"true/false"
//     },
//     {
//       answer_text:"answer_1"
//       correct:"true/false"
//     }
//     ]


