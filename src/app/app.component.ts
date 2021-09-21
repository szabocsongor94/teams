import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'teams1';

  filterString: string = '';

  mymodel: any = "";

  teams: Array<any> = [
    { name: 'Próba Gergő', image: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png', title: 'Designer' },
    { name: 'Kovács Nadal', image: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png', title: 'Designer' },
    { name: 'Ide Egyed', image: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png', title: 'Designer' },
    { name: 'Nemut János', image: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png', title: 'Designer' },
    { name: 'Vége Imre', image: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png', title: 'Designer' },
    { name: 'Zsoldos Noémi', image: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png', title: 'Designer' },
    { name: 'Dr Nice7', image: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png', title: 'Designer' },
    { name: 'Dr Nice8', image: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png', title: 'Designer' },
    { name: 'Dr Nice9', image: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png', title: 'Designer' },
    { name: 'Dr Nice10', image: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png', title: 'Designer' },
    { name: 'Dr Nice11', image: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png', title: 'Designer' },
    { name: 'Dr Nice12', image: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png', title: 'Designer' },
    { name: 'Dr Nice13', image: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png', title: 'Designer' },
    { name: 'Dr Nice14', image: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png', title: 'Designer' },
    { name: 'Dr Nice15', image: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png', title: 'Designer' },
    { name: 'Dr Nice16', image: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png', title: 'Designer' },
  ].map(team => ({ ...team, id: this.uuidv4(), isActive: false }));

  filteredTeams = this.teams.slice();

  ngOnInit() {
    console.log(this.teams);

  }


  filterUsers = (event: any) => {

    if (!this.mymodel) {
      this.filteredTeams = this.teams.slice();
      return;
    }

    this.filteredTeams = this.teams
      .filter(team => team.name.toLowerCase().includes(this.mymodel.toLowerCase()))
  }

  activateTeam(member: any) {

    const i = this.teams.findIndex(team => member.id === team.id);

    this.teams[i].isActive = !this.teams[i].isActive;





  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }



}

