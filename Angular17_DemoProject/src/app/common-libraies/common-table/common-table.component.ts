import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-common-table',
  standalone: true,
  imports: [FormsModule, NgFor, NgClass,],
  templateUrl: './common-table.component.html',
  styleUrl: './common-table.component.css'
})
export class CommonTableComponent {

  

  @Input() headers: string[] = [];
  @Input() data: any[] = [];
  ascendingClicked: boolean = false;
  descendingClicked: boolean = false;
  loading: boolean = false;
  errorLoading: boolean = false;

  constructor(private router: Router) { }
  getUserKeys(user: any): string[] {
    return Object.keys(user);
  }


  showRowDetails(data: any) {
    this.router.navigate(['show-details', data.id]);
  }

  sortByColumnAscending(columnIndex: number) {
    this.callPageLoader();
    this.ascendingClicked = true;
    this.descendingClicked = false;
    const columnKey = this.getColumnKey(columnIndex);
    this.data.sort((a, b) => {
      if (a[columnKey] < b[columnKey]) return -1;
      if (a[columnKey] > b[columnKey]) return 1;
      return 0;
    });
  }

  getColumnKey(columnIndex: number): string {
    const matchedHeader = this.toCamelCase(this.headers[columnIndex].replace(' ', ''));
    return matchedHeader
  }

  sortByColumnDescending(columnIndex: number) {
    this.callPageLoader();
    this.descendingClicked = true;
    this.ascendingClicked = false;
    const columnKey = this.getColumnKey(columnIndex);
    this.data.sort((a, b) => {
      if (a[columnKey] < b[columnKey]) return 1;
      if (a[columnKey] > b[columnKey]) return -1;
      return 0;
    });
  }

  toCamelCase(text: string) {
    return text.replace(/[_\-\s]([a-z])/ig, function (match, letter) {
      return letter.toUpperCase();
    }).replace(/^[A-Z]/, function (match) {
      return match.toLowerCase();
    });
  }

  callPageLoader() {
    this.loading = true;
    setTimeout(() => {
      this.errorLoading = true;
    }, 2000);
  }

}
