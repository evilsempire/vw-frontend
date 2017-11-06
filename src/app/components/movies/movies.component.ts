import {Component, OnInit} from '@angular/core';

import { MoviesService } from '../../services/movies.service'
import {PopularMovies} from '../../models/popular-movies';
import {UpcommingMovies} from '../../models/upcomming-movies';
import {TopRatedMovies} from '../../models/top-rated-movies';
import {SearchMovies} from '../../models/search-movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  nowPlaying: any;
  popularList: PopularMovies;
  upcomingList: UpcommingMovies;
  topRatedList: TopRatedMovies;
  searchRes: SearchMovies;
  searchStr: string;
  isLoading = true;

  constructor(private moviesService: MoviesService) {

    this.moviesService.getUpComingMovies(1).subscribe(res => {
      this.upcomingList = res;
    });

    this.moviesService.getTopRatedMovies().subscribe(res => {
      this.topRatedList = res;
    });
  }

  ngOnInit() {
    this.getNowPlayinMovies(1);
    this.getPopularMovies(1);
  }

  getNowPlayinMovies(page: number) {
    this.moviesService.getNowPlaying(page).subscribe( res => {
      this.nowPlaying = res;
      this.isLoading = false;
    });
  }

  getPopularMovies(page: number) {
    this.moviesService.getPopular(page).subscribe(res => {
      this.popularList = res;
      this.isLoading = false;
    });
  }

  changePageNowPlaying(event) {
    this.getNowPlayinMovies(event.pageIndex + 1);
  }

  changePagePopular(event) {
    this.getPopularMovies(event.pageIndex + 1);
  }

  changePageSearch(event) {
    this.searchMovies((event.pageIndex + 1).toString())
  }

  searchMovies(page: number) {
    this.moviesService.searchMovies(this.searchStr, page).subscribe( res => {
      this.searchRes = res;
    });
  }

}
