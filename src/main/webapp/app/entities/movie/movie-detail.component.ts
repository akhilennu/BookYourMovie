import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IMovie } from 'app/shared/model/movie.model';

@Component({
    selector: 'jhi-movie-detail',
    templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {
    movie: IMovie;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ movie }) => {
            this.movie = movie;
        });
    }

    previousState() {
        window.history.back();
    }
}
