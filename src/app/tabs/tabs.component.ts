import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = []

  chosenList = 'all'

  constructor() { }

  ngOnInit() {
  }

  onChoose(side) {
    this.chosenList = side
  }

  getCharacters() {
    // need to access the service in app dir
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name
    })
    this.characters[pos].side = charInfo.side
  }
}
