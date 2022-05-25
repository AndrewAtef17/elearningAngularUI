import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseService } from 'src/app/course.service'
@Component({
  selector: 'app-course-materials',
  templateUrl: './course-materials.component.html',
  styleUrls: ['./course-materials.component.css']
})
export class CourseMaterialsComponent implements OnInit {
  @Input()
  code!: string; 
  name!:string
  weeks!:number
  course:any
  allMaterials :any[] = []
  Materials:any
    constructor(private CourseService:CourseService) {
      /*const code = 'SWE490'
      const course = CourseService.getCourse(code)
      const materials:any = course.materials
      const week = 1 
      this.Materials = materials.week*/
     }
  
  async  ngOnInit() {
      this.course= await this.CourseService.getCourse(this.code)
      this.allMaterials = this.course.materials
      this.Materials = this.allMaterials[1]
      this.name = this.course.name
      this.weeks = this.allMaterials.length-1
    }
  //event binding, mestany event hat2asar 3ala component tany
    @Output() sendata: EventEmitter<any> = new EventEmitter<any>();
    onClicked(page:string){
        this.sendata.emit(page);
    }
  
    onOptionsSelected(value:string){
      let numValue = +value
      this.Materials = this.allMaterials[numValue]
      //allMaterials array
      //Materials array of objects, {key:assignment, value:url of assignment}
  }
  }