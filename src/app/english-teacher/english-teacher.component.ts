import { Component } from '@angular/core';
import { AIAgentService } from '../aiagent.service';
import { inject } from "@angular/core";

@Component({
  selector: 'app-english-teacher',
  imports: [],
  templateUrl: './english-teacher.component.html',
  styleUrl: './english-teacher.component.scss'
})
export class EnglishTeacherComponent {
  constructor(private aIAgentService: AIAgentService){ }
  userText: string = '';
  correction: string = '';
  // private aIAgentService = inject(AIAgentService);


  getCorrection() {
    console.log(this.aIAgentService);
  }
}
