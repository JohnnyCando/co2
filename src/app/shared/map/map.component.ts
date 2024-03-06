import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-control-geocoder';
import { LoaderComponent } from '../loader/loader.component';
 
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: true,
  imports: [
    LoaderComponent
  ]
})
export class MapComponent implements AfterViewInit {
  @ViewChild('mapContainer') mapContainer!: ElementRef;
  private map: any;
  private mark: any;
  public mapLoading: boolean = true
 
  ngAfterViewInit() {
    setTimeout(() => {
      this.mapLoading = false;
      this.initMap();
    }, 2000);
  }
  private initMap(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);
 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
 
    const searchControl = (L.Control as any).geocoder({
      defaultMarkGeocode: false,
      collapsed: false,
      geocoder: (L.Control as any).Geocoder.nominatim(),
      markers: {
        icon: this.createCustomIcon(),
      },
    }).on('markgeocode', (e: any) => {
      this.map.setView(e.geocode.center, 150);
 
      const latitude = e.geocode.center.lat;
      const longitude = e.geocode.center.lng;
 
      console.log('Coordenadas:', latitude, longitude);
 
      if (this.mark && this.map.hasLayer(this.mark)) {
        this.map.removeLayer(this.mark);
      }

      this.mark = L.marker(e.geocode.center, { icon: this.createCustomIcon() }).addTo(this.map);
    }).addTo(this.map);
  }
 
  private createCustomIcon(): any {
    return L.icon({
      iconUrl: 'assets/icons/custom-marker.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });
  }
}
 