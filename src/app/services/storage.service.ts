import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';
import { finalize } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(public storage: AngularFireStorage) { }


uploadImage(file: any, path:any, nombre: any): Promise<string>{
  return new Promise( resolve =>{
const filePath = path+'/'+nombre;
const ref = this.storage.ref(filePath);
const task = ref.put(file);
task.snapshotChanges().pipe(
  finalize(()=>{
     ref.getDownloadURL().subscribe(res =>{const downloadURL = res;resolve(downloadURL);});
     
     return;
  })
  ).subscribe();
  });
}

async getAllImageUrls(path: any): Promise<{ name: string, url: string }[]> {
  const listResult = await this.storage.ref(path).listAll().toPromise();
  const imagesInfo: { name: string, url: string }[] = [];

  if (listResult && listResult.items) {
    await Promise.all(listResult.items.map(async (itemRef) => {
      const url = await itemRef.getDownloadURL();
      const name = itemRef.name;
      imagesInfo.push({ name, url });
    }));
  }

  return imagesInfo;
}



}
