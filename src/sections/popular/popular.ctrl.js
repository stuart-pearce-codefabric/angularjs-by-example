import { Component, OnInit } from '@angular/core';
import { PageValues } from '../../services/page.val';
import { ShowService } from '../../services/show.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.tpl.html',
  styleUrls: ['./popular.css']
})
export class PopularController implements OnInit {
  shows: any[] = [];

  constructor(private pageValues: PageValues, private showService: ShowService) {}

  ngOnInit() {
    // Set page title and description
    this.pageValues.title = "POPULAR";
    this.pageValues.description = "The most popular TV shows.";

    // Fetch popular shows
    this.showService.getPopular().then(shows => {
      this.shows = shows;
    });
  }
}
