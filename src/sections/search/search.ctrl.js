import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShowService } from '../../services/show.service';
import { PageValues } from '../../services/page.val';

@Component({
  selector: 'app-search',
  templateUrl: './search.tpl.html',
  styleUrls: ['./search.css']
})
export class SearchController implements OnInit {
  query: string | null = null;
  shows: any[] = [];
  loading: boolean | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private showService: ShowService,
    private pageValues: PageValues
  ) {}

  ngOnInit() {
    // Set page title and description
    this.pageValues.title = "SEARCH";
    this.pageValues.description = "Search for your favorite TV shows.";

    // Perform search if query is present in route params
    this.route.params.subscribe(params => {
      if (params['query']) {
        this.performSearch(params['query']);
        this.query = decodeURI(params['query']);
      }
    });
  }

  setSearch() {
    const query = encodeURI(this.query || '');
    this.router.navigate(['/search', query]);
  }

  performSearch(query: string) {
    this.loading = true;
    this.showService.search(query).then(response => {
      this.shows = response;
      this.loading = false;
    });
  }
}
