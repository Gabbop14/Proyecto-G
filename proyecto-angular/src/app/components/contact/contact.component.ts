import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public _MessageService: MessageService) { }

  ngOnInit(): void {
  }

  clearForm(){
    (<HTMLFormElement>document.getElementById("contact")).reset();
   }

  contactForm(form: any) {
    this._MessageService.sendMessage(form).subscribe(() => {
      Swal.fire("Formulario de Contacto", "Mensaje enviado correctamente", 'success');
      this.clearForm();
    });
  }

}
