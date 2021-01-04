import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor() { }

  private mainUrl = 'http://localhost:8080';

  get BOOK_URL(): string {
    return this.mainUrl + '/books';
  }

  get AUTHOR_URL(): string {
    return this.mainUrl + '/authors';
  }

  get RATING_URL(): string {
    return this.mainUrl + '/ratings';
  }

  get TYPE_URL(): string {
    return this.mainUrl + '/types';
  }

  get IMAGE_UPLOAD_URL(): string {
    return this.mainUrl + '/books/upload';
  }
}
