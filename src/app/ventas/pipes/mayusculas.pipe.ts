import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas' 
})
export class MayusculasPipe implements PipeTransform {
    
    transform(valor: string, enMayusculas: Boolean = true): string {
        
        return (enMayusculas) ? valor.toUpperCase() : valor.toLocaleLowerCase();
    }

}