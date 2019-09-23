import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bookTitle = '';
  pubDate = '';
  bookType = '';
  bookSum = '';
  db = [];
  toggleTitle = "Student"
  fees = 0;
  school = '';
  isTeacher: boolean = true;
//SaveTeacher will get exectued when the user hits the save teacher button line23@app.component.html 
  saveBook() {
    this.db.push({
      bookTitle: this.bookTitle,
      pubDate: new Date(this.pubDate),
      bookType: this.bookType,
      bookSum: this.bookSum
    });
    //reset the input feilds
    this.bookTitle = '';
    this.pubDate = '';
    this.bookType = '';
    this.bookSum = '';
  }

//Deletes Hard Cover 
 deleteHard() {
    
 }

 //Deletes Book from Table
deleteBook(book: string) {
  const index: number = this.db.indexOf(book);
  if (index !== -1) {
      this.db.splice(index, 1);
  }        
}

}


