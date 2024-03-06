import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';

declare var google: any;

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss',
})
export class GoogleMapComponent implements OnInit {
  public mapLoading: boolean = true;
  public marker: any;
  @Input() initialCoords: any = null;
  @Output() coordsSelected = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.mapLoading = false;
      const mapElement = document.getElementById('map');

      let mapConfig = {
        center: { lat: 40.4165, lng: -3.70256 },
        zoom: 10,
      }

      if (this.initialCoords) {
        mapConfig = {
          center: this.initialCoords,
          zoom: 10
        }
      }

      let map = new google.maps.Map(mapElement, mapConfig);

      if (this.initialCoords) {
        this.marker = new google.maps.Marker({
          position: this.initialCoords,
          map: map,
          title: 'Posición seleccionada',
        });
      }

      map.addListener('click', (mapsMouseEvent: any) => {
        let coords = mapsMouseEvent.latLng.toJSON();
        this.coordsSelected.emit(coords)

        if (this.marker) {
          this.marker.setMap(null);
        }

        this.marker = new google.maps.Marker({
          position: mapsMouseEvent.latLng,
          map: map,
          title: 'Posición seleccionada',
        });
      });

      this.initAutocomplete(map);
    }, 1000);
  }

  private initAutocomplete(map: any): void {
    const input = document.getElementById('pac-input');
    const searchBox = new google.maps.places.SearchBox(input)
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

    map.addListener("bounds_changed", ()=>{
      searchBox.setBounds(map.getBounds())
    })

    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();

      if (!place.geometry || !place.geometry.location) {
        console.log('no se encontraron detalles del lugar');
        return;
      }

      let coords = place.geometry.location.toJSON();
      this.coordsSelected.emit(coords)

      if (this.marker) {
        this.marker.setMap(null);
      }

      this.marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        title: 'Posición seleccionada',
      });

      map.panTo(place.geometry.location);
      map.setZoom(15);
    });
  }
}
