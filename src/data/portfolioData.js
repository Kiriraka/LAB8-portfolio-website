import img1 from '../assets/images/Portfolio-Website.png';
import img2 from '../assets/images/Weather-App.png';
import img3 from '../assets/images/React-workshop.png';

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "เว็บไซต์พอร์ตโฟลิโอส่วนตัวที่พัฒนาด้วย React และ Vite เพื่อแสดงผลงาน ทักษะ และข้อมูลติดต่อ พร้อมดีไซน์สวยงามและรองรับทุกอุปกรณ์",
    image: img1,
    tags: ["HTML", "CSS", "JavaScript", "React", "Vite"],
    link: "https://nimble-halva-ea728e.netlify.app/",
    github: "https://github.com/Kiriraka/portfolio-website?tab=readme-ov-file"
  },
  {
    id: 2,
    title: "Weather App",
    description: "แอปตรวจสอบสภาพอากาศที่ดึงข้อมูลแบบเรียลไทม์จาก OpenWeather API ให้ผู้ใช้ค้นหาเมืองและดูอุณหภูมิ สภาพอากาศ และพยากรณ์ได้อย่างรวดเร็ว",
    image: img2,
    tags: ["HTML", "CSS", "JavaScript", "React", "Vite", "OpenWeather API"],
    link: "https://enchanting-chebakia-19cfe2.netlify.app/",
    github: "https://github.com/Kiriraka/my-weather-app"
  },
  {
    id: 3,
    title: "React Workshop",
    description: "โปรเจ็กต์เวิร์กชอป React ที่สาธิตการใช้ JSX การสร้างคอมโพเนนต์ การส่งค่า props และการจัดการ state เพื่อทำความเข้าใจพื้นฐานการพัฒนาเว็บด้วย React",
    image: img3,
    tags: ["HTML", "CSS", "JavaScript", "React", "Vite", "JSX"],
    link: "https://react-workshop168.netlify.app/",
    github: "https://github.com/Kiriraka/react-workshop"
  }
];
