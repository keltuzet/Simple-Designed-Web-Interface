import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientBaseModel } from '@shared/models/client-base.model';
import { ROUTE } from '@shared/const';
import { ClientsDatabaseService } from '@shared/services';

@Component({
  selector: 'app-info-client',
  templateUrl: './info-client.component.html',
  styleUrls: ['./info-client.component.scss'],
})
export class InfoClientComponent implements OnInit {
  id: number;
  client: ClientBaseModel;

  constructor(
    private clientsDatabaseService: ClientsDatabaseService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = +activateRoute.snapshot.params.id;
    if (!isNaN(this.id)) {
      this.clientsDatabaseService.getClientById(this.id).subscribe((client) => {
        if (client) {
          this.client = client;
        } else {
          this.router.navigate([ROUTE.client_not_found, { id: this.id }]);
        }
      });
    } else {
      this.router.navigate([ROUTE.not_found]);
    }
  }

  ngOnInit(): void {}
}
