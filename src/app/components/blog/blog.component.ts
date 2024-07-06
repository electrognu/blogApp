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
  alertText: string = " ";


  ngOnInit() {
    this.fillInitialData();
  }

  testAndSave($event: any) {
    if (this.newBlogItem.title === '' || this.newBlogItem.imageUrl === '' || this.newBlogItem.content === '' || this.newBlogItem.date === '') {
      this.alertText = 'Todos los campos son obligatorios';
    } else {
      this.blogItems.push(this.newBlogItem);
      this.newBlogItem = { title: '', imageUrl: '', content: '', date: '' };
      this.alertText = ' ';
    }
  }

  loadBlogNews() {
    let html = "";
    this.blogItems.forEach((item) => {
      html += `<li class="newWrapper">
                <div class="newHeader">
                  <div class="newTitle">${item.title}</div>
                  <div> ${item.date}</div>
                </div>
                <div class="newContent">
                  <div><img src="${item.imageUrl}"></img></div>
                  <div> ${item.content}</div>
                </div>
                
            </li>
            `;
    });
    return html;

  }

  fillInitialData() {
    this.blogItems.push({
      title: 'Noticia 1',
      imageUrl: 'https://placehold.co/150x150/png',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec eros nec odio tincidunt tincidunt. Nulla facilisi. Nullam sit amet turppis',
      date: '2024-07-04'
    });
    this.blogItems.push({
      title: 'Noticia 2',
      imageUrl: 'https://placehold.co/150x150/png',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec eros nec odio tincidunt tincidunt. Nulla facilisi. Nullam sit amet turpis nec est volutpat tincidunt. Nulla facilisi. ',
      date: '2024-07-05'
    });
  }

}
