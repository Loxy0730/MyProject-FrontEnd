import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    responseType: 'text',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private apiUrl = 'http://localhost:8088/member/create';

  constructor(private http: HttpClient) {}

  // 註冊會員（發送 JSON 格式的請求）
  registerMember(member: any) {
    return this.http.post(this.apiUrl, member, { responseType: 'text' });
    // return this.http.post<any>(this.apiUrl, member, httpOptions);
  }
}
