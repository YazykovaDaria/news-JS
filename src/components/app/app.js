import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sourses = document.querySelector('.sources');
        sourses.addEventListener('click', (e) =>
            this.controller.getNews(e, (data) => {
                this.view.toggleSelect(sourses);
                this.view.drawNews(data);
            })
        );
        this.controller.getSources((data) => this.view.drawSources(data));

        const selectBody = document.querySelector('.select__header');
        selectBody.addEventListener('click', () => {
            this.view.toggleSelect(sourses);
        });
    }
}

export default App;
