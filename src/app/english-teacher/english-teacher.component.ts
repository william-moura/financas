import { Component } from '@angular/core';
import { AiagentService } from '../aiagent.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-english-teacher',
  imports: [FormsModule],
  templateUrl: './english-teacher.component.html',
  styleUrl: './english-teacher.component.scss'
})
export class EnglishTeacherComponent {
  userText: string = '';
  correction: string|undefined = '';
  constructor(private aiagente: AiagentService){}

  getCorrection() {
    this.aiagente.getEnglishCorrection(this.userText).then((response) => {
        this.correction = response.text
    })
    .catch((error) => console.log(error));
  }
}
