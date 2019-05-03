import { AdminLoginView } from '../views/admin-login/AdminLoginView.js';

export class AdminLoginController {

    constructor() {

        this._init();
    }

    _init() {

        this.adminLoginView = new AdminLoginView('.admin-login');
    }

    render() {

        this.adminLoginView.update();
    }
}

console.log('login controller');
