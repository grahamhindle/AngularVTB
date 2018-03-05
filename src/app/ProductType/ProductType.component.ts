import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProductTypeService } from './ProductType.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-ProductType',
	templateUrl: './ProductType.component.html',
	styleUrls: ['./ProductType.component.css'],
  providers: [ProductTypeService]
})
export class ProductTypeComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          productId = new FormControl("", Validators.required);
        
  
      
          productName = new FormControl("", Validators.required);
        
  
      
          productDesc = new FormControl("", Validators.required);
        
  
      
          approved = new FormControl("", Validators.required);
        
  


  constructor(private serviceProductType:ProductTypeService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          productId:this.productId,
        
    
        
          productName:this.productName,
        
    
        
          productDesc:this.productDesc,
        
    
        
          approved:this.approved
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceProductType.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "vtb.commod.biznet.ProductType",
      
        
          "productId":this.productId.value,
        
      
        
          "productName":this.productName.value,
        
      
        
          "productDesc":this.productDesc.value,
        
      
        
          "approved":this.approved.value
        
      
    };

    this.myForm.setValue({
      
        
          "productId":null,
        
      
        
          "productName":null,
        
      
        
          "productDesc":null,
        
      
        
          "approved":null
        
      
    });

    return this.serviceProductType.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "productId":null,
        
      
        
          "productName":null,
        
      
        
          "productDesc":null,
        
      
        
          "approved":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "vtb.commod.biznet.ProductType",
      
        
          
        
    
        
          
            "productName":this.productName.value,
          
        
    
        
          
            "productDesc":this.productDesc.value,
          
        
    
        
          
            "approved":this.approved.value
          
        
    
    };

    return this.serviceProductType.updateAsset(form.get("productId").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceProductType.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceProductType.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "productId":null,
          
        
          
            "productName":null,
          
        
          
            "productDesc":null,
          
        
          
            "approved":null 
          
        
      };



      
        if(result.productId){
          
            formObject.productId = result.productId;
          
        }else{
          formObject.productId = null;
        }
      
        if(result.productName){
          
            formObject.productName = result.productName;
          
        }else{
          formObject.productName = null;
        }
      
        if(result.productDesc){
          
            formObject.productDesc = result.productDesc;
          
        }else{
          formObject.productDesc = null;
        }
      
        if(result.approved){
          
            formObject.approved = result.approved;
          
        }else{
          formObject.approved = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "productId":null,
        
      
        
          "productName":null,
        
      
        
          "productDesc":null,
        
      
        
          "approved":null 
        
      
      });
  }

}
