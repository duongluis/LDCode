import Back from '@/components/Main/Back';
import HeaderView from '@/components/Main/HeaderView';
import Colors from '@/constant/Colors';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function QuestionView() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Làm sao để hiển thị phần bài tập?",
      answer: "Bạn cần tham gia ít nhất 1 khóa học để có thể hiển thị phần bài tập."
    },
    {
      question: "Tôi muốn xem tiến độ học của tôi?",
      answer: "Bạn vào phần thông tin cá nhân, sau đó chọn tiến trình, ở đó bạn có thể xem được tiến độ học của bạn."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <View style={styles.container}>
      <HeaderView text={"Câu hỏi thường gặp"}/>
      <Back/>
      {/* <Text style={styles.header}>Câu hỏi thường gặp</Text> */}

      <ScrollView style={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <View key={index} style={styles.faqItem}>
            <TouchableOpacity
              style={styles.questionContainer}
              onPress={() => toggleFAQ(index)}
            >
              <Text style={styles.questionText}>{faq.question}</Text>
              <Ionicons
                name={activeIndex === index ? "chevron-up" : "chevron-down"}
                size={20}
                color={Colors.Black}
              />
            </TouchableOpacity>

            {activeIndex === index && (
              <View style={styles.answerContainer}>
                <Text style={styles.answerText}>{faq.answer}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.White,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.Black,
    textAlign: 'center',
  },
  faqContainer: {
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: Colors.White,
    overflow: 'hidden',
    elevation: 2,
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  questionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: Colors.Black,
  },
  answerContainer: {
    padding: 15,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: Colors.LightGray,
  },
  answerText: {
    fontSize: 14,
    color: Colors.Default,
    lineHeight: 20,
  },
});