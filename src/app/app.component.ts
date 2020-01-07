import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tuto-activite-blog';

  posts =[
    {
      postTitle : "Mon premier post",
      postContent : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta sint impedit velit neque nesciunt tempore nostrum labore maxime a autem exercitationem ab veritatis, totam dolor vel veniam ullam deserunt.",
      postLoveIts: 5,
      created_at: new Date()  
    },
    {
      postTitle : "Mon Deuxième post",
      postContent : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta sint impedit velit neque nesciunt tempore nostrum labore maxime a autem exercitationem ab veritatis, totam dolor vel veniam ullam deserunt.",
      postLoveIts: -5,
      created_at: new Date()  
    },
    {
      postTitle : "Mon troisième post",
      postContent : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta sint impedit velit neque nesciunt tempore nostrum labore maxime a autem exercitationem ab veritatis, totam dolor vel veniam ullam deserunt.",
      postLoveIts : 0,
      created_at : new Date()  
    }
  ];
}
