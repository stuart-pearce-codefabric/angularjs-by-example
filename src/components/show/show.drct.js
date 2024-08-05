import { Directive, Input, OnInit } from '@angular/core';
import { ShowService } from '../../services/show.service';

@Directive({
  selector: 'show',
  templateUrl: 'components/show/show.tpl.html'
})
export class ShowDirective implements OnInit {
  @Input() show: any;
  genres: any[] = [];

  constructor(private showService: ShowService) {}

  ngOnInit() {
    this.showService.get(this.show.id).then(response => {
      this.genres = response.genres;
    });
  }
}
