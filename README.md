# NewsAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Prerequisite
Node version: 19.9.0 \
Angular cli version 15.0.4

## Process to run project in local
Install all prerequisite and then do following: 
1. Go to [News API](https://newsapi.org/) site.
2. Do login and get a `apiKey`;
3. Now clone the repository
4. Run command `$npm install`
5. Open file `news.config.ts` and change with your own `apiKey`. You need to remove older NEWS_API_KEY value and keep your own.
6. Now run command `ng serve` to run code in local. 
7. The calender shows from which date news are published. If you pick another date, it will show feeds from that date to today's date.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
