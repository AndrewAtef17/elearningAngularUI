import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {
  grades = [
    {
      img: "../../assets/grades.jpg",
      courseName: "User Interface Design",
      practical: '--',
      yearwork:  '--',
      midterm:  '--',
      quizzes:  '--',
      total:  'N/A',
    },
    {
      img: "../../assets/grades.jpg",
      courseName: "Cloud Computing",
      practical: '--',
      yearwork:  '--',
      midterm:  '--',
      quizzes:  '--',
      total:  'N/A',
    },
    {
      img: "../../assets/grades.jpg",
      courseName: "SW Maintainence",
      practical: '--',
      yearwork:  '--',
      midterm:  '--',
      quizzes:  '--',
      total:  'N/A',
    },
    {
      img: "../../assets/grades.jpg",
      courseName: "Saftey and critical systems",
      practical: '--',
      yearwork:  '--',
      midterm:  '--',
      quizzes:  '--',
      total:  'N/A',
    },
    {
      img: "../../assets/grades.jpg",
      courseName: "Big Data",
      practical: '--',
      yearwork:  '--',
      midterm:  '--',
      quizzes:  '--',
      total:  'N/A',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
