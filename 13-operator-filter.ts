import { filter, Observable } from 'rxjs';

export interface NewsItem {
  category: 'Bussiness' | 'Sports';
  content: string;
}

export class OperatorFilter {
  create() {
    const newsFeed$ = new Observable<NewsItem>((subscriber) => {
      setTimeout(() => {
        subscriber.next({
          category: 'Bussiness',
          content: 'A',
        });
      }, 1000);
      setTimeout(() => {
        subscriber.next({
          category: 'Sports',
          content: 'B',
        });
      }, 3000);
      setTimeout(() => {
        subscriber.next({
          category: 'Bussiness',
          content: 'C',
        });
      }, 4000);
      setTimeout(() => {
        subscriber.next({
          category: 'Sports',
          content: 'D',
        });
      }, 6000);
      setTimeout(() => {
        subscriber.next({
          category: 'Bussiness',
          content: 'E',
        });
      }, 7000);
      return () => {
        console.log('Teardown!');
      };
    });

    const sportsNewsFeed$ = newsFeed$.pipe(
      filter((e) => e.category === 'Sports')
    );
    const subsciption$ = sportsNewsFeed$.subscribe((e) => {
      console.log(e);
      if (e.content === 'D') {
        subsciption$.unsubscribe();
      }
    });
  }
  run() {
    this.create();
  }
}
