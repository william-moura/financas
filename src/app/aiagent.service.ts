import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AIAgentService {
  private apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent://api.openai.com/v1/chat/completions';
  private apiKey = 'AIzaSyCHEPmPeT10AedMVcm9QSg6v9o4YEoWhng'; // Substitua pela sua chave
  constructor(private http: HttpClient) { }
  getEnglishCorrection(text: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const body = {
      model: "gpt-4-turbo",
      messages: [
        {
          role: "system",
          content: "You are a friendly English tutor. Correct any mistakes, explain grammar rules, and provide examples."
        },
        {
          role: "user",
          content: text
        }
      ],
      temperature: 0.7
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
