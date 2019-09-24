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
// SaveTeacher will get exectued when the user hits the save teacher button line23@app.component.html 
  saveBook():void{
    this.db.push({
      bookTitle: this.bookTitle,
      pubDate: new Date(this.pubDate),
      bookType: this.bookType,
      bookSum: this.bookSum
    });
  }
 
 // Get Hard Cover Number
 getHardCoverNo():number{
   let hardNo = 0;
   for (let i = 0; i < this.db.length ; i++) {
    if(this.db[i].bookType === 'Hard Cover') {
      hardNo ++;
    } 
  }
  return hardNo;
 }

 //Get Book Length
 getNo():number{
  let number = this.db.length;
  return number
 }

 // Splices beginning at the end of the array as if it began from the beginning
 // the following array index will be re-indexed as the deleted array
 // Deletes Hard Cover 
 deleteHardCover():void{
    for (let i = this.db.length -1; i >= 0; i--) {
      if(this.db[i].bookType === 'Hard Cover') {
        this.db.splice(i,1);
      } 
    }
 }

 // Deletes Book from Table
 deleteBook(book: string):void{
  const index: number = this.db.indexOf(book);
  if (index !== -1) {
      this.db.splice(index, 1);
  }        
}


}


