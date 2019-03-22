import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sql-string-converter',
  templateUrl: './sql-string-converter.component.html',
  styleUrls: ['./sql-string-converter.component.css']
})
export class SqlStringConverterComponent implements OnInit {

  stringToConvert: string = "wtf?";
  lineEndingPattern = /\r\n|[\r\n\u2028\u2029]/g;
  javaCharPattern = /\"|\+/g;

  constructor() { }

  ngOnInit() {
  }

  toJava(): void {
    if(!this.stringToConvert.startsWith('"')){
      let s = '"';
      s += this.stringToConvert.trim().replace(this.lineEndingPattern, '"+\r\n"');
      s += '"';
      this.stringToConvert = s;
    }
  }

  toSQL(): void {
    if(this.stringToConvert.startsWith('"')) {
      let s = this.stringToConvert.trim().replace(this.javaCharPattern, '');
      this.stringToConvert = s;
    }
  }
}
