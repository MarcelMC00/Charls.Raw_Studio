import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  imports: [ CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {

  constructor(private sanitizer: DomSanitizer) {}

  imagenes: { src: string, esVideo?: boolean }[] = [
    { src: 'img/Copia de BodaGyE_169.jpg' },
    { src: 'https://youtube.com/embed/tbWboR-LbVQ', esVideo: true },
    { src: 'img/7Z4A0099.jpg' },
    { src: 'img/Copia de _MG_1862.jpg' },
    { src: 'img/Copia de BodaEyI_499.jpg' },
    { src: 'img/Copia de Boda Jessica Vicente 079.jpg' },
    { src: 'img/Copia de Boda Jessica Vicente 122.jpg' },
    { src: 'img/Copia de Boda Jessica Vicente 052.jpg' },
    { src: 'img/Copia de Boda Jessica Vicente 017.jpg' },
    { src: 'img/BodaMyA_591.jpg' },
    { src: 'img/Copia de _MG_1875.jpg' },
    { src: 'img/Copia de BodaEyI_490.jpg' },
    { src: 'img/Copia de BodaEyI_529.jpg' },
    { src: 'img/Copia de BodaEyI_564.jpg' },
    { src: 'img/Copia de BodaEyI_611.jpg' },
    { src: 'img/Copia de BodaEyI_620.jpg' },
    { src: 'img/Copia de BodaGyE_180.jpg' },
    { src: 'img/Copia de BodaGyE_242.jpg' },
    { src: 'img/HyJ_06072024_014.JPG' },
    { src: 'img/HyJ_06072024_015.JPG' },
    { src: 'img/HyJ_06072024_108.JPG' },
    { src: 'img/HyJ_06072024_111.JPG' },
    { src: 'img/HyJ_06072024_517.JPG' }
  ];

  sanitizeVideoUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  lightboxAbierto: boolean = false;
  mediaActual: string = '';
  esVideoActual: boolean = false;
  mostrarBotonArriba: boolean = false;

  @HostListener('window:scroll', [])
  onScroll() {
    this.mostrarBotonArriba = window.scrollY > 100;
  }

  abrirLightbox(media: string, esVideo: boolean) {
    this.mediaActual = media;
    this.esVideoActual = esVideo;
    this.lightboxAbierto = true;
  }

  cerrarLightbox() {
    this.lightboxAbierto = false;
    this.mediaActual = '';
    this.esVideoActual = false;
  }

  volverArriba() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    this.precargarImagenes();
  }

  precargarImagenes() {
    this.imagenes.forEach((imagen) => {
      if (imagen.esVideo) {
        const img = new Image();
        img.src = imagen.src;
      }
    });
  }

}
