import { Component, OnInit } from '@angular/core';
import { PageValues } from '../../services/page.val';
import { ShowService } from '../../services/show.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.tpl.html',
  styleUrls: ['./view.css']
})
export class ViewController implements OnInit {
  show: any = {};

  constructor(
    private pageValues: PageValues,
    private showService: ShowService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Set page title and description
    this.pageValues.title = "VIEW";
    this.pageValues.description = "Overview, seasons & info for '" + this.show.original_name + "'.";

    // Setup view model object
    this.route.data.subscribe(data => {
      this.show = data.show;
      this.show.cast = [];
      this.showService.getCast(this.show.id).then(response => {
        this.show.cast = response.cast;
      });
    });
  }

  setBannerImage() {
    return {
      'background': 'url() no-repeat',
      'background-size': '100%',
      'background-position': '100% 0%'
    };
  }
}
