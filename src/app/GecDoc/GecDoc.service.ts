import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { GecDoc } from '../vtb.commod.biznet';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class GecDocService {

	
		private NAMESPACE: string = 'vtb.commod.biznet.GecDoc';
	



    constructor(private dataService: DataService<GecDoc>) {
    };

    public getAll(): Observable<GecDoc[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<GecDoc> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<GecDoc> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<GecDoc> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<GecDoc> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
