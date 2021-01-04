import {BookType} from './book-type';
import {BookAuthor} from './book-author';
import {BookRating} from './book-rating';

export class Books {
  id: number;
  title: string;
  date: Date;
  description: string;
  imageName: string;
  image: string;
  retrievedImage: string;
  typeId: BookType;
  authorId: BookAuthor;
  ratingId: BookRating;
}
