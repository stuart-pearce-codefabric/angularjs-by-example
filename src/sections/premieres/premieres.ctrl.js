import { Component, OnInit } from '@angular/core';
import { PageValues } from '../../services/page.val';

@Component({
  selector: 'app-premieres',
  templateUrl: './premieres.tpl.html',
  styleUrls: ['./premieres.css']
})
export class PremieresController implements OnInit {
  shows: any[] = [];

  constructor(private pageValues: PageValues) {}

  ngOnInit() {
    // Set page title and description
    this.pageValues.title = "PREMIERES";
    this.pageValues.description = "Brand new shows showing this month.";

    // Setup view model object
    this.shows = shows;
  }
}
