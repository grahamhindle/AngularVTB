import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { OperationFlow } from '../vtb.commod.biznet';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class OperationFlowService {

	
		private NAMESPACE: string = 'vtb.commod.biznet.OperationFlow';
	



    constructor(private dataService: DataService<OperationFlow>) {
    };

    public getAll(): Observable<OperationFlow[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<OperationFlow> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<OperationFlow> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<OperationFlow> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<OperationFlow> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
