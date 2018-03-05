import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Description } from '../vtb.commod.biznet';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class DescriptionService {

	
		private NAMESPACE: string = 'vtb.commod.biznet.Description';
	



    constructor(private dataService: DataService<Description>) {
    };

    public getAll(): Observable<Description[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Description> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Description> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Description> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Description> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
