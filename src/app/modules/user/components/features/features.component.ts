import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  features: { icon: SafeHtml, title: string, description: string }[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const rawFeatures = [
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-book-open h-8 w-8 text-white"
                                data-lov-id="src/components/Features.tsx:60:18" data-lov-name="Icon"
                                data-component-path="src/components/Features.tsx" data-component-line="60"
                                data-component-file="Features.tsx" data-component-name="Icon"
                                data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D">
                                <path d="M12 7v14"></path>
                                <path
                                    d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                                </path>
                            </svg>`,
        title: "محتوى تعليمي متميز",
        description: "دورات عالية الجودة من خبراء متخصصين في مختلف المجالات"
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-users h-8 w-8 text-white"
                            data-lov-id="src/components/Features.tsx:60:18" data-lov-name="Icon"
                            data-component-path="src/components/Features.tsx" data-component-line="60"
                            data-component-file="Features.tsx" data-component-name="Icon"
                            data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>`,
        title: "مجتمع تفاعلي",
        description: "تفاعل مع المدرسين والطلاب في منصة تعليمية تفاعلية"
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-award h-8 w-8 text-white"
                            data-lov-id="src/components/Features.tsx:60:18" data-lov-name="Icon"
                            data-component-path="src/components/Features.tsx" data-component-line="60"
                            data-component-file="Features.tsx" data-component-name="Icon"
                            data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D">
                            <path
                                d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526">
                            </path>
                            <circle cx="12" cy="8" r="6"></circle>
                        </svg>`,
        title: "شهادات معتمدة",
        description: "احصل على شهادات معتمدة عند إتمام الدورات بنجاح"
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-smartphone h-8 w-8 text-white"
                            data-lov-id="src/components/Features.tsx:60:18" data-lov-name="Icon"
                            data-component-path="src/components/Features.tsx" data-component-line="60"
                            data-component-file="Features.tsx" data-component-name="Icon"
                            data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D">
                            <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                            <path d="M12 18h.01"></path>
                        </svg>`,
        title: "تعلم في أي وقت",
        description: "ادرس من أي مكان وفي أي وقت عبر جميع الأجهزة"
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-globe h-8 w-8 text-white"
                            data-lov-id="src/components/Features.tsx:60:18" data-lov-name="Icon"
                            data-component-path="src/components/Features.tsx" data-component-line="60"
                            data-component-file="Features.tsx" data-component-name="Icon"
                            data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                            <path d="M2 12h20"></path>
                        </svg>`,
        title: "محتوى باللغة العربية",
        description: "جميع الدورات متوفرة باللغة العربية لسهولة التعلم"
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-heart-handshake h-8 w-8 text-white"
                            data-lov-id="src/components/Features.tsx:60:18" data-lov-name="Icon"
                            data-component-path="src/components/Features.tsx" data-component-line="60"
                            data-component-file="Features.tsx" data-component-name="Icon"
                            data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D">
                            <path
                                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
                            </path>
                            <path
                                d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66">
                            </path>
                            <path d="m18 15-2-2"></path>
                            <path d="m15 18-2-2"></path>
                        </svg>`,
        title: "دعم مستمر",
        description: "فريق دعم متاح 24/7 لمساعدتك في رحلتك التعليمية"
      }
    ];

    this.features = rawFeatures.map(f => ({
      ...f,
      icon: this.sanitizer.bypassSecurityTrustHtml(f.icon)
    }));
  }
}
