import { Component } from '@angular/core';

interface Serie {
  _id: string,
  id: number,
  title: string,
  creator: string,
  rating: number,
  dates: string,
  image: string,
  channel: string
}

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {

  series: Serie[];

  constructor() {
    this.series = [{ "_id": "63741002e2c75d8744f80a52", "id": 3, "title": "Stranger Things", "creator": "Matt Duffer, Ross Duffer", "rating": 8.7, "dates": "2016-", "image": "https://es.web.img3.acsta.net/pictures/19/06/04/16/39/4888520.jpg", "channel": "Netflix" }, { "_id": "63741002e2c75d8744f80a51", "id": 2, "title": "Breaking Bad", "creator": "Vince Gilligan", "rating": 9.4, "dates": "2008-2013", "image": "https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg", "channel": "AMC" }, { "_id": "63741002e2c75d8744f80a53", "id": 4, "title": "The Boys", "creator": "Eric Kripke", "rating": 8.7, "dates": "2019-", "image": "https://es.web.img3.acsta.net/pictures/20/08/05/09/15/4715259.jpg", "channel": "Prime Video" }, { "_id": "63741002e2c75d8744f80a54", "id": 5, "title": "The Mandalorian", "creator": "Jon Favreau", "rating": 8.8, "dates": "2019-", "image": "https://static.wikia.nocookie.net/esstarwars/images/2/29/MandoS2PosterES.jpg", "channel": "Disney +" }, { "_id": "63741002e2c75d8744f80a50", "id": 1, "title": "Juego de Tronos", "creator": "David Benioff, D.B. Weiss", "rating": 9.2, "dates": "2011-2019", "image": "https://es.web.img3.acsta.net/pictures/19/03/22/10/08/5883111.jpg", "channel": "HBO" }, { "_id": "63741002e2c75d8744f80a55", "id": 7, "title": "Peaky Blinders", "creator": "Steven Knight", "rating": 8.8, "dates": "2013-", "image": "https://es.web.img3.acsta.net/pictures/18/11/24/02/21/0536396.jpg", "channel": "BBC" }, { "_id": "63741002e2c75d8744f80a56", "id": 8, "title": "Vikings", "creator": "Michael Hirst", "rating": 8.5, "dates": "2013-2020", "image": "https://m.media-amazon.com/images/I/71K8PxDUOsL._AC_SY741_.jpg", "channel": "Prime Video" }, { "_id": "63741002e2c75d8744f80a57", "id": 9, "title": "The Walking Dead", "creator": "Frank Darabont, Angela Kang", "rating": 8.2, "dates": "2010-2022", "image": "https://m.media-amazon.com/images/I/61EEBfj+THL._AC_SY741_.jpg", "channel": "AMC" }, { "_id": "63741002e2c75d8744f80a58", "id": 6, "title": "WandaVision", "creator": "Jac Schaeffer", "rating": 8, "dates": "2021", "image": "https://static.wikia.nocookie.net/disney/images/5/5e/WandaVision_official_teaster_poster.png", "channel": "Disney +" }]
  }

  trackSerie(index: number, item: Serie) {
    // return this.series[index]._id;
    return item._id;
  }

}
