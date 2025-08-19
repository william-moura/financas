import { Injectable } from '@angular/core';
import { GenerateContentResponse, GoogleGenAI } from '@google/genai';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AiagentService {
  private ai = new GoogleGenAI({apiKey: environment.apiKey});
  async getEnglishCorrection(text: string): Promise<GenerateContentResponse> {
    return await this.ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: text,
    });
  }
}
