import { View } from '../index.view.js';
import '../../scss/layout/admin-login.scss';

export class AdminLoginView extends View {

    constructor(el) {
        super(el);
    };

    _template() {
        return `
            <h1>Admin login via template</h1>
            <p>Uma nova font</p>
        `
    };
}
