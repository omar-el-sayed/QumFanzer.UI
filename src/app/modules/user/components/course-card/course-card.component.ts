import { Component } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  formatNumber(num: number): string {
    return num.toLocaleString();
  }
  courses: any[] = [
    {
      title: "أصول الإيمان",
      instructor: 'د. أحمد مختار',
      rating: 4.8,
      students: 1250,
      duration: "40 ساعة",
      price: "0",
      image: "/placeholder.svg",
      level: "متوسط",
      category: "عقيدة"
    },
    {
      title: "كتاب الإكسير",
      instructor: 'د. أحمد مختار',
      rating: 4.9,
      students: 890,
      duration: "25 ساعة",
      price: "0",
      image: "/placeholder.svg",
      level: "مبتدئ",
      category: "فقه"
    },
    {
      title: "سلسلة التيجان",
      instructor: 'د. أحمد مختار',
      rating: 4.7,
      students: 2100,
      duration: "30 ساعة",
      price: "0",
      image: "/placeholder.svg",
      level: "متقدم",
      category: "تفسير"
    },
    {
      title: 'حلية طالب العلم',
      instructor: 'د. أحمد مختار',
      rating: 4.9,
      students: 1680,
      duration: "50 ساعة",
      price: "0",
      image: "/placeholder.svg",
      level: "متقدم",
      category: "آداب طالب العلم"
    },
    {
      title: "التسويق الرقمي ووسائل التواصل الاجتماعي",
      instructor: 'د. أحمد مختار',
      rating: 4.6,
      students: 950,
      duration: "20 ساعة",
      price: "0",
      image: "/placeholder.svg",
      level: "مبتدئ",
      category: "تسويق"
    },
    {
      title: "أمن المعلومات والحماية السيبرانية",
      instructor: 'د. أحمد مختار',
      rating: 4.8,
      students: 750,
      duration: "35 ساعة",
      price: "0",
      image: "/placeholder.svg",
      level: "متوسط",
      category: "أمن"
    }
  ];
}
