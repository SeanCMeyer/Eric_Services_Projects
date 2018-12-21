[√] Generate "realistic" mock data (for 100 primary records) and load it into your DB

[√] Your team may not use downloaded data or pre-existing data. Each team member must generate their own data.

[√] Your team may must not copy the same data into each service's database. Each team member must generate data that is specific to what their service/widget requires and presents to the user.

[] The primary record represents an item. If your service/widget is responsible for related data, you will likely generate more than 100 records. For example, there is a 1:1 relationship between an item and its description, but there is a 1:n relationship between an item and it's reviews/photos/etc.
  
  ○ The number of related records should vary between items; the goal is to create a realistic representation of an item page. For example, not every item will have 10 reviews or 10 photos. Some items will have zero reviews, some will have 20. Create variations as appropriate.

[] If you are working on a media-centric widget: DO NOT SERVE YOUR MEDIA ASSETS FROM EXPRESS. Instead, transfer your media assets to S3 and/or Cloudfront. Be sure the URLs in your database correctly refer to the location of your assets.

[√] Build a server that can serve an index.html file which then loads the app and renders it to the page (using react and webpack-dev [development] and webpack [production]).

  ○ Each member of the team must run their service on a different port number

  ○ The focus of this project is on Front-end deliverables. Your server and database design must be the minimum design necessary to deliver content to your React Component. If your server has more than 100 lines of code, you may be putting too much emphasis on your server.

[] Build an API that the React component will use to fetch data based on an item's ID and/or name.
  ○ Your server must be able to serve up the correct content by an item's ID and by that item's name. Note: this requirement has considerations for both your API design and your url decisions.

* Write tests to ensure your API works correctly and your component(s) render correctly
  ○ Jest will help you measure code coverage of your tests.

* Required Tech:
  ○ Express
  ○ Database (MongoDB or MySQL)
  ○ Webpack (production)
  ○ Webpack-dev (development)
  ○ React using Styled Components or CSS Modules
    • You must style your components use Style Components or CSS Modules
    • Do not use any jQuery UI components: instead opt for using React Libraries for subordinate UI components
  ○ Enzyme (for React) + Jest
  ○ Travis or Circle CI

* Optional Tech:
  ○  CSS Preprocessor
  ○  memcache and/or redis
  ○  nginx
