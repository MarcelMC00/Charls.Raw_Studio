import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html' ,
  styleUrl: './home.css',
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1500ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1500ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class Home implements OnInit, OnDestroy {

  slides = [
    {
      image: 'img/HyJ_06072024_360.JPG',
      title: 'Capturando momentos inolvidables',
      description: 'Fotografía y vídeo profesional para bodas, eventos y sesiones personalizadas. Inspira, emociona, recuerda.'
    },
    {
      image: 'img/HyJ_06072024_070.JPG',
      title: 'Tu historia en imágenes',
      description: 'No solo tomamos fotos, creamos recuerdos visuales llenos de emoción, belleza y verdad.'
    },
    {
      image: 'img/Copia de BodaGyE_007.jpg',
      title: 'Un día, mil emociones',
      description: 'Desde la mirada cómplice hasta el abrazo más sincero, inmortalizamos cada detalle de tu gran día.'
    },
    {
      image: 'img/prebodaCyP083.JPG',
      title: 'Emociones que se sienten al mirar',
      description: 'Bodas, eventos y momentos especiales con un enfoque artístico, elegante y lleno de vida.'
    }
  ];

  currentIndex = 0;
  
  autoSlideInterval: any;

  imageLoaded = false;


  ngOnInit() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 10000);
  }

  ngOnDestroy() {
    if (this.autoSlideInterval){
      clearInterval(this.autoSlideInterval);
    }
  }

  prevSlide() {
    this.imageLoaded = false;
    this.currentIndex = (this.currentIndex === 0) ? this.slides.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.imageLoaded = false;
    this.currentIndex = (this.currentIndex === this.slides.length - 1) ? 0 : this.currentIndex + 1;
  }
}
