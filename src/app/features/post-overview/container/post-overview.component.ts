import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, combineLatest, Subscription } from 'rxjs';
import { Post } from '../../../models/posts.model';
import { ActivatedRoute } from '@angular/router';
import { PostOverviewService } from '../services/post-overview.service';

@Component({
  selector: 'app-post-overview',
  templateUrl: './post-overview.component.html',
  styleUrls: ['./post-overview.component.scss'],
})
export class PostOverviewComponent implements OnInit, OnDestroy {
  posts$: Observable<Post[]>;
  postSub: Subscription;
  id: string;

  constructor(
    private service: PostOverviewService,
    private currentRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Combine 2 Observables into 1 in order to check and make api call based on current url
    this.postSub = combineLatest([
      this.currentRoute.params,
      this.currentRoute.queryParams
    ])
    .subscribe(([params, query]) => {
      if (query.q !== undefined) {
        this.posts$ = this.service.searchPosts(params.blogId, query.q);
      } else {
        this.id = params.blogId;
        this.posts$ = this.service.getPosts(params.blogId);
      }
    });

  }

  onShowDetail(postId: string) {
    console.log('PostOverviewComponent > Clicked Post with id:', postId);
  }

  /**
   * Event handler for deleting posts from `post-item.component.html` event emitter
   * Modifies posts observable
   * @param location contains identifiers for current blog and post
   */
  removePostFrom({ blogId, postId }) {
    this.service.removePostFrom(blogId, postId);
    console.log('Remove Post', blogId, postId);
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
