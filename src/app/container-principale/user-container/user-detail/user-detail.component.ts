import { Component, OnInit } from '@angular/core';
import { gender, Job, User } from 'src/app/models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users:User[]=
  [
    {
      id: 3487,
      name: 'Mario',
      surname: 'Rossi',
      age: 30,
      dateOfBirth: '1995-14-12',
      address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100'
      },
      role: Job.staff,
      username: 'MarioRossi80',
      profilePhotoUrl: 'https://www.gelestatic.it/thimg/0g2rIKgniy0MVTxmOGZY9G0uOk8=/fit-in/960x540/https%3A//www.lastampa.it/image/contentid/policy%3A1.40556551%3A1627768482/Pumpkin%2520the%2520Ginger%2520Tabby%2520.jpg%3Ff%3Ddetail_558%26h%3D720%26w%3D1280%26%24p%24f%24h%24w%3Dfcf687b',
      gender: gender.male,
      companies: [
        {
          id: 148979,
          name: 'Develhope',
          description: 'La migliore',
          location: {
            city: 'Palermo',
            street: 'Via Libertà 58',
            postalCode: '90139'
          }
        },
        {
          id: 123123,
          name: 'Apple',
          description: 'E insomma...',
          location: {
            city: 'Cupertino',
            street: 'One Apple Park Way',
            postalCode: '95014'
          }
        }
      ]
    }
  ]

}
