import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent {

  // settings = {
  //   add: {
  //     addButtonContent: '<i class="nb-plus"></i>',
  //     createButtonContent: '<i class="nb-checkmark"></i>',
  //     cancelButtonContent: '<i class="nb-close"></i>',
  //   },
  //   edit: {
  //     editButtonContent: '<i class="nb-edit"></i>',
  //     saveButtonContent: '<i class="nb-checkmark"></i>',
  //     cancelButtonContent: '<i class="nb-close"></i>',
  //   },
  //   detail: {
  //     detailButtonContent: '<i class="nb-plus"></i>',
  //   },
  //   delete: {
  //     deleteButtonContent: '<i class="nb-trash"></i>',
  //     confirmDelete: true,
  //   },
  //   columns: {
  //     id: {
  //       title: 'ID',
  //       type: 'number',
  //     },
  //     firstName: {
  //       title: 'Nom',
  //       type: 'string',
  //     },
  //     lastName: {
  //       title: 'Prénom',
  //       type: 'string',
  //     },
  //     email: {
  //       title: 'E-mail',
  //       type: 'string',
  //     },
  //     city: {
  //       title: 'Ville',
  //       type: 'string',
  //     },
  //     country: {
  //       title: 'Pays',
  //       type: 'string',
  //     },
  //   },
  // };

  // source: LocalDataSource = new LocalDataSource();
  members: any[] = []
  current: any
  showDetail: boolean = false

  constructor(private service: SmartTableData) {
    // const data = this.service.getData();
    // const data = this.getData();
    // this.source.load(data);
    this.members = this.getData()
    this.current = this.members[0]
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  getData() {
    const data = [{
      id: 1,
      firstName: 'Mark',
      lastName: 'Otto',
      email: 'mdo@gmail.com',
      city: 'Paris',
      country : 'France'
    }, {
      id: 2,
      firstName: 'Jacob',
      lastName: 'Thornton',
      email: 'fat@yandex.ru',
      city: 'Paris',
      country : 'France'
    }, {
      id: 3,
      firstName: 'Larry',
      lastName: 'Bird',
      email: 'twitter@outlook.com',
      city: 'Paris',
      country : 'France'
    },{
    id: 4,
    firstName: 'Mark',
    lastName: 'Otto',
    email: 'mdo@gmail.com',
    city: 'Paris',
    country : 'France'
  }, {
    id: 5,
    firstName: 'Jacob',
    lastName: 'Thornton',
    email: 'fat@yandex.ru',
    city: 'Paris',
    country : 'France'
  }, {
    id: 6,
    firstName: 'Larry',
    lastName: 'Bird',
    email: 'twitter@outlook.com',
    city: 'Paris',
    country : 'France'
  }]
    return data
  }

  select(index: number) {
    this.showDetail = true
    this.current = this.members[index]
  }

  backToList() {
    this.showDetail = false
  }
}
