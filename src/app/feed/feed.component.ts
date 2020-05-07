import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  fotos: any[];

  constructor(
    private _feedService: FeedService
  ) { }

  ngOnInit(): void {
    this._feedService.getFotos()
      .subscribe(data => this.fotos = data.imagens);
  }

  deletar(index: number) {
    this.fotos.splice(index, 1);
  }

}
