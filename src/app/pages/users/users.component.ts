import { UsersService } from './../../../shared/services/users.service';
import { Component, OnInit } from "@angular/core";

import { ClrDatagridStateInterface } from "@clr/angular";
import { User, UserResponse } from '../../../shared/models/user';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
@Component({
    styleUrls: ['./users.component.scss'],
    templateUrl: './users.component.html',
})
export class UsersComponent {
    public users: User[];
    public total: number;
    public loading: boolean = true;
    public currentPage: number = 1;
    public modalConfig: any = {
        openModal: false,
        mode: '',
        user: undefined
    };

    public revealPassword = 'password';

    constructor(private service: UsersService) {
        this.modalConfig.userForm = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.minLength(4)),
            passwordConfirm: new FormControl('', Validators.minLength(4)),
            email: new FormControl('', this.customEmailValidator),
            role: new FormControl('', Validators.required)
        },
            this.passwordMatchValidator // your validation method
        );
    }

    refresh(state: ClrDatagridStateInterface) {
        this.loading = true;
        // We convert the filters from an array to a map, to facilitate the access
        let filters: { [prop: string]: any[] } = {};
        console.log(state);
        if (state.filters) {
            for (let filter of state.filters) {
                let { property, value } = <{ property: string, value: string }>filter;
                filters[property] = [value];
            }
        };
        // Take just username and call server
        this.getUsers((filters as any)['username']);
    }

    getUsers(username) {
        this.service.getUsers(username, this.currentPage).subscribe((res) => {
            console.log(res);
            this.users = res.data;
            this.total = res.total;
            this.loading = false;
        });
    }
    editUser() {
        const user: User = {
            username: this.modalConfig.userForm.get('username').value.toString(),
            email: this.modalConfig.userForm.get('email').value.toString(),
            role: this.modalConfig.userForm.get('role').value.toString(),
        };
        if (this.modalConfig.userForm.get('password').value.toString()) {
            user.password = this.modalConfig.userForm.get('password').value.toString()
        }
        // this.service.editUsers(user).subscribe((userEdited) => {
        //     console.log('Edit:');
        //     console.log(userEdited);
        //     this.getUsers(undefined);
        // })
    }
    removeUser() {
        // this.service.deleteUsers(this.modalConfig.userForm.get('username').value).subscribe((userDeleted) => {
        //     console.log('Rmv:');
        //     console.log(userDeleted);
        //     this.getUsers(undefined);
        // });
    }
    insertUser() {
        const user: any = {
            username: this.modalConfig.userForm.get('username').value.toString(),
            password: this.modalConfig.userForm.get('password').value.toString(),
            role: this.modalConfig.userForm.get('role').value.toString(),
        };
        if (this.modalConfig.userForm.get('email').value.toString()) {
            user.email = this.modalConfig.userForm.get('email').value.toString();
        }
        // this.service.insertUsers(user).subscribe((userNew) => {
        //     console.log('New:')
        //     console.log(userNew)
        //     this.getUsers(undefined);
        // });
    }
    onSubmit() {
        if (this.modalConfig.mode === 'edit') {
            this.editUser();
        } else if (this.modalConfig.mode === 'remove') {
            this.removeUser();
        } else if (this.modalConfig.mode === 'new') {
            this.insertUser();
        }
        this.modalConfig.openModal = false;
    }

    onActionSelected(user: User, mode: string) {
        // mode: new, edit or remove
        this.modalConfig.openModal = true;
        this.modalConfig.mode = mode;
        if (mode === 'new') {
            user = {
                username: '',
                email: '',
                role: ''
            }
            this.modalConfig.userForm.get('username').enable();
            this.modalConfig.userForm.get('password').setValidators([Validators.required]);
            this.modalConfig.userForm.get('passwordConfirm').setValidators([Validators.required]);
        } else {
            // is edit or remove
            this.modalConfig.userForm.get('username').disable();
            this.modalConfig.userForm.get('password').setValidators();
            this.modalConfig.userForm.get('passwordConfirm').setValidators();
        }

        // Reset the form with user properties or blank
        this.modalConfig.userForm.get('username').setValue(user.username);
        this.modalConfig.userForm.get('password').setValue('');
        this.modalConfig.userForm.get('passwordConfirm').setValue('');
        this.modalConfig.userForm.get('email').setValue(user.email);
        this.modalConfig.userForm.get('role').setValue(user.role);
    }
    passwordMatchValidator(g: FormGroup) {
        return g.get('password').value === g.get('passwordConfirm').value
            ? null : { 'mismatch': true };
    }
    private customEmailValidator(control: AbstractControl) {
        if (!control.value) {
            return null;
        }
        return Validators.email(control);
    }
}
