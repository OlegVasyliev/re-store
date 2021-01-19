export default class BookstoreService {

      data = [

          {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 20,
            coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Book_stub_img.svg/768px-Book_stub_img.svg.png"
          },
          {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard',
            price: 30,
            coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Book_stub_img.svg/768px-Book_stub_img.svg.png"
          }

      ];


  getBooks() {
    return new Promise((resolve) => {
      setInterval(() => {
        resolve(this.data)
      }, 700);
    });
  }

  }