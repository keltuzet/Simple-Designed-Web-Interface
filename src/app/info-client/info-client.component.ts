import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientsDatabaseService } from '@shared/services';

@Component({
  selector: 'app-info-client',
  templateUrl: './info-client.component.html',
  styleUrls: ['./info-client.component.scss'],
})
export class InfoClientComponent implements OnInit {
  id: number;

  constructor(
    private clientsDatabaseService: ClientsDatabaseService,
    private activateRoute: ActivatedRoute
  ) {
    this.id = activateRoute.snapshot.params['id'];
    this.clientsDatabaseService.getClientById(this.id).subscribe((client) => {
      console.log(client);
    });
    console.log(activateRoute);
  }

  ngOnInit(): void {}
}
