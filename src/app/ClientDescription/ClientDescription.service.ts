import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { ClientDescription } from '../vtb.commod.biznet';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ClientDescriptionService {

	
		private NAMESPACE: string = 'vtb.commod.biznet.ClientDescription';
	



    constructor(private dataService: DataService<ClientDescription>) {
    };

    public getAll(): Observable<ClientDescription[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<ClientDescription> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<ClientDescription> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<ClientDescription> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<ClientDescription> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
