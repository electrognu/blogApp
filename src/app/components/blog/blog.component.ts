import { Component } from '@angular/core';
import { Blogitem } from '../../intefaces/blogitem.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  newBlogItem: Blogitem = { title: '', imageUrl: '', content: '', date: '' };
  blogItems: Blogitem[] = [];

  constructor() {
    console.log('BlogComponent created');
  }

  ngOnInit() {
    this.fillInitialData();
  }

  testAndSave($event: any) {
    console.log('testAndSave', $event);

    this.blogItems.push(this.newBlogItem);
    this.newBlogItem = { title: '', imageUrl: '', content: '', date: '' };
  }


  loadBlogNews() {
    let html = "";
    this.blogItems.forEach((item) => {
      html += `<li class="noticia">
                <div>${item.imageUrl}</div>
                <div>${item.title}</div>
                <div> ${item.date}</div>
                <div> ${item.content}</div>
            </li>
            `;
    });
    return html;
  }



  fillInitialData() {
    this.blogItems.push({
      title: 'Noticia 1',
      imageUrl: 'https://via.placeholder.com/150',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec eros nec odio tincidunt tincidunt. Nulla facilisi. Nullam sit amet turpis nec est volutpat tincidunt. Nulla facilisi. Nullam sit amet turpis nec est volutpat tincidunt.',
      date: '2020-03-01'
    });
    this.blogItems.push({
      title: 'Noticia 2',
      imageUrl: 'https://via.placeholder.com/150',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec eros nec odio tincidunt tincidunt. Nulla facilisi. Nullam sit amet turpis nec est volutpat tincidunt. Nulla facilisi. Nullam sit amet turpis nec est volutpat tincidunt.',
      date: '2020-03-02'
    });
  }





}
