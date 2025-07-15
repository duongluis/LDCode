import { generateCourseContent } from '@/config/AIModel';
import { db } from '@/config/firebaseConfig';
import Colors from '@/constant/Colors';
import { UserDetailContext } from '@/context/UserDetailContext';
import { useRouter } from 'expo-router';
import { doc, setDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function addCourse() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [course, setCourse] = useState(null);
    const [task, setTask] = useState(null);
    const { userDetail, setUserDetail } = useContext(UserDetailContext);

    const handleGenerate = async () => {
        if (!userInput.trim()) {
            Alert.alert('Lỗi', 'Vui lòng nhập chủ đề khóa học');
            return;
        }

        setIsLoading(true);
        try {
            const generatedCourse = await generateCourseContent(userInput);
            setCourse(generatedCourse);

            console.log("test 1 :", JSON.parse(generatedCourse)[0])

            // generatedCourse.forEach(async (element) => {
            //     await saveCourse(element);

            // });

            // const firstCourse = JSON.parse(generatedCourse)[0];
            // const data = {
            //     banner_image: "/banner1.png",
            //     id: firstCourse?.id ,
            //     title: firstCourse?.title,
            //     chapters: firstCourse?.chapters,
            //     exercises: firstCourse?.exercises,
            //     description: firstCourse?.description,
            //     createdAt: firstCourse?.id ,
            //     createdBy: userDetail?.email,
            //     progress: firstCourse?.progress,
            //     completed_chapters : firstCourse?.completed_chapter,
            // }
            // console.log("data : ",data)
            
            await saveCourse(JSON.parse(generatedCourse)[0]);
            
            Alert.alert('Thành công', 'Khóa học đã được tạo thành công!');

            // await saveCourse(generatedCourse);
            router.push('/tabs/main');
        } catch (error) {
            console.error('Generation Error:', error);
            Alert.alert('Lỗi', 'Không thể tạo khóa học: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    };



    const saveCourse = async (courseData) => {
        try {
            const courseId = Date.now().toString();
            const firstCourse = courseData;
            const chapter = [
                {
                    "courses": [
                        {
                            "title": "Introduction to Programming Fundamentals",
                            "description": "This course provides a foundation in programming concepts applicable across languages. Learn about variables, data types, control flow, and basic algorithms.",
                            "chapters": [
                                {
                                    "id": 1,
                                    "title": "Variables and Data Types",
                                    "description": "Understand what variables are and how they store information. Explore different data types like integers, floats, strings, and booleans.",
                                    "detail": "Variables are named storage locations in a computer's memory.  They hold data that a program can manipulate. Data types define the kind of data a variable can store (e.g., numbers, text, true/false values).  Common data types include integers (whole numbers), floating-point numbers (numbers with decimal points), strings (text), and booleans (true/false).  Choosing the appropriate data type is crucial for efficient memory usage and accurate calculations.  Consider the range of values you need to store and the operations you'll be performing on the data. Improper data type usage can lead to errors or unexpected behavior in your program. Learn about type casting and implicit type conversions."
                                },
                                {
                                    "id": 2,
                                    "title": "Operators and Expressions",
                                    "description": "Learn about arithmetic, comparison, and logical operators and how they are used to form expressions.",
                                    "detail": "Operators are symbols that perform specific operations on one or more operands (values or variables). Arithmetic operators (+, -, *, /, %) perform mathematical calculations. Comparison operators (==, !=, >, <, >=, <=) compare two values and return a boolean result (true or false). Logical operators (AND, OR, NOT) combine boolean expressions to create more complex conditions. Expressions are combinations of variables, operators, and values that evaluate to a single value. The order of operations (PEMDAS/BODMAS) determines the sequence in which operators are applied in an expression. Understanding operator precedence is essential for writing correct and predictable code. Use parentheses to explicitly control the order of operations when needed."
                                },
                                {
                                    "id": 3,
                                    "title": "Control Flow: Conditional Statements",
                                    "description": "Explore conditional statements like 'if', 'else if', and 'else' to control the flow of execution based on conditions.",
                                    "detail": "Conditional statements allow a program to execute different blocks of code based on whether a condition is true or false. The 'if' statement executes a block of code only if the condition is true. The 'else' statement provides an alternative block of code to execute if the 'if' condition is false. 'else if' (or 'elif' in Python) allows you to chain multiple conditions together. The conditions are evaluated in order, and the first one that evaluates to true will have its corresponding block of code executed. You can nest conditional statements within each other to create more complex decision-making logic. Ensure that your conditions are clear and unambiguous to avoid unexpected behavior. Proper indentation is crucial for readability and for defining the scope of each code block within the conditional statement."
                                },
                                {
                                    "id": 4,
                                    "title": "Control Flow: Loops",
                                    "description": "Learn about 'for' and 'while' loops to repeat code blocks multiple times.",
                                    "detail": "Loops allow you to repeatedly execute a block of code until a certain condition is met. 'For' loops are typically used to iterate over a sequence of items (e.g., a list, a string). 'While' loops continue executing as long as a condition remains true. It is crucial to ensure that the condition in a 'while' loop eventually becomes false to avoid an infinite loop. Use 'break' statements to exit a loop prematurely, and 'continue' statements to skip the current iteration and proceed to the next. Loops can be nested within each other to perform more complex iterative tasks. Carefully consider the termination condition and the potential for infinite loops when designing loops."
                                }
                            ]
                        },
                        {
                            "title": "Web Development Essentials: HTML, CSS, JavaScript",
                            "description": "Get started with web development by learning the fundamental languages: HTML for structure, CSS for styling, and JavaScript for interactivity.",
                            "chapters": [
                                {
                                    "id": 1,
                                    "title": "HTML Structure and Semantics",
                                    "description": "Learn the basic HTML tags and how to structure a webpage with proper semantics.",
                                    "detail": "HTML (HyperText Markup Language) provides the structure and content of a webpage. It uses tags (enclosed in angle brackets) to define elements. Semantic HTML uses tags that convey meaning about the content, such as `<article>`, `<nav>`, and `<aside>`. Proper use of headings (`<h1>` to `<h6>`), paragraphs (`<p>`), lists (`<ul>`, `<ol>`, `<li>`), and images (`<img>`) is essential for creating a well-structured and accessible webpage. Attributes provide additional information about HTML elements. Using semantic HTML not only improves accessibility for screen readers but also helps search engines understand the content better. Validate your HTML code to ensure it is well-formed and follows standards."
                                },
                                {
                                    "id": 2,
                                    "title": "CSS Styling and Layout",
                                    "description": "Understand how CSS is used to style HTML elements and control the layout of a webpage.",
                                    "detail": "CSS (Cascading Style Sheets) controls the visual presentation of a webpage, including colors, fonts, layout, and responsiveness. CSS rules consist of selectors (which target specific HTML elements) and declarations (which define the styles to apply). The box model defines the space an element occupies, including its content, padding, border, and margin. Different CSS layout techniques, such as Flexbox and Grid, provide powerful ways to arrange elements on the page. Inline styles, internal styles, and external stylesheets are different ways to apply CSS rules to an HTML document. External stylesheets are the preferred method for maintaining a clean and organized codebase. Learn about CSS selectors, specificity, and inheritance to understand how styles are applied."
                                },
                                {
                                    "id": 3, "title": "JavaScript Basics: Variables, Functions, and Events",
                                    "description": "Explore the fundamentals of JavaScript, including variables, functions, and event handling.",
                                    "detail": "JavaScript is a programming language that adds interactivity to webpages. Variables store data that JavaScript can manipulate. Functions are reusable blocks of code that perform specific tasks. Events are actions that occur in the browser (e.g., button clicks, mouse movements), and JavaScript can be used to respond to these events. The Document Object Model (DOM) represents the HTML structure of a webpage as a tree-like structure that JavaScript can access and modify. Learn about data types (strings, numbers, booleans, arrays, objects) in JavaScript.  Understanding asynchronous programming and callbacks is crucial for handling events and making web applications responsive. Use the browser's developer console to debug JavaScript code."
                                }
                            ]
                        },
                        {
                            "title": "Python for Data Analysis",
                            "description": "Learn how to use Python for data analysis. The course will cover the basics of Python, NumPy, Pandas, and data visualization.",
                            "chapters": [
                                {
                                    "id": 1,
                                    "title": "Introduction to Data Analysis with Python",
                                    "description": "An introduction to the field of data analysis and how Python can be used to analyze data effectively.",
                                    "detail": "Data analysis is the process of inspecting, cleaning, transforming, and modeling data to discover useful information, draw conclusions, and support decision-making. Python, with its rich ecosystem of libraries, is a powerful tool for data analysis. The course will begin with an overview of the data analysis process and the role of Python in each stage."
                                },
                                {
                                    "id": 2,
                                    "title": "NumPy Fundamentals",
                                    "description": "Learn about NumPy arrays, which are the foundation for numerical computing in Python.",
                                    "detail": "NumPy (Numerical Python) is a fundamental library for numerical computing in Python. It provides support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays. This chapter will cover the basics of NumPy arrays, including how to create, index, slice, and reshape them."
                                },
                                {
                                    "id": 3,
                                    "title": "Pandas Fundamentals",
                                    "description": "Learn how to use Pandas to work with tabular data in Python.",
                                    "detail": "Pandas is a powerful library for data manipulation and analysis in Python. It introduces two new data structures to Python: Series and DataFrame. A Series is a one-dimensional labeled array, while a DataFrame is a two-dimensional table with columns of potentially different types. This chapter will cover the basics of Pandas, including how to create DataFrames, read data from various file formats, and perform basic data manipulation operations."
                                }
                            ]
                        }
                    ]
                }
            ]

            // chapter[0].courses.forEach(async (element) => {
            //     console.log("element : ", element.index);


            console.log("firstCourse : ", firstCourse);
            const data = {
                banner_image: "/banner1.png",
                id: courseData?.id || courseId,
                title: courseData?.title,
                chapters: courseData?.chapters,
                exercises: courseData?.exercises,
                description: courseData?.description,
                createdAt: courseId,
                createdBy: userDetail?.email,
                progress: courseData?.progress,
                completed_chapters : courseData?.completed_chapter, 
            }


            await setDoc(doc(db, 'courses', courseData?.id.toString()), data);
            // });

            setUserInput('');
            setCourse(null);
        } catch (error) {
            console.error('Save Error:', error);
            Alert.alert('Error: ' + error.message);
        }
    };

    // const saveTask= async(courseData)=>{
    //         try {
    //         const courseId = Date.now().toString();
    //         const firstCourse = courseData?.courses[0];
        
    //         const data = {
    //             banner_image: "/task.png",
    //             id: firstCourse.id || courseId,
    //             title: firstCourse?.title,
    //             tasks:firstCourse?.excercises,
    //             description: firstCourse?.description,
    //             createdAt: courseId,
    //             createdBy: userDetail?.email,
    //         }
    //         console.log("data when save task : ", data)
    //         await setDoc(doc(db, 'tasks', data.title), data);
    //         // });

    //         setUserInput('');
    //         setCourse(null);
    //     } catch (error) {
    //         console.error('Save Error:', error);
    //         Alert.alert('Lỗi', 'Không thể lưu bai tap: ' + error.message);
    //     }
    // }

    return (
        <View style={{
            padding: 25,
            backgroundColor: Colors.White,
            flex: 1
        }}>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 30
            }}>Đây là trang dùng để tạo khóa học</Text>
            <Text> Nhập môn học bạn muốn tạo</Text>

            <TextInput placeholder='Ex. Javascript cơ bản'
                style={[styles.textInput]}
                numberOfLines={3}
                onChangeText={(value) => setUserInput(value)} />
            <TouchableOpacity style={[styles.button]}
                onPress={handleGenerate}
                disabled={isLoading || !userInput.trim()}

            >
                {!isLoading ?
                    <Text style={styles.buttonText}>Tạo khóa học</Text> :
                    <ActivityIndicator size={'large'} color={Colors.Default} />}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
    padding: 15,
        width: '100%',
        borderRadius: 15,
        marginTop: 15,
        backgroundColor: Colors.Default,
    },
    buttonText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color:Colors.White
    },
    textInput: {
        minWidth: 200,
        maxWidth: 600,
        textInput: '100%',
        paddingTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 16,
        marginTop: 25
    }
})

