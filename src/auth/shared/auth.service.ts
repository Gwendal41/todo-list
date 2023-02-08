import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';
import { BehaviorSubject} from 'rxjs';

@Injectable()
export class AuthService {

  isLogged = false;
  user$: BehaviorSubject<firebase.default.auth.UserCredential> = new BehaviorSubject<firebase.default.auth.UserCredential>({} as firebase.default.auth.UserCredential);


  constructor(
    private firebaseAuth : AngularFireAuth,
    private router : Router,
    private messageService : MessageService
  ) { }

  signUp(email: string, password: string): void {
    this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(()=> {
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Création de compte reussie'});
      setTimeout(() => {
        this.router.navigate(['/todo']);
      }, 2000);
    })
    .catch(() => this.messageService.add({severity:'error', summary: 'Error', detail: 'Email deja associé a un compte'}))
  }

  signIn(email: string, password: string): void {
    this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then((user) => {
      this.user$.next(user);
      this.router.navigate(["/todo"]);
    } )
    .catch((err) => {
      if (err.code === 'auth/wrong-password') {
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "Mot de passe incorrect", life: 5000 });
      }
      if (err.code === 'auth/invalid-email') {
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "L'adresse email n'est pas au bon format", life: 5000 });
      }
      if (err.code === 'auth/user-not-found') {
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "L'adresse email renseignée n'est liée à aucun compte.", life: 5000 });
      }
  })
  }

  signOut(): void {
    this.firebaseAuth.signOut();
    this.isLogged = false; 
    if(this.isLogged === false){
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Déconnexion reussie'});
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    }
  }

  resetPassword(email:string): void {
    this.firebaseAuth.sendPasswordResetEmail(email);
  }
}
