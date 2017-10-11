import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
import * as _ from 'lodash';

@Component({
    props: {
        'model': Object
    }
})

export default class LoggersComponent extends Vue {
    perPage: number = 5;
    currentPage: number = 1;
    filter: any = null;
    pageOptions: Array<any> = [{text: 5, value: 5}, {text: 10, value: 10}, {text: 15, value: 15}];
    selectedLogger: any = null;
    lastLogs: string = '';

    @Prop()
    model: any;

    @Watch('model.loggers')
    onModelChanged(value: any, oldValue: any) {
        this.updateLastLogs();
    }

    updateLastLogs() {
        if (this.selectedLogger) {
            const updatedLogger = _.find(this.model.loggers, (el: any) => el.Name === this.selectedLogger.Name)
            if (updatedLogger)
                this.lastLogs = updatedLogger.LastLogs.join('\n');
            else
                this.selectedLogger = null;
        }
    }

    onLoggerSelected(item: any, index: number, event: any) {
        this.selectedLogger = item;
        this.lastLogs = item.LastLogs.join('\n');
    }

    get totalRows() {
        if (this.model)
            return this.model.loggers.length;
        return 0;
    };

    fields: Array<any> = [{
        key: 'Name', sortable: true, class: 'w-25'
    }, {
        key: 'FilePath', sortable: true, class: 'w-100'
    }]
}
